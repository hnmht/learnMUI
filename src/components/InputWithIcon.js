import React from "react";
import { Box, Input, InputLabel, InputAdornment, FormControl, TextField } from "@mui/material";
import { AccountCircle, Password } from "@mui/icons-material";

export default function InputWithIcon() {
    return (
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <FormControl variant="standard">
                <InputLabel htmlFor="input-with-icon-adornment">
                    With a start adornment
                </InputLabel>
                <Input
                    id="input-with-icon-adornment"
                    startAdornment={
                        <InputAdornment position="start">
                            <AccountCircle />
                        </InputAdornment>
                    }
                />

            </FormControl>
            <FormControl variant="filled">
                <InputLabel htmlFor="input-with-icon-password">
                    With a end adorment
                </InputLabel>
                <Input
                    id="input-with-icon-password"
                    endAdornment={
                        <InputAdornment position="end">
                            <Password />
                        </InputAdornment>
                    }
                />
            </FormControl>
            <TextField
                id="input-with-icon-textfield"
                label="TextField"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <AccountCircle />
                        </InputAdornment>
                    ),
                }}
                variant="standard"
            />
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <AccountCircle sx={{ color: "ActiveCaption.active", mr: 1, my: 0.5 }} />
                <TextField id="input-with-sx" label="With sx" variant="standard" />
            </Box>
        </Box>
    );
}