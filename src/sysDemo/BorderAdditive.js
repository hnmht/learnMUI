import React from "react";
import { Box } from "@mui/material";

const commonStyles = {
    bgColor:"background.paper",
    boxShadow: 3,
    m:1, //margin
    borderColor:'text.primary',
    width:'5rem',
    height:"5rem",
};

export default function BorderAdditive() {
    return (
        <Box sx={{display:"flex",justifyContent:"center"}}>
            <Box sx={{...commonStyles,border:1}}/>
            <Box sx={{ ...commonStyles, borderTop: 1 }} />
            <Box sx={{ ...commonStyles, borderRight: 1 }} />
            <Box sx={{ ...commonStyles, borderBottom: 1 }} />
            <Box sx={{ ...commonStyles, borderLeft: 1 }} />
           
        </Box>
    );
}