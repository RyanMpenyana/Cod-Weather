const DailyForecast = (props) => {
  const DateFunc = (date) => {
    const days = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];

    date = new Date(date);
    let day = days[date.getDay()];
    return day;
  };
  return (
    <>
      <div className="forecast_card">
        <h3 className="card_day">{DateFunc(props.day)}</h3>
        <p>
          <img src={props.icon} alt="icon" />
        </p>
        <h3>{props.temp}</h3>
      </div>
    </>
  );
};
export default DailyForecast;
