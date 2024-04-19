import React from "react";

function Location({ location }) {
  return (
    <div className="current">
      <h1>{location.date}</h1>
      <h3>{location.time}</h3>
      <h1>{location.name}</h1>
      <p>{location.region}</p>
      <h4>{location.country}</h4>
      <span>
        <img src={location.img} alt="photo" />
      </span>
      <h2>{location.condition}:</h2>
      <h3>{location.temp}</h3>
    </div>
  );
}

export default Location;
