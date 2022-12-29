import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import Search from "./Search";

const headerStyles = {
    position: "fixed",
    display: "inline-flex",
    flexDirection: "row",
    justifyContent: "space-between",
    top: 0,
    left: 0,
    right: 0,
    padding: 1.5,
    minHeight: "10%",
    backgroundColor: "#ed7652",
    alignItems: "center"
}

const Header = () => {
    return (
        <Box sx={headerStyles}>
            <Box sx={{ display: "inline-flex" }}>
                <ThunderstormIcon sx={{ paddingRight: 1 }} fontSize="large" />
                <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                    My Weather App
                </Typography>
            </Box>
            <Search margin={0} />
        </Box >
    );
}

export default Header;