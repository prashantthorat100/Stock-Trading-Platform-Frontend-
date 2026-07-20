import React from 'react'
function Education() {
    return (
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col p-5 mx-5">
            <img
              style={{ width: "75%" }}
              alt="education"
              src="/media/images/education.svg"
            />
          </div>
          <div className="col p-5 my-5">
            <h1 className="mb-4 fs-2">Free and open market education</h1>
            <p className="mb-4 ">
              Varsity, the largest online stock market education book in the
              world
              <br /> covering everything from the basics to advanced trading.
            </p>
            <a href="" style={{ textDecoration: "none" }}>
              Varsity <i class="fas fa-arrow-right"></i>
            </a>

            <p className="mb-4 mt-4">
              TradingQ&A, the most active trading and investment community in
              <br />
              India for all your market related queries.
            </p>
            <a href="" style={{ textDecoration: "none" }}>
              TradingQ&A <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    );
}

export default Education;