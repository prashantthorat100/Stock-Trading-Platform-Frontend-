import React from "react";
function Hero() {
  return (
    <div className="container border-bottom mb-5 mt-5">
      <div className="row  p-5 text-center ">
        <h1 className="fs-3">Charges</h1>
        <p className="fs-4 text-muted">List of all charges and taxes</p>
      </div>

      <div className="row p-5">
        <div className="col-4  text-center">
          <img
            style={{ width: "250px" }}
            src="media\images\pricing0.svg"
            alt="0"
          ></img>
          <h1 className="fs-3 ">Free equity delivery</h1>
          <p className="text-muted mt-4">
            All equity delivery investments (NSE, BSE),
            <br /> are absolutely free — ₹ 0 brokerage.
          </p>
        </div>
        <div className="col-4  text-center">
          <img
            style={{ width: "250px" }}
            src="media\images\intradayTrades.svg"
            alt="20"
          ></img>
          <h1 className="fs-3 ">Intraday and F&O trades</h1>
          <p className="text-muted mt-4">
            Flat ₹ 20 or 0.03% (whichever is lower) per
            <br /> executed order on intraday trades across
            <br /> equity, currency, and commodity trades. Flat
            <br /> ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4  text-center">
          <img
            style={{ width: "250px" }}
            src="media\images\pricing0.svg"
            alt="0"
          ></img>
          <h1 className="fs-3 ">Free direct MF</h1>
          <p className="text-muted mt-4">
            All direct mutual fund investments are
            <br /> absolutely free — ₹ 0 commissions & DP
            <br /> charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
