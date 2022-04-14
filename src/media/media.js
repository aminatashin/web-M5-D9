import express from "express";
// --------------------------------
const mediaRouter = express.Router;
// --------------------------------
mediaRouter.post("/", async (req, res, next) => {
  res.send();
});
mediaRouter.get("/", async (req, res, next) => {
  res.send();
});
mediaRouter.get("/:mediaId", async (req, res, next) => {
  res.send();
});
mediaRouter.put("/:mediaId", async (req, res, next) => {
  res.send();
});
mediaRouter.delete("/:mediaId", async (req, res, next) => {
  res.send();
});
// --------------------------------
export default mediaRouter;
