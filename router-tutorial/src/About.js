import React from "react";
import { useLocation } from "react-router-dom";
import qs from "qs";

const About = () => {
  let location = useLocation();

  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  const showDetail = query.detail === "true";
  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터</p>
      {showDetail && <p>detail is true!</p>}
    </div>
  );
};

export default About;
