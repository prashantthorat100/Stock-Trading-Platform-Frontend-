import React from 'react'
function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore
}) {
  return (
    <div className="container mt-5 p-5">
      <div className="row mt-5 ">
        <div className="col-6 mt-5 p-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a style={{textDecoration:"none"}} href={learnMore}>Learn More →</a>
          </div>
        </div>

        <div className="col-6">
          <img src={imageURL} alt="product"></img>
        </div>
      </div>
    </div>
  );
}

export default RightSection;