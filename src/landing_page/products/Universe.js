import React from "react";
function Universe({ imageURL, description }) {
  return (
    <div className="container mt-5 mb-5">
      <div className="row text-center mt-5 mb-5">
        <div className="mt-5 mb-5">
          <h1 className="mt-5 fs-4 mb-4">The Zerodha Universe</h1>
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
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals
            </p>
          </div>
          <div className="col-4 p-3">
            <img
              style={{ width: "60%", marginBottom: "25px" }}
              src="media\images\sensibullLogo.svg"
              alt="sensibullLogo"
            />
            <p className="text-small text-muted">
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>
          <div className="col-4 p-3">
            <img
              style={{ width: "40%", marginBottom: "25px" }}
              src="media\images\tijori.svg"
              alt="tijorilogo"
            />
            <p className="text-small text-muted">
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
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
            <p className="text-small text-muted">
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>
          <div className="col-4 p-3">
            <img src="media\images\smallcaseLogo.png" alt="smallcaseLogo" />
            <p className="text-small text-muted">
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </div>
          <div style={{ width: "1rem", height: "5px" }} className="col-4 p-3">
            <img src="media\images\dittoLogo.png" alt="dittoLogo" />
            <p className="text-small text-muted">
              Personalized advice on life and health insurance. No spam and no
              mis-selling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Universe;
