import fs from "fs-extra";
import { fileURLToPath } from "url";
import { dirname, join, extname } from "path";

const datapath = join(dirname(fileURLToPath(import.meta.url)), "../data");
const mediaPath = join(datapath, "../data/media.json");
export const getMedia = () => fs.readJson(mediaPath);
export const writeMedia = (content) => fs.writeJSON(mediaPath, content);
const publicImgPath = join(process.cwd(), "./public/img/users");
export const saveImg = (picN, bufN) =>
  fs.writeFile(join(publicImgPath, picN), bufN);
// ----------------------------------------------------
export const upoloadFile = (req, res, next) => {
  try {
    const { originalname, buffer } = req.file;
    const extention = extname(originalname);

    const fileName = `${req.params.mediaId}${extention}`;
    const filePath = join(publicImgPath, fileName);
    fs.writeFile(filePath, buffer);

    const url = `http://localhost:3001/${fileName}`;
    req.fil = url;
    next();
  } catch (error) {
    next(error);
  }
};
