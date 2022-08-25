import React from "react";
import { experimentalStyled  as styled } from "@mui/material/styles";
import { Box,Paper,Grid } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#3366ff",
    ...theme.typography.body2,
    padding:theme.spacing(2),
    textAlign:"center",
    color:theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
    return (
        <Box sx={{flexGrow:1}}>
            <Grid container spacing={{xs:1,md:3}} columns={{xs:4,sm:8,md:12}}>
                {
                    Array.from(Array(7)).map((_,index) => (
                        <Grid item xs={100} sm={4} md={4} key={index}>
                            <Item>xs=4</Item>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    );
}