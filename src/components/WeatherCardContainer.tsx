import { useAppSelector } from "../store/hooks";
import { WeatherData } from "../store/types";
import WeatherCard from "./WeatherCard";

const WeatherCardContainer = () => {
    const forecast = useAppSelector((state) => state.weather.data);

    return (
        <div>
            {forecast?.map((weather: WeatherData) => <WeatherCard key={weather.id} data={weather} />)}
        </div>
    )
}

export default WeatherCardContainer;