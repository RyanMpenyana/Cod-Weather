const DailyForecast = (props) => {
  return (
    <div style={{ display: "grid" }}>
      <p>{props.day}</p>
      <img src={props.icon} alt="icon" />
      <h3>{props.temp}</h3>
    </div>
  );
};
export default DailyForecast;
