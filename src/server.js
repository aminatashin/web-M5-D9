import express from "express";
import mediaRouter from "./media/media.js";
import cors from "cors";
import { join } from "path";
import picRouter from "./file/pic.js";

// -----------------------------
const server = express();
const { PORT } = process.env;
// -------------------------------
server.use(express.json());
server.use(cors());
const publicPath = join(process.cwd(), "./public");
// -----------------------------
server.use("/media", mediaRouter);
server.use(express.static(publicPath));
server.use("/file", picRouter);
// ---------------------------------
server.listen(PORT, () => {
  console.log(`server is Running${PORT}`);
});
