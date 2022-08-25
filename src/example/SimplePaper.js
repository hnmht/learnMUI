import React from "react";
import { Box,Paper } from "@mui/material";

export default function SimplePaper() {
    return (
        <Box
            sx={{
                display:'flex',
                flexWrap:"wrap",
                '& > :not(style)':{
                    m:1,
                    width:128,
                    height:128,
                },
            }}
        >
            <Paper elevation={4} component="span" aria-label="abc"/>
            <Paper/>
            <Paper elevation={3} />
            <Paper variant="outlined" />
            <Paper variant="outlined" square />
        </Box>
    );
}