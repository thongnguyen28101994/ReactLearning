import React from "react";
import styles from "./styles.modules.scss";
export default function Bootstrap() {
  return (
    <>
      <div className="container text-center mb-2">
        <div className="row">
          <div className="col thong_col-color">column</div>
          <div className="col thong_col-color col-sm-1 col-md-8">column</div>
          <div className="col thong_col-color">column</div>
          <div className="col thong_col-color">column</div>
        </div>
      </div>
      <div className="container text-center mb-2">
        <div className="row row-cols-sm-1 row-cols-md-4">
          <div className="col thong_col-color">column</div>
          <div className="col thong_col-color">column</div>
          <div className="col thong_col-color">column</div>
          <div className="col thong_col-color">column</div>
        </div>
      </div>
      <div className="container text-center mb-2">
        <div
          className="row row-cols-4 align-items-center"
          style={{ height: "100px", backgroundColor: "#ffe9e8" }}
        >
          <div className="col thong_col-color align-self-start">column</div>
          <div className="col thong_col-color align-self-center">column</div>
          <div className="col thong_col-color align-self-center">column</div>
          <div className="col thong_col-color align-self-end">column</div>
        </div>
      </div>
      <div className="container text-center">
        <div
          className="row"
          style={{ height: "100px", backgroundColor: "#ffe9e8" }}
        >
          <div className="col-6 col-sm-4 thong_col-color ">column</div>
          <div className="col-6 col-sm-4 thong_col-color ">column</div>
          <div class="w-100 d-none d-sm-block d-md-none "></div>
          <div className="col-6 col-sm-4 thong_col-color ">column</div>
          <div className="col-6 col-sm-4 thong_col-color">column</div>
        </div>
      </div>
    </>
  );
}
