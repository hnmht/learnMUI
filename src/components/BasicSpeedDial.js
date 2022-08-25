import React from "react";
import {
    Box,
    SpeedDial,
    SpeedDialIcon,
    SpeedDialAction,
} from "@mui/material";
import {
    FileCopy as FileCopyIcon,
    Save as SaveIcon,
    Print as PrintIcon,
    Share as ShareIcon,
} from "@mui/icons-material";

const actions = [
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
];

export default function BasicSpeedDial() {
    return (
        <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'absolute', bottom: 16, right: 16 }}
                icon={<SpeedDialIcon />}
                direction="up"
            >
                {
                    actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            
                        />
                    ))
                }
            </SpeedDial>
        </Box>
    );
}