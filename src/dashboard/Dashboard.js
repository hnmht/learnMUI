import * as React from "react";
import { styled} from "@mui/material/styles";
import {
    CssBaseline,
    Drawer as MuiDrawer,
    Box,
    AppBar as MuiAppBar,
    Toolbar,
    List,
    Typography,
    Divider,
    IconButton,
    Badge,
    Container,
    Grid,
    Paper,
    Link,
} from "@mui/material";
import {
    Menu as MenuIcon,
    ChevronLeft as ChevronLeftIcon,
    Notifications as NotificationsIcon,
} from "@mui/icons-material";
import { mainListItems, secondaryListItems } from "./listItems";
import Chart from "./Chart";
import Deposits from "./Deposits";
import Orders from "./Order";


function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {"Copyright @"}
            <Link color="inherit" href="https://mui.com">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

function DashboardContent() {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };
    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar position="absolute" open={open}>
                <Toolbar
                    sx={{
                        pr:"24px",
                    }}
                >
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer}
                        sx={{
                            marginRight:'36px',
                            ...(open && {display:"none"}),
                        }}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography
                        component={"h1"}
                        variant="h6"
                        color={"inherit"}
                        noWrap
                        sx={{flexGrow:1}}
                    >
                        Dashboard
                    </Typography>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon/>
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open="open">
                <Toolbar
                    sx={{
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"flex-end",
                        px:[1],
                    }}
                >
                    <IconButton onClick={toggleDrawer}>
                        <ChevronLeftIcon/>
                    </IconButton>
                </Toolbar>
                <Divider />
                <List component={"nav"}>
                    {mainListItems}    
                    <Divider sx={{ my: 1 }} />
                    {secondaryListItems}                
                </List>               
            </Drawer>
            <Box
                component={"main"}
                sx={{
                    backgroundColor:(theme) => 
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900],
                        flexGrow:1,
                        height:"100vh",
                        overflow:'auto',
                }}
                >
                    <Toolbar />
                    <Container maxWidth="1g" sx={{mt:4,mb:4}}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={8} lg={10}>
                                <Paper
                                    sx={{
                                        p:2,
                                        display:"flex",
                                        flexDiection:"column",
                                        height:240,
                                    }}
                                >
                                    <Chart />
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={4} lg={2}>
                                <Paper
                                    sx={{
                                        p:2,
                                        display:'flex',
                                        flexDirection:'column',
                                        height:240,
                                    }}
                                >
                                    <Deposits />
                                </Paper>
                            </Grid>
                            <Grid item xs={12} >
                                <Paper 
                                    sx={{
                                        p:2,
                                        display:'flex',
                                        flexDirection:'column',
                                    }}
                                >
                                    <Orders />
                                </Paper>
                            </Grid>
                        </Grid>
                        <Copyright sx={{pt:4}} />
                    </Container>
                </Box>
        </Box>
    );
}

export default function Dashboard() {
    return <DashboardContent />;
}
