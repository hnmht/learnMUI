import React from "react";
import { Box } from "@mui/material";

export default function Height() {
    return (
        <Box sx={{height:100,width:"100vw"}}>
            <Box
                sx={{
                    height: '25%',
                    width: 120,
                    display: 'inline-block',
                    p: 1,
                    mx: 1,
                    bgcolor: (theme) =>
                        theme.palette.mode === 'dark' ? '#101010' : 'grey.200',
                    color: (theme) =>
                        theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                    border: '1px solid',
                    borderColor: (theme) =>
                        theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                    borderRadius: 2,
                    fontSize: '0.875rem',
                    fontWeight: '700',
                    textAlign: 'center',
                }}
            >
                Height 25%
            </Box>
            <Box
                sx={{
                    height: '50%',
                    width: 120,
                    display: 'inline-block',
                    p: 1,
                    mx: 1,
                    bgcolor: (theme) =>
                        theme.palette.mode === 'dark' ? '#101010' : 'grey.200',
                    color: (theme) =>
                        theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                    border: '1px solid',
                    borderColor: (theme) =>
                        theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                    borderRadius: 2,
                    fontSize: '0.875rem',
                    fontWeight: '700',
                    textAlign: 'center',
                }}
            >
                Height 50%
            </Box>
            <Box
                sx={{
                    height: '75%',
                    width: 120,
                    display: 'inline-block',
                    p: 1,
                    mx: 1,
                    bgcolor: (theme) =>
                        theme.palette.mode === 'dark' ? '#101010' : 'grey.200',
                    color: (theme) =>
                        theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                    border: '1px solid',
                    borderColor: (theme) =>
                        theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                    borderRadius: 2,
                    fontSize: '0.875rem',
                    fontWeight: '700',
                    textAlign: 'center',
                }}
            >
                Height 75%
            </Box>
            <Box
                sx={{
                    height: '100%',
                    width: 120,
                    display: 'inline-block',
                    p: 1,
                    mx: 1,
                    bgcolor: (theme) =>
                        theme.palette.mode === 'dark' ? '#101010' : 'grey.200',
                    color: (theme) =>
                        theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                    border: '1px solid',
                    borderColor: (theme) =>
                        theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                    borderRadius: 2,
                    fontSize: '0.875rem',
                    fontWeight: '700',
                    textAlign: 'center',
                }}
            >
                Height 100%
            </Box>
        </Box>
    );
}