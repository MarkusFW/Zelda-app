import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div class="center">
      <div class="ring"></div>
      <img className="loading__img" src="https://i.pinimg.com/originals/36/a4/81/36a481508f58a23ce8f3ed78d542a710.png" alt="" />
    </div>
  );
};

export default Loading;
