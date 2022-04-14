import express from "express";
import { getMedia, writeMedia } from "../fs-tools/fs.js";
import uniqid from "uniqid";
import creatError from "http-errors";
// --------------------------------
const mediaRouter = express.Router();
// --------------------------------
mediaRouter.post("/", async (req, res, next) => {
  try {
    const newThing = { ...req.body, creatAt: new Date(), id: uniqid() };
    const media = await getMedia();
    media.push(newThing);
    await writeMedia(media);
    res.send(media);
  } catch (error) {
    next(error);
  }
});
mediaRouter.get("/", async (req, res, next) => {
  const media = await getMedia();

  res.send(media);
});
mediaRouter.get("/:mediaId", async (req, res, next) => {
  const media = await getMedia();
  const findMedia = media.find((movie) => movie.id === req.params.mediaId);
  if (findMedia) {
    res.send(findMedia);
  } else {
    next(creatError(404, "Not Found!!!"));
  }
});
mediaRouter.put("/:mediaId", async (req, res, next) => {
  try {
    const media = await getMedia();
    const index = media.findIndex((x) => x.id === req.params.mediaId);

    const oldMedia = media[index];
    const updateMedia = {
      ...oldMedia,
      ...req.body,
      updateAt: new Date(),
    };
    media[index] = updateMedia;
    await writeMedia(media);
    res.send(media);
  } catch (error) {
    next(error);
  }
});
mediaRouter.delete("/:mediaId", async (req, res, next) => {
  try {
    const media = await getMedia();
    const mediaDelete = media.filter((x) => x.id !== req.params.mediaId);

    res.send(mediaDelete);
  } catch (error) {
    next(error);
  }
});
mediaRouter.post("/:mediaId/reviews", async (req, res, next) => {
  const media = await getMedia();
  const index = media.findIndex((x) => x.id === req.params.mediaId);
  const comment = media[index].reviews;
  comment.push({ ...req.body, creatAt: new Date(), id: uniqid() });
  await writeMedia(media);
  res.send("add comment");
});
// --------------------------------
export default mediaRouter;
