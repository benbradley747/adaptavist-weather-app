interface WeatherIconProps {
    path: string
}

const WeatherIcon = ({ path }: WeatherIconProps) => {
    return (
        <img src={path} width="200px" height="220px" alt="" />
    )
}

export default WeatherIcon;