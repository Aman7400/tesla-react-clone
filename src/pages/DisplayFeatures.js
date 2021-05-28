import React from "react";

const DisplayFeatures = ({ features }) => {
  console.log(features);
  const keys = Object.keys(features);
  console.log(keys);
  return (
    <div>
      {keys.map((key, index) => {
        return (
          <span key={index}>
            <h6 style={{ textTransform: "capitalize" }}>
              <strong>{key}</strong>
            </h6>
            <p style={{ fontSize: "smaller" }}>{features[key]}</p>
          </span>
        );
      })}
    </div>
  );
};

export default DisplayFeatures;
