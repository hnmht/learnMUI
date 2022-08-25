import React from "react";
import { styled,useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { red, green, blue } from "@mui/material/colors";


const Root = styled('div')(({ theme }) => ({
    padding: theme.spacing,
    [theme.breakpoints.down('md')]: {
        backgroundColor: red[500],
    },
    [theme.breakpoints.up('md')]: {
        backgroundColor: blue[500],
    },
    [theme.breakpoints.up('lg')]: {
        backgroundColor: green[500],
    }
}));

export default function MediaQuery() {
    const theme = useTheme();
    console.log("theme.bareakpoints:",theme.breakpoints);
    return (
        <Root>
            <Typography>down(md):red</Typography>
            <Typography>up(md):blue</Typography>
            <Typography>up(lg):green</Typography>
        </Root>
    );
}