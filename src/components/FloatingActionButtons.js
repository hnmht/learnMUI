import React from "react";
import { Box, Fab, CssBaseline } from "@mui/material";
import {
    Add as AddIcon,
    Edit as EditIcon,
    Favorite as FavoriteIcon,
    Navigation as NavigationIcon,
} from "@mui/icons-material";

export default function FloatingActionButtons() {
    

    return (
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <CssBaseline />
            <Fab color="primary" aria-label="add" size="large">
                <AddIcon />
            </Fab>
            <Fab color="secondary" aria-label="edit">
                <EditIcon/>
            </Fab>
            <Fab variant="extended">
                <NavigationIcon sx={{mr:1}}/>
                导航
            </Fab>
            <Fab disabled aria-label="like">
                <FavoriteIcon color="error"/>
            </Fab>
        </Box>
    );
}

