import React from "react";
import { Box } from "@mui/material";

export default function Inline() {
    return (
        <div style={{width:'100%'}}>
            <Box
                component={"div"}
                sx={{
                    display:'inline',
                    p:1,
                    m:2,
                    bgcolor:(theme)=>(theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                    color:(theme) => theme.palette.mode === 'dark' ?'grey.300' :'grey.800',
                    border:'1px solid',
                    borderColor:(theme) => theme.palette.mode === 'dark' ? 'grey.800' :'grey.300',
                    borderRadius:2,
                    fontSize:'0.875rem',
                    fontWeight:'700',
                }}
            >
                inline中文
            </Box>
            <Box
                component={"div"}
                sx={{
                    display: 'block',
                    p: 1,
                    m: 2,
                    bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                    color: (theme) => theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                    border: '1px solid',
                    borderColor: (theme) => theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                    borderRadius: 2,
                    fontSize: '0.875rem',
                    fontWeight: '700',
                }}
            >
                block
            </Box>
        </div>
    );
}