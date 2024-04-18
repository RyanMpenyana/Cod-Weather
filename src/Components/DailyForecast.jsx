const DailyForecast = (props) => {
  const date = new Date();
  return (
    <div className="forecast_card">
      <p>{props.day}</p>
      <p>
        <img src={props.icon} alt="icon" />
      </p>
      <h3>{props.temp}</h3>
    </div>
  );
};
export default DailyForecast;
