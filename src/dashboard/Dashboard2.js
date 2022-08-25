import React from "react";
import {
    Box,
    CssBaseline,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

const drawerWidth=0;

function Dashboard2() {
    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
                position="absolute" 
                sx={{
                    width: `calc(100% - ${drawerWidth}px)`
                }}            
            >
                <Toolbar
                    sx={{
                        pr: "24px",
                    }}
                >
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="IconButton"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Dashboard2;