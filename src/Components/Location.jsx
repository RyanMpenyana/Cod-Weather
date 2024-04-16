import React from "react";

function Location({ location }) {
  return (
    <div>
      <h1>{location.name}</h1>
      <p>{location.condition}</p>
      <h3>{location.temp}</h3>
    </div>
  );
}

export default Location;
