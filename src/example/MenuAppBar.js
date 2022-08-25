import React, { useState } from "react";
import {
    Box,
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Switch,
    FormControlLabel,
    FormGroup,
    MenuItem,
    Menu,
} from "@mui/material";
import {
    Menu as MenuIcon,
    AccountCircle,
} from "@mui/icons-material";


function MenuAppBar() {
    const [auth, setAuth] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        console.log("click IconButton:", event);
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <FormGroup>
                <FormControlLabel
                    control={
                        <Switch
                            checked={auth}
                            onChange={handleChange}
                            aria-label="login switch"
                        />
                    }
                    label={auth ? "logout" : "login"}
                />
            </FormGroup>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component={"div"} sx={{ flexGrow: 1 }}>
                        Photos
                    </Typography>
                    {
                        auth && (
                            <div>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                </Menu>
                            </div>
                        )
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default MenuAppBar;