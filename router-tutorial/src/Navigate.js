import React from "react";
import { useNavigate } from "react-router-dom";

const Navigate = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div>
      <button onClick={handleGoBack}>뒤로</button>
      <button onClick={handleGoHome}>홈으로</button>
    </div>
  );
};

export default Navigate;
