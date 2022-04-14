import fs from "fs-extra";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
const datapath = join(dirname(fileURLToPath(import.meta.url)), "../data");
const mediaPath = join(datapath, "../data/media.json");
export const getMedia = () => fs.readJson(mediaPath);
export const writeMedia = (content) => fs.writeJSON(mediaPath, content);
const publicImgPath = join(process.cwd(), "./public/img/users");
export const saveImg = (filename, contentbuffer) =>
  fs.writeFile(join(publicImgPath, filename), contentbuffer);
