interface WeatherIconProps {
    path: string
}

const WeatherIcon = ({path}: WeatherIconProps) => {
    return (
        <img src={path} width="120px" height="120px" alt="" />
    )
}

export default WeatherIcon;