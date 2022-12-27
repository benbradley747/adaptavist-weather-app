import { Button, TextField } from "@mui/material"
import React, { useState } from "react";
import { fetchWeatherData } from "../store/actions/WeatherActions";
import { useAppDispatch } from "../store/hooks"

const Search = () => {
    const dispatch = useAppDispatch();
    const [query, setQuery] = useState<string>("");

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        dispatch(fetchWeatherData(query))
    }

    return (
        <div>
            <TextField variant="outlined" placeholder="Search" onChange={(e) => setQuery(e.target.value)}/>
            <Button variant="contained" color="success" onClick={(e) => handleSubmit(e)}>Get Weather</Button>
        </div>
    )
}

export default Search;