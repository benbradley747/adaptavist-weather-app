import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { useDispatch } from "react-redux";
import "./App.css";
import { Button } from "@mui/material";
import { fetchWeatherData } from "./store/actions/WeatherActions";
import { useAppDispatch, useAppSelector } from "./store/hooks";

const App = () => {
  const dispatch = useAppDispatch();

  const fetchData = async () => {
    dispatch(fetchWeatherData("Chicago"));
  };

  return (
    <div className="App">
      <p>Hello World</p>
      <Button onClick={fetchData}>Fetch weather data</Button>
    </div>
  );
};

export default App;
