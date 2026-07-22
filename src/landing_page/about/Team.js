import React from 'react'
function Team() {
    return (
      <div className="container">
        <div className="row  ">
          <div className="row  mb-5">
            <h1 className="text-center mb-5 fs-4">People</h1>

            <div className="col-6">
              <img
                style={{
                  borderRadius: "100%",
                  width: "50%",
                  marginLeft: "210px",
                }}
                src="media\images\nithinKamath.jpg"
                alt="nithinKamath"
              />
              <h3 className="fs-5 mt-4 mb-2" style={{ marginLeft: "300px" }}>
                Nithin Kamath
              </h3>
              <p className="text-muted mt-3" style={{ marginLeft: "315px" }}>
                Founder, CEO
              </p>
            </div>
            <div className="col-6">
              <p style={{ marginRight: "100px" }}>
                Nithin bootstrapped and founded Zerodha in 2010 to overcome the
                hurdles he faced during his decade long stint as a trader.
                Today, Zerodha has changed the landscape of the Indian broking
                industry.
              </p>
              <p style={{ marginRight: "100px" }}>
                He is a member of the SEBI Secondary Market Advisory Committee
                (SMAC) and the Market Data Advisory Committee (MDAC).
              </p>
              <p style={{ marginRight: "100px" }}>
                Playing basketball is his zen.
              </p>
              <p style={{ marginRight: "100px" }}>
                Connect on{" "}
                <a
                  style={{ textDecoration: "none" }}
                  href="https://nithinkamath.me/"
                >
                  Homepage{" "}
                </a>
                /
                <a
                  style={{ textDecoration: "none" }}
                  href="https://tradingqna.com/u/nithin/summary"
                >
                  {" "}
                  TradingQnA{" "}
                </a>
                /
                <a
                  style={{ textDecoration: "none" }}
                  href="https://x.com/Nithin0dha"
                >
                  {" "}
                  Twitter{" "}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Team;