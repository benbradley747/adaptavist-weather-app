import {
  FETCH_WEATHER,
  SET_ERROR,
  SET_LOADING,
  WeatherAction,
  WeatherState,
} from '../types';

const initialState: WeatherState = {
  data: null,
  loading: false,
  error: '',
};

export default (state = initialState, action: WeatherAction): WeatherState => {
  switch (action.type) {
    case FETCH_WEATHER:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: '',
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_ERROR:
      return {
        ...state,
        data: action.payload,
        error: action.message,
        loading: false,
      };
    default:
      return state;
  }
};
