import React from "react";
import { Box } from "@mui/material";

const commonStyles = {
    bgColor:"background.paper",
    m:1,
    border:1,
    width:"5rem",
    height:"5rem",
};

export default function BorderColor() {
    return (
        <Box sx={{display:'flex',justifyContent:'center'}}>
            <Box sx={{ ...commonStyles,borderColor:'primary.main'}}/>
            <Box sx={{ ...commonStyles, borderColor: 'secondary.main' }} />
            <Box sx={{ ...commonStyles, borderColor: 'error.main' }} />
            <Box sx={{ ...commonStyles, borderColor: 'grey.500' }} />
            <Box sx={{ ...commonStyles, borderColor: 'text.primary' }} />
            <Box sx={{ ...commonStyles, borderRadius: '50%' }} />
            <Box sx={{ ...commonStyles, borderRadius: 1 }} />
            <Box sx={{ ...commonStyles, borderRadius: '16px' }} />
        </Box>
    );
}