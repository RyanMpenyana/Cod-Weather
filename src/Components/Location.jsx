import React from "react";

function Location({ location }) {
  return (
    <div className="current">
      <h2>{location.date}</h2>
      {/* <h4>{location.time}</h4> */}
      <h1>{location.name}</h1>
      <p>{location.region}</p>
      <h4>{location.country}</h4>
      <span>
        <img src={location.img} alt="photo" />
      </span>
      <h2>{location.condition}:</h2>
      <h3>
        {location.temp} <sup>&#8451;</sup>
      </h3>
    </div>
  );
}

export default Location;
