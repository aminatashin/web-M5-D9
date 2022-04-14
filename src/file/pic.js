import express from "express";
import multer from "multer";
import { saveImg } from "../fs-tools/fs.js";
// ------------------------------
const picRouter = express.Router();
// ---------------------------------
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
export default picRouter;
