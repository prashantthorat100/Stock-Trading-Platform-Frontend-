import React from "react";
function Hero() {
  return (
    <div style={{ backgroundColor: "rgb(0,134,214)", padding: "50px" }}>
      <div style={{ marginLeft: "150px" }} className="row">
        <div className="col-6" style={{ color: "white" }}>
          <h5 className="mb-5">Support Portal</h5>
          <h2 style={{ marginBottom: "20px" }}>
            Search for an answer or browse help topics to create a ticket
          </h2>
          <div
            style={{
              backgroundColor: "white",
              color: "grey",
              maxWidth: "460px",
              maxHeight: "100px",
              padding: "19px 13px 19px 13px",
              borderRadius: "10px",
            }}
            className="mb-3 text-center"
          >
            Eg. how do i activate F&O, why is my order getting rejected.
          </div>
          <a style={{ color: "white" }} href="#">
            Track account opening
          </a>
          <a style={{ color: "white" }} href="#">
            Track segment activation
          </a>
          <a style={{ color: "white" }} href="#">
            {" "}
            Intradey
          </a>
          <br />
          <a style={{ color: "white" }} href="#">
            {" "}
            margins
          </a>
          <a style={{ color: "white" }} href="#">
            Kite user manual
          </a>
        </div>
        <div className="col-6" style={{ color: "white" }}>
          <a style={{ color: "white", marginLeft: "250px" }} href="">
            Track Tickets
          </a>
          <div className="mt-5">
            <h2 style={{ marginBottom: "20px" }}>Featured</h2>
            1.{" "}
            <a style={{ color: "white" }} href="#" className="">
              Current Takeovers and Delisting -January 2026
            </a>
            <br />
            <br />
            2.{" "}
            <a style={{ color: "white" }} href="#">
              Latest Intraday leverages - MIS & CO
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
