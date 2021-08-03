import { Button } from "@material-ui/core";
import Forecasts from "./components/Forecasts";
import EnterCity from "./components/EnterCity";

const App = () => {
  return (
    <div>
      <EnterCity />
      <Forecasts />
    </div>
  );
};

export default App;
