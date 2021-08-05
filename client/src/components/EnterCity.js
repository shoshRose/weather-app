import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import CircularProgress from '@material-ui/core/CircularProgress';
import { getWeather } from "../actions/weather";
import { useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";

const EnterCity = () => {
  const [city, setCity] = useState("");
  const [cityWeather, setCityWeather] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const changeCityHandler = (event) => {
    console.log("changeCityHandler");
    setCity(event.target.value);
  };

  const fetchWeatherHandler = async (event) => {
    event.preventDefault();

    setIsLoading(true);
    setError(null);
    console.log("isLoading", isLoading);

    try {
      const response = dispatch(getWeather(city));

      console.log("after dispatch getWeather:", response);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      
      //   return;
      const data = await response.json();

      console.log("dispatch response:", data);

      
    //   setCityWeather(loadedForecasts);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  return (
    <form onSubmit={fetchWeatherHandler}>
      <TextField
        id="standard-search"
        label="Enter City"
        type="search"
        onChange={changeCityHandler}
        value={city}
      />
      <IconButton color="primary" aria-label="Search">
        <SearchIcon />
      </IconButton>
      {isLoading && <CircularProgress />}
    </form>
  );
};

export default EnterCity;
