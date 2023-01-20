import {
  Divider,
  FormControl,
  IconButton,
  InputBase,
  InputLabel,
  MenuItem,
  Paper,
  Select,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react';
import { fetchWeatherData, setLoading } from '../store/actions/WeatherActions';
import { useAppDispatch } from '../store/hooks';

interface SearchProps {
  margin: number | string;
}

const Search = ({ margin }: SearchProps) => {
  const dispatch = useAppDispatch();
  const selectorItems = [1, 2, 3, 4, 5];
  const [query, setQuery] = useState<string>('');
  const [size, setSize] = useState<number>(5);

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    setQuery('');
    e.preventDefault();
    dispatch(setLoading());
    dispatch(fetchWeatherData(query, size));
  };

  return (
    <Paper
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
        margin: margin,
      }}>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        value={query}
        placeholder="Search City"
        inputProps={{ 'aria-label': 'search google maps' }}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <FormControl variant="standard">
        <Select
          value={size}
          onChange={(e) => setSize(e.target.value as number)}>
          {selectorItems.map((val, i) => {
            return (
              <MenuItem key={i} value={val}>
                {val}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton
        onClick={(e) => handleSubmit(e)}
        type="button"
        sx={{ p: '10px' }}
        aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default Search;
