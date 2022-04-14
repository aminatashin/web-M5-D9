import express from "express";
import multer from "multer";
import { saveImg } from "../fs-tools/fs.js";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
// ------------------------------
const picRouter = express.Router();
// ---------------------------------
const cloudinaryUpload = multer({
  storage: new CloudinaryStorage({ cloudinary, params: { folder: "M5D9" } }),
}).single("avatar");
picRouter.post(
  "/picUpload",
  multer().single("avatar"),
  async (req, res, next) => {
    try {
      console.log(req.file);
      await saveImg(req.file.originalname, req.file.buffer);
      res.send();
    } catch (error) {
      next(error);
    }
  }
);
picRouter.post("/cloudinaryUpdate", cloudinaryUpload, (req, res, next) => {
  try {
    res.send();
  } catch (error) {
    next(error);
  }
});
export default picRouter;
