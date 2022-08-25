import React from "react";
import { Box } from "@mui/material";

export default function BreakpointsAsObject() {
    return (
        <div>
            <Box
                // sx={{
                //     width:{
                //         xs:100,
                //         sm:200,
                //         md:300,
                //         lg:400,
                //         xl:500,
                //     },
                // }}
                // sx={{width:[null,null,300]}}
                sx={{ border:1,borderColor:'primary.main'}} //等于 border: 1px solid black
            >
                Box 盒子
            </Box>
        </div>
    );
}