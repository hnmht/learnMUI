import React, { useState } from "react";
import { Box, TextField, MenuItem } from "@mui/material";

const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];

export default function SelectTextFields() {
    const [currency, setCurrency] = useState("EUR");

    const handleChange = (event) => {
        console.log("handleChange event value:", event);
        setCurrency(event.target.value);
    }

    return (
        <Box
            component={"form"}
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Select"
                    value={currency}
                    onChange={handleChange}
                    helperText="请选择币种"
                >
                    {
                        currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))
                    }
                </TextField>
                <TextField
                    id="outlined-select-currency-native"
                    select
                    label="Native select"
                    value={currency}
                    onChange={handleChange}
                    SelectProps={{
                        native: true,
                    }}
                    helperText="Please select your currency"
                >
                    {currencies.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </TextField>
            </div>
        </Box>
    );
}