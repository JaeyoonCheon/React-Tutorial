import React from "react";
import Categories from "../components/Categories";
import NewsList from "../components/NewsList";
import { useParams } from "react-router-dom";

const NewsPage = () => {
  const params = useParams();

  let category = { category: "all" };
  if (Object.keys(params).length !== 0) {
    category = params;
  }
  console.log(category);

  return (
    <>
      <Categories></Categories>
      <NewsList category={category.category}></NewsList>
    </>
  );
};

export default NewsPage;
