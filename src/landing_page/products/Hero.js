import React from 'react'
function Hero() {
    return (
      <div className="container mt-4">
        <div className="row border-bottom mt-3 text-center mb-5 p-3">
          <h1 className="mt-5 " style={{ fontSize: "1.8em" }}>
            Zerodha Products
          </h1>
          <h2 className="mt-2 fs-5">
            Sleek, modern, and intuitive trading platforms
          </h2>
          <p style={{marginBottom:"100px", marginTop:"20px"}} >
            Check out our <a style={{textDecoration:"none"}} href='d'>investment offerings →</a>
          </p>
        </div>
      </div>
    );
}

export default Hero;