import { CircularProgress } from "@mui/material";
import "./App.css";
import Search from "./components/Search"
import WeatherCard from "./components/WeatherCard";
import WeatherCardContainer from "./components/WeatherCardContainer";
import { useAppSelector } from "./store/hooks";

const App = () => {
  return (
    <div className="App">
      <Search/>
      <WeatherCardContainer />
    </div>
  );
};

export default App;
