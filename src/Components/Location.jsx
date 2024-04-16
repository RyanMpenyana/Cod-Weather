import React from "react";

function Location({ location }) {
  return (
    <div>
      <h3>{location.time}</h3>
      <h1>{location.name}</h1>
      <div style={{ display: "flex" }}>
        <p>{location.condition}:</p>
        <img src={location.img} alt="photo" />
      </div>
      <h3>{location.temp}</h3>
    </div>
  );
}

export default Location;
