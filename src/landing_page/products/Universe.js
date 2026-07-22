import React from "react";
function Universe({ imageURL, description }) {
  return (
    <div className="container mb-5">
      <div className="row text-center mt-5 mb-5 p-5 ">
        <div className="mb-5">
          <h1 className=" fs-4 mb-4">The Zerodha Universe</h1>
          <p>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>

        <div className="row">
          <div className="col-4 p-3">
            <img
              style={{ width: "60%", marginBottom: "25px" }}
              src="media\images\zerodhaFundhouse.png"
              alt="zerodhaFundhouse"
            />
            <p className="text-small text-muted">
              Our asset management venture <br /> that is creating simple and
              transparent index <br /> funds to help you save for your goals
            </p>
          </div>
          <div className="col-4 p-3">
            <img
              style={{ width: "60%", marginBottom: "25px" }}
              src="media\images\sensibullLogo.svg"
              alt="sensibullLogo"
            />
            <p className="text-small text-muted">
              Options trading platform that lets you
              <br /> create strategies, analyze positions, and examine
              <br /> data points like open interest, FII/DII, and more.
            </p>
          </div>
          <div className="col-4 p-3">
            <img
              style={{ width: "40%", marginBottom: "25px" }}
              src="media\images\tijori.svg"
              alt="tijorilogo"
            />
            <p className="text-small text-muted">
              Investment research platform <br /> that offers detailed insights
              on stocks,
              <br /> sectors, supply chains, and more.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-4 p-3">
            <img
              style={{ width: "40%" }}
              src="media\images\streak-logo.png"
              alt="streaklogo"
            />
            <p className="text-small text-muted mt-4">
              Systematic trading platform
              <br /> that allows you to create and backtest
              <br /> strategies without coding.
            </p>
          </div>
          <div className="col-4 p-3">
            <img src="media\images\smallcaseLogo.png" alt="smallcaseLogo" />
            <p className="text-small text-muted mt-4">
              Thematic investing platform
              <br /> that helps you invest in diversified
              <br /> baskets of stocks on ETFs.
            </p>
          </div>
          <div className="col-4 p-3">
            <img
              style={{ width: "40%", marginBottom: "25px" }}
              src="media\images\dittoLogo.png"
              alt="dittoLogo"
            />
            <p className="text-small text-muted">
              Personalized advice on life
              <br /> and health insurance. No spam
              <br /> and no mis-selling.
            </p>
          </div>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mt-5 "
          style={{ width: "15%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
