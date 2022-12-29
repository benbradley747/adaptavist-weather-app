import { Button, Divider, IconButton, InputBase, Paper, TextField } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from "react";
import { fetchWeatherData, setLoading } from "../store/actions/WeatherActions";
import { useAppDispatch } from "../store/hooks"

interface SearchProps {
    margin: number | string;
}

const Search = ({ margin }: SearchProps) => {
    const dispatch = useAppDispatch();
    const [query, setQuery] = useState<string>("");

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        dispatch(setLoading());
        dispatch(fetchWeatherData(query));
    }

    return (
        <Paper sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400, margin: margin }}>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search City"
                inputProps={{ 'aria-label': 'search google maps' }}
                onChange={(e) => setQuery(e.target.value)}
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton onClick={(e) => handleSubmit(e)} type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    )
}

export default Search;