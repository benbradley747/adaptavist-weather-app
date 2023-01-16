import { Box, Typography } from '@mui/material';
import FadeIn from 'react-fade-in';
import { QueryBase, WeatherData } from '../store/types';
import WeatherCard from './WeatherCard';

interface WeatherCardContainerProps {
  weatherData: QueryBase | null;
}

const containerStyle = {
  padding: 2,
  alignItems: 'center',
};

const WeatherCardContainer = ({ weatherData }: WeatherCardContainerProps) => {
  return (
    <div>
      {weatherData?.list != null ? (
        <FadeIn>
          <Box sx={containerStyle}>
            <Typography marginBottom={1} variant="h3">
              {weatherData?.city.name}
            </Typography>
            <FadeIn delay={50} className="weatherCardContainer">
              {weatherData?.list
                .filter((ele, i) => i % 8 == 8 - 1)
                .map((weather: WeatherData, i) => {
                  return <WeatherCard key={i} data={weather} />;
                })}
            </FadeIn>
          </Box>
        </FadeIn>
      ) : (
        <></>
      )}
    </div>
  );
};

export default WeatherCardContainer;
