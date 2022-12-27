import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import {
  WeatherData,
  WeatherError,
  FETCH_WEATHER,
  SET_ERROR,
  WeatherAction,
  SET_LOADING,
  QueryBase,
} from "../types";

const api = {
  key: "6f32b8b6a516d799524ab287b0628126",
  base: "https://api.openweathermap.org/data/2.5/",
};

export const fetchWeatherData = (
  city: string
): ThunkAction<void, RootState, undefined, WeatherAction> => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        `${api.base}forecast?q=${city}&units=imperial&APPID=${api.key}`
      );

      if (!res.ok) {
        const resData: WeatherError = await res.json();
        throw new Error(resData.message);
      }

      const weatherData: QueryBase = await res.json();
      console.log("fetched this: ", weatherData);

      // the free openweatherapi key gives a 5 day forecast with
      // updates every 3 hours, i.e. 8 forecasts each day. to get
      // one forecast for each day, we need every 8th element in the 
      // fetched list of forecast data.
      var forecast: WeatherData[] = [];
      for (var i = 5; i < weatherData.list.length; i += 8) {
        forecast.push(weatherData.list[i]);
      }

      dispatch({
        type: FETCH_WEATHER,
        payload: forecast,
      });
      
    } catch (e: any) {
      dispatch({
        type: SET_ERROR,
        payload: e.message,
      });
    }
  };
};

export const setLoading = (): WeatherAction => {
  return {
    type: SET_LOADING,
  };
};

export const setError = (): WeatherAction => {
  return {
    type: SET_ERROR,
    payload: "",
  };
};
