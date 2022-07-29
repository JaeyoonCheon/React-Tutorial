import "./lib/env.js";
import koa from "koa";
import Router from "koa-router";
import bodyParser from "koa-bodyparser";
import mongoose from "mongoose";

import api from "./api/index.js";
import jwtMiddleware from "./lib/jwtMiddleware.js";
import createFakeData from "./createFakeData.js";

const { PORT, MONGO_URI } = process.env;
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((e) => {
    console.log(e);
  });

const app = new koa();
const router = new Router();

router.use("/api", api.routes());

app.use(bodyParser());
app.use(jwtMiddleware);

app.use(router.routes()).use(router.allowedMethods());

const port = PORT || 4000;
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
