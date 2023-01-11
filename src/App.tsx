import {
  CircularProgress,
  createTheme,
  ThemeProvider,
  Typography,
} from '@mui/material';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import WeatherCardContainer from './components/WeatherCardContainer';
import { useAppSelector } from './store/hooks';

const theme = createTheme({
  typography: {
    fontFamily: ['Maven Pro', 'Quicksand', 'Helvetica', 'sans-serif'].join(','),
  },
});

const App = () => {
  const loading = useAppSelector((state) => state.weather.loading);
  const data = useAppSelector((state) => state.weather.data);
  const error = useAppSelector((state) => state.weather.error);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        {loading ? (
          <CircularProgress />
        ) : data == null ? (
          <Search margin="auto" />
        ) : (
          <WeatherCardContainer weatherData={data} />
        )}
        {error && !loading ? (
          <Typography variant="h5" color="#f44336">
            {error}
          </Typography>
        ) : (
          <></>
        )}
      </div>
    </ThemeProvider>
  );
};

export default App;
