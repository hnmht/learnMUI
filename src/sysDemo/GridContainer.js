import React from "react";
import { Box } from "@mui/material";

export default function GridContainer() {
    return (
        <div style={{width:'100%'}}>
            <Box
                sx={{
                    display:"grid",
                    bgcolor:(theme) => theme.palette.mode === 'dark' ? '#101010' :'grey.200',
                    color:(theme) => theme.palette.mode === "dark" ? 'grey.300' :'grey.800',
                    border:'1px solid',
                    borderColor:(theme) => theme.palette.mode === 'dark' ? 'grey.800' :'grey.300',
                    p:1,
                    borderRadius:2,
                    fontSize:'0.875rem',
                    fontWeight:'700',
                    // fontFamily: 'roboto',
                }}
            >
                {"I'm a grid container!"}
            </Box>
        </div>
    );
}