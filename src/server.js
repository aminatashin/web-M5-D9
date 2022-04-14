import express from "express";
import mediaRouter from "./media/media.js";

// -----------------------------
const server = express();
const { PORT } = process.env;
// -------------------------------
server.use(express.json());
server.use("/media", mediaRouter);
// -----------------------------
server.listen(PORT, () => {
  console.log(`server is Running${PORT}`);
});
