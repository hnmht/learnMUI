import React from "react";
import {
    TrendingUp as TrendingUpIcon,
} from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Why() {
    return (
        <Box
            sx={{
                bgColor: 'background.paper',
                boxShadow: 1,
                borderRadius: 1,
                p: 2,
                minWidth: 300,
                ":hover":{
                    boxShadow:6,
                },
                "@media screen and (min-width:300px)":{
                    bgcolor:"green",
                }
            }}
        >
            <Box sx={{ color: 'text.secondary' }}>会话</Box>
            <Box sx={{ color: "text.primary", fontSize: 34, fontWeight: 'medium' }}>
                98.3 K
            </Box>
            <Box
                component={TrendingUpIcon}
                sx={{ color:'success.dark',fontSize:16,verticalAlign:"sub"}}
            />
            <Box sx={{ color:'success.dark', display:'inline',fontWeight:'medium',mx:0.5}}>
                18.77%
            </Box>
            <Box sx={{ color:'text.secondary',display:'inline',fontSize:12}}>
                于上周相比
            </Box>
        </Box>
    );
}