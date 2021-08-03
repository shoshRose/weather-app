import { Fragment } from "react";
import Forecast from "./Forecast";
import { Card, Grid, Typography } from "@material-ui/core/";
import styles from "./Forecasts.module.css";
import { useSelector } from "react-redux";

const Forecasts = () => {
  const forecasts = useSelector((state) => state.weatherReducer);
  console.log("forecasts: ", forecasts);

  const forecastsList = forecasts.slice(0, 3).map((forecast) => (
    <Grid
      item
      component={Card}
      xs={2}
      md={2}
      className={styles.card + styles.weather}
    >
      <Forecast weatherData={forecast} />
    </Grid>
  ));

  return (
    <Fragment>
      {forecasts.length > 0 && (
        <Fragment>
          <Typography gutterBottom variant="h3" align="center">
            Forecast for: {forecasts[0].city}
          </Typography>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className={styles.container}
          >
            {forecastsList}
          </Grid>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Forecasts;
