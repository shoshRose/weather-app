const weatherReducer = (weather = [], action) => {
  switch (action.type) {
    case "FETCH_WEATHER":
      {
        // console.log("action.payload", action.payload);
        const loadedForecasts = [];
        const { consolidated_weather, title } = action.payload;
        consolidated_weather.forEach((value) => {
            // console.log("value", value);
          loadedForecasts.push({
            id: value.id,
            city: title,
            weatherState: value.weather_state_name,
            weatherStateAbbr: value.weather_state_abbr,
            minTemp: +value.min_temp.toFixed(2),
            maxTemp: +value.max_temp.toFixed(2),
            humidity: value.humidity,
            date: value.applicable_date,
          });
        });
        // console.log("loadedForecasts:", loadedForecasts);
        return loadedForecasts;
      }
    default:
      return weather;
  }
};

export default weatherReducer;
