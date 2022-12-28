import { Box, Modal, Typography } from "@mui/material";
import { useState } from "react";
import { useAppSelector } from "../store/hooks";
import { WeatherData } from "../store/types";
import WeatherIcon from "./WeatherIcon";

interface WeatherCardProps {
    data: WeatherData;
}

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'gray',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const cardStyle = {
    cursor: "pointer",
}

const WeatherCard = ({data}: WeatherCardProps) => {
    const city = useAppSelector((state) => state.weather.data?.city);
    const [modal, setModal] = useState(false);

    const handleOpen = () => setModal(true);
    const handleClose = () => setModal(false);

    const getDate = (text: string): string => {
        const date = new Date(text);
        return `${days[date.getDay()]}, \n${months[date.getMonth()]} ${+ date.getDate()}`;
    }

    return (
        <Box sx={cardStyle}>
            <div onClick={handleOpen}>
                <WeatherIcon path={`/assets/weather-icons/${data.weather[0].icon}.svg`} />
            </div>
            <Typography>{getDate(data.dt_txt)}</Typography>
            <Modal
                open={modal}
                onClose={handleClose}
            >   
                <Box sx={modalStyle}>
                    <WeatherIcon path={`/assets/weather-icons/${data.weather[0].icon}.svg`} />
                    <Typography variant="h4">{city?.name}</Typography>
                    <Typography>{data.weather[0].description}</Typography>
                    <Typography>min temp: {Math.round(data.main.temp_min)}°F</Typography>
                    <Typography>max temp: {Math.round(data.main.temp_max)}°F</Typography>
                    <Typography>humidity: {data.main.humidity}%</Typography>
                </Box>
            </Modal>
        </Box>
    )
}

export default WeatherCard;