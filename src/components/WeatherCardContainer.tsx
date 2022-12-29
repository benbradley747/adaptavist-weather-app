import { Box, Typography, Fade } from '@mui/material'
import FadeIn from 'react-fade-in'
import { useAppSelector } from '../store/hooks'
import { WeatherData } from '../store/types'
import WeatherCard from './WeatherCard'

const containerStyle = {
    padding: 2,
    alignItems: "center",
}

const WeatherCardContainer = () => {
    const weatherData = useAppSelector((state) => state.weather.data)

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
                                .filter((ele, i) => i % 8 == 8 - 1).map((weather: WeatherData, i) => {
                                    return <WeatherCard key={i} data={weather} />
                                })}
                        </FadeIn>
                    </Box>
                </FadeIn>
            ) : (
                <></>
            )
            }
        </div >
    )
}

export default WeatherCardContainer
