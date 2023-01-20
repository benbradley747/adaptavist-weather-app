export const FETCH_WEATHER = 'FETCH_WEATHER';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';

export interface City {
  country: string;
  id: number;
  name: string;
}

export interface QueryBase {
  city: City;
  cnt: number;
  cod: number;
  list: WeatherData[];
}

export interface Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface WeatherData {
  city: City;
  base: string;
  clouds: {
    all: number;
  };
  cod: number;
  coord: {
    lon: number;
    lat: number;
  };
  dt: number;
  dt_txt: string;
  id: number;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
  };
  timezone: number;
  visibility: number;
  weather: Weather[];
  wind: {
    speed: number;
    deg: number;
  };
}

export interface WeatherState {
  data: WeatherData[] | null;
  loading: boolean;
  error: string;
}

export interface WeatherError {
  cod: string;
  message: string;
}

interface FetchWeatherAction {
  type: typeof FETCH_WEATHER;
  payload: WeatherData[] | null;
}

interface SetLoadingAction {
  type: typeof SET_LOADING;
}

interface SetErrorAction {
  type: typeof SET_ERROR;
  payload: null;
  message: string;
}

export type WeatherAction =
  | FetchWeatherAction
  | SetLoadingAction
  | SetErrorAction;
