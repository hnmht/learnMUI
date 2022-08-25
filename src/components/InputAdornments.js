import React, { useState } from "react";
import {
    Box,
    IconButton,
    Input,
    FilledInput,
    OutlinedInput,
    InputLabel,
    InputAdornment,
    FormHelperText,
    FormControl,
    TextField,
} from "@mui/material";
import {
    Visibility as VisibilityIcon,
    VisibilityOff as VisibilityOffIcon,
} from "@mui/icons-material";

export default function InputAdornments() {
    const [values, setValues] = useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        console.log("prop:", prop);
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <div>
                <TextField
                    label='With normal TextField'
                    id="outlined-start-adornment"
                    sx={{ m: 1, width: '30ch' }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                    }}
                />
                <FormControl sx={{ m: 1, width: '25ch' }} variant='outlined'>
                    <OutlinedInput
                        id='outlined-adornment-weight'
                        value={values.weight}
                        onChange={handleChange('weight')}
                        endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                            'aria-label':'weight',
                        }}
                    />
                    <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText>
                </FormControl>
                <FormControl sx={{m:1,width:'25ch'}} variant='outlined'>
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showPassword ? "text" :"password"}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {values.showPassword ? <VisibilityIcon/> :<VisibilityOffIcon/>} 
                                </IconButton>
                            </InputAdornment>
                        }
                        label='Password'
                    />
                </FormControl>
                <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        value={values.amount}
                        onChange={handleChange('amount')}
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        label="Amount"
                    />
                </FormControl>
            </div>
        </Box>
    );
}