import React from "react";
import { Box } from "@mui/material";

export default function GridTemplateAreas() {
    return (
        <Box
            sx={{
                width: "100%",
                height: "140px",
                color: "#fff",
                '& > .MuiBox-root > .MuiBox-root': {
                    p: 1,
                    borderRadius: 2,
                    fontSize: '0.875rem',
                    fontWeight: '700',
                },
                bgcolor: 'grey.300',
            }}
        >
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4,1fr)",
                    gap: 1,
                    gridTemplateRows: "auto",
                    gridTemplateAreas: `"header header header header"  "main main . sidebar" "footer footer footer footer" "footer1 footer1 footer2 footer2"`
                }}
            >
                <Box sx={{ gridArea: 'header', bgcolor: 'primary.main' }}>Header</Box>
                <Box sx={{ gridArea: 'main', bgcolor: 'secondary.main' }}>Main1</Box>         
                <Box sx={{ gridArea: "sidebar", bgcolor: "error.main" }}>Sidebar</Box>
                <Box sx={{gridArea:"footer",bgcolor:"warning.dark"}}>Footer</Box>
                <Box sx={{ gridArea: "footer1", bgcolor: "success.main" }}>Footer1A</Box>
                <Box sx={{ gridArea: "footer2", bgcolor: "warning.main" }}>Footer1B</Box>
            </Box>
        </Box>
    );
}