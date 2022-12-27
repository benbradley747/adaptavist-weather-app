interface WeatherIconProps {
    path: string
}

const WeatherIcon = ({path}: WeatherIconProps) => {
    return (
        <img src={path} alt="" />
    )
}

export default WeatherIcon;