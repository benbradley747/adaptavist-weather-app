import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import {
  WeatherData,
  WeatherError,
  FETCH_WEATHER,
  SET_ERROR,
  WeatherAction,
  SET_LOADING,
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

      const weatherData: WeatherData = await res.json();
      dispatch({
        type: FETCH_WEATHER,
        payload: weatherData,
      });

      console.log(weatherData);
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