import React from "react";
import "./PreLoader.css";

function PreLoader(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"}>
      <div className="spinner"></div>
    </div>
  );
}

export default PreLoader;
