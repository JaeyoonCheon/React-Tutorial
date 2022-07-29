import Router from "koa-router";
import posts from "./posts/index.js";

const api = new Router();

console.log("3");

api.get("/", (ctx, next) => {
  ctx.body = "API";
});
api.use("/posts", posts.routes());

export default api;
