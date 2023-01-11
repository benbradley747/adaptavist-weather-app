import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import {
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

      const weatherQuery: QueryBase = await res.json();
      console.log("fetched this: ", weatherQuery);

      dispatch({
        type: FETCH_WEATHER,
        payload: weatherQuery,
      });
    } catch (e: any) {
      dispatch({
        type: SET_ERROR,
        payload: null,
        message: e.message,
      });
    }
  };
};

export const setLoading = (): WeatherAction => {
  return {
    type: SET_LOADING,
  };
};

export const setError = (message: string): WeatherAction => {
  return {
    type: SET_ERROR,
    payload: null,
    message: message,
  };
};
