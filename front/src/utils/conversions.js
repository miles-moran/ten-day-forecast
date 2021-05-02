const conversions = {
    imperial: {
      temperature: {
        convert: (arg) => (arg * 9) / 5 + 32,
        unit: "°F",
      },
      windSpeed: {
        convert: (arg) => arg / 1.609,
        unit: "mph",
      },
    },
    metric: {
      temperature: {
        convert: (arg) => arg * 1,
        unit: "°C",
      },
      windSpeed: {
        convert: (arg) => arg * 1,
        unit: "km/h",
      },
    },
  };

  export default conversions;