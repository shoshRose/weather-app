import {
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core/";
import styles from './Forecast.module.css';


import { useSelector } from 'react-redux';

const Forecast = (props) => {

    const data = useSelector((state) => state.weather);

    const weatherData = props.weatherData;
    // console.log("Forecast props", props.weatherData, weatherData.weatherStateAbbr + "img");
    // const img = weatherData.weatherStateAbbr + "img";
    const imgSrc = require("../images/" + weatherData.weatherStateAbbr + ".svg");
    // console.log("imgSrc", imgSrc);

    const textColorMax = weatherData.maxTemp > 23 ? 'hot' : 'cold';
    const textColorMin = weatherData.maxTemp > 23 ? 'hot' : 'cold';
    console.log("textColorMax", weatherData.maxTemp, typeof weatherData.maxTemp, textColorMax);

  return (
    <CardContent>
      <CardMedia
        className={styles.image}
        component="img"
        image={imgSrc.default}
      />
      <Typography variant="h5" component="h2" align="center" className={styles[textColorMax]}>
        {weatherData.maxTemp + "°"}
      </Typography>
      <Typography gutterBottom variant="subtitle1" component="h2" align="center" className={styles[textColorMin]}>
        {weatherData.minTemp + "°"}
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        align="center"
        component="p"
      >
        {weatherData.humidity}% humidity
      </Typography>
      <Typography gutterBottom variant="body2" color="textSecondary" align="center">
        {weatherData.weatherState}
      </Typography>
      <Typography variant="subtitle2" color="textSecondary" align="center">
        {weatherData.date}
      </Typography>
    </CardContent>
  );
};

export default Forecast;
