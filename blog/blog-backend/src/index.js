import "./lib/env.js";
import koa from "koa";
import Router from "koa-router";
import bodyParser from "koa-bodyparser";
import mongoose from "mongoose";
import serve from "koa-static";
import path from "path";
import send from "koa-send";
import * as url from "url";

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

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const buildDirectory = path.resolve(__dirname, "../../blog-frontend/build");
app.use(serve(buildDirectory));
app.use(async (ctx) => {
  if (ctx.status === 404 && ctx.path.indexOf("/api") !== 0) {
    await send(ctx, "index.html", { root: buildDirectory });
  }
});

const port = PORT || 4000;
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
