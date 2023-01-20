import { Box, Modal, Typography } from '@mui/material';
import { useState } from 'react';
import { useAppSelector } from '../store/hooks';
import { WeatherData } from '../store/types';
import WeatherIcon from './WeatherIcon';

interface WeatherCardProps {
  data: WeatherData;
}

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  bgcolor: 'white',
  border: 0,
  borderRadius: '8px',
  boxShadow: 24,
  pb: 6,
  textAlign: 'center',
};

const typographyStyle = {
  color: '#83a5b3',
};

const WeatherCard = ({ data }: WeatherCardProps) => {
  const [modal, setModal] = useState(false);

  const handleOpen = () => setModal(true);
  const handleClose = () => setModal(false);

  const getDate = (text: string): string => {
    const date = new Date(text);
    return `${months[date.getMonth()]} ${+date.getDate()}`;
  };

  return (
    <div>
      <div className="weatherCard">
        <div onClick={handleOpen}>
          <WeatherIcon
            path={`/assets/weather-icons/${data.weather[0].icon}.svg`}
          />
          <div>
            <Typography variant="h5" sx={typographyStyle}>
              {days[new Date(data.dt_txt).getDay()]},
            </Typography>
            <Typography variant="h5" sx={typographyStyle}>
              {getDate(data.dt_txt)}
            </Typography>
          </div>
        </div>
      </div>
      <Modal open={modal} onClose={handleClose}>
        <Box sx={modalStyle}>
          <WeatherIcon
            path={`/assets/weather-icons/${data.weather[0].icon}.svg`}
          />
          <Typography variant="h4" sx={typographyStyle}>
            {data.city.name}
          </Typography>
          <Typography variant="h5" sx={typographyStyle}>
            {data.weather[0].description}
          </Typography>
          <Typography variant="h5" sx={typographyStyle}>
            min temp: {Math.round(data.main.temp_min)}°F
          </Typography>
          <Typography variant="h5" sx={typographyStyle}>
            max temp: {Math.round(data.main.temp_max)}°F
          </Typography>
          <Typography variant="h5" sx={typographyStyle}>
            humidity: {data.main.humidity}%
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default WeatherCard;
