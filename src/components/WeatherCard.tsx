import { Typography } from "@mui/material";
import { WeatherData } from "../store/types";
import WeatherIcon from "./WeatherIcon";

interface WeatherCardProps {
    data: WeatherData;
}

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']


const WeatherCard = ({data}: WeatherCardProps) => {
    const getDate = (text: string): string => {
        const date = new Date(text);
        return `${days[date.getDay()]}, ${months[date.getMonth()]} ${+ date.getDate()}`;
    }

    return (
        <div>
            <WeatherIcon path={`/assets/weather-icons/${data.weather[0].icon}.svg`} />
            <Typography>{getDate(data.dt_txt)}</Typography>
        </div>
    )
}

export default WeatherCard;