import { Typography } from "@mui/material";
import { useAppSelector } from "../store/hooks";
import { WeatherData } from "../store/types";
import WeatherCard from "./WeatherCard";

const WeatherCardContainer = () => {
    const weatherData = useAppSelector((state) => state.weather.data);

    return (
        <div>
            <Typography variant="h3">{weatherData?.city.name}</Typography>
            {
                weatherData?.list.filter((ele, i) => i % 8 == 8 - 1).map(
                    (weather: WeatherData) => 
                        <WeatherCard key={weather.dt} data={weather} />
                )
            }
        </div>
    )
}

export default WeatherCardContainer;