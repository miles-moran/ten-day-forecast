import codes from "../utils/codes";
import conversions  from "../utils/conversions";

const Interval = ({ interval, units }) => {
  const date = new Date(interval.startTime);
  const day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ][date.getDay()];
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ][date.getMonth()];
  const formattedDate = `${month} ${date.getDate()}`;

  return (
    <div
      style={{
        display: "flex",
        padding: ".5rem",
        borderBottom: ".1rem solid lightgrey",
        margin: ".5rem",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ width: "5rem" }}>
        <div style={{ fontWeight: "bold" }}>{day}</div>
        <div>{formattedDate}</div>
      </div>
      <img
        style={{ width: "3rem", height: "3rem" }}
        src={codes[interval.values.weatherCode]}
        alt="pic of the weather"
      />
      <div style={{ fontWeight: "bold" }}>
        {conversions[units].temperature
          .convert(interval.values.temperature)
          .toFixed(2)}{" "}
        {conversions[units].temperature.unit}
      </div>
      <div style={{ fontWeight: "bold" }}>
        {conversions[units].windSpeed
          .convert(interval.values.windSpeed)
          .toFixed(2)}{" "}
        {conversions[units].windSpeed.unit}
      </div>
    </div>
  );
};

export default Interval;
