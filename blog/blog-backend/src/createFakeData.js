import Post from "./models/post.js";

export default function createFakeData() {
  const posts = [...Array(40).keys()].map((i) => ({
    title: `Post ${i}`,
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero dui, cursus eu mauris vitae, efficitur molestie nisi. Sed a odio eros. Fusce ut rutrum risus. Aliquam vitae vulputate est. Vestibulum sagittis mi vitae luctus efficitur. Sed rhoncus ipsum et ante varius mattis. Fusce euismod sodales lectus, vel bibendum sem pellentesque in. Nunc tempus rhoncus quam a maximus. Praesent nec nulla molestie, vestibulum quam volutpat, ultrices odio. Curabitur eleifend urna id risus venenatis, in finibus sem commodo. Ut at nulla at augue dignissim volutpat vel sit amet augue. Praesent egestas feugiat tincidunt. Vivamus ornare malesuada ligula, ac placerat justo. Suspendisse rhoncus ex in magna luctus accumsan.",
    tags: ["Fake", "Data"],
  }));
  Post.insertMany(posts, (err, docs) => {
    console.log(docs);
  });
}
