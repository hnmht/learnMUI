import React,{useState} from "react";
import { Box, TextField, Button } from "@mui/material";

export default function FormPropsTextFields() {

    const [value, setValue] = useState("Controlled");
    const handleChange = (event) => {
        console.log("handleChange event:",event);
        setValue(event.target.value);
    };
    const handleSubmit = (event) => {
        console.log("event:", event);
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log("data value:", data);
        console.log("form各个字段的值", {
            username: data.get('username'),
            outlineDisabled: data.get('outlined-disabled'),
            password: data.get('password'),
            outlinedReadOnlyInput: data.get('outlined-read-only-input')

        });
    };

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': {
                    m: 1, width: '25ch'
                }
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            <div>
                <TextField
                    required
                    id="username"
                    name="username"
                    label="用户名"  
                    helperText="请输入用户名"                 
                />
                <TextField
                    disabled
                    id="outlined-disabled"
                    label="Disabled"
                    defaultValue={"Hello World"}
                />
                <TextField
                    id="password"
                    name="password"
                    required
                    label="密码"
                    type={"password"}
                    autoComplete="current-password"
                />
                <TextField
                    id="outlined-read-only-input"
                    label="Read Only"
                    defaultValue={"Hello World"}
                    inputProps={{
                        readOnly: true,
                    }}
                />
                <TextField
                    id="outlined-number"
                    label="Number"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField id="outlined-search" label="Search field" type="search" />
                <TextField
                    id="outlined-helperText"
                    label="Helper text"
                    defaultValue="Default Value"
                    helperText="Some important text"
                />
            </div>
            <div>
                <TextField
                    required
                    id="filled-required"
                    label="Required"
                    defaultValue="Hello World"
                    variant="filled"
                />
                <TextField
                    disabled
                    id="filled-disabled"
                    label="Disabled"
                    defaultValue="Hello World"
                    variant="filled"
                />
                <TextField
                    id="filled-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="filled"
                />
                <TextField
                    id="filled-read-only-input"
                    label="Read Only"
                    defaultValue="Hello World"
                    InputProps={{
                        readOnly: true,
                    }}
                    variant="filled"
                />
                <TextField
                    id="filled-number"
                    label="Number"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="filled"
                />
                <TextField
                    id="filled-search"
                    label="Search field"
                    type="search"
                    variant="filled"
                />
                <TextField
                    id="filled-helperText"
                    label="Helper text"
                    defaultValue="Default Value"
                    helperText="Some important text"
                    variant="filled"
                />
            </div>
            <div>
                <TextField
                    required
                    id="standard-required"
                    label="Required"
                    defaultValue="Hello World"
                    variant="standard"
                />
                <TextField
                    disabled
                    id="standard-disabled"
                    label="Disabled"
                    defaultValue="Hello World"
                    variant="standard"
                />
                <TextField
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                />
                <TextField
                    id="standard-read-only-input"
                    label="Read Only"
                    defaultValue="Hello World"
                    InputProps={{
                        readOnly: true,
                    }}
                    variant="standard"
                />
                <TextField
                    id="standard-number"
                    label="Number"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="standard"
                />
                <TextField
                    id="standard-search"
                    label="Search field"
                    type="search"
                    variant="standard"
                />
                <TextField
                    id="standard-helperText"
                    label="Helper text"
                    defaultValue="Default Value"
                    helperText="Some important text"
                    variant="standard"
                />
            </div>
            <div>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    确定
                </Button>
            </div>
            <div>
                <TextField
                    error
                    id="outlined-error"
                    label="Error"
                    defaultValue="Hello World"
                />
                <TextField
                    error
                    id="outlined-error-helper-text"
                    label="Error"
                    defaultValue="Hello World"
                    helperText="Incorrect entry."
                />
                <TextField
                    error
                    id="filled-error"
                    label="Error"
                    defaultValue="Hello World"
                    variant="filled"
                />
                <TextField
                    error
                    id="filled-error-helper-text"
                    label="Error"
                    defaultValue="Hello World"
                    helperText="Incorrect entry."
                    variant="filled"
                />
                <TextField
                    error
                    id="standard-error"
                    label="Error"
                    defaultValue="Hello World"
                    variant="standard"
                />
                <TextField
                    error
                    id="standard-error-helper-text"
                    label="Error"
                    defaultValue="Hello World"
                    helperText="Incorrect entry."
                    variant="standard"
                />
            </div>
            <div>
                <TextField
                    id="outlined-multiline-flexible"
                    label="Multiline"
                    multiline
                    maxRows={4}
                    value={value}
                    onChange={handleChange}
                />
                <TextField
                    id="outlined-textarea"
                    label="Multiline Placeholder"
                    placeholder="Placeholder"
                    multiline
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Multiline"
                    multiline
                    rows={4}
                    defaultValue="Default Value"
                /> 
            </div>
        </Box>
    );
}