import React from "react";
import { Typography, Box } from "@mui/material";

export default function TextAlignment() {
    return (
        <Typography component="div">
            <Box sx={{ textAlign: "justify", m: 1, border: "1px solid", textTransform: "none",fontFamily:"unset" }}>
                Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet
                fermentum. Donec sed odio operae, eu vulputate felis rhoncus.
            </Box>
            <Box
                sx={{
                    textAlign: "left",
                    m: 1,
                    border: "1px solid",
                    textTransform: "capitalize",
                    fontWeight: 'light',
                    fontSize:'default',
                    fontStyle:"normal",
                    letterSpacing:0.5,
                }}
            >
                Left aligned text.
            </Box>
            <Box
                sx={{
                    textAlign: "center",
                    m: 1,
                    border: "1px solid",
                    textTransform: "lowercase",
                    fontWeight:500,
                    fontSize:'h6.fontSize',
                    fontStyle:"italic",
                }}
            >
                Center aligned text.
            </Box>
            <Box
                sx={{
                    textAlign: "Right",
                    m: 1,
                    border: "1px solid",
                    textTransform: "uppercase",
                    fontWeight:"medium",
                    fontSize:"0.875rem",
                    fontStyle: "oblique",
                }}
            >
                Right aligned text.
            </Box>
        </Typography>
    );
}