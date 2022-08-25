import React,{useState} from "react";
import {
    Grid,
    FormLabel,
    FormControl,
    FormControlLabel,
    RadioGroup,
    Radio,
    Paper,
} from "@mui/material";

export default function SpacingGrid() {
    const [spacing, setSpacing] = useState(2);

    const handleChange = (event) => {
        setSpacing(event.target.value);
    };

    return (
        <Grid sx={{flexGrow:1}} container spacing={2}>
            <Grid item xs={12}>
                <Grid container justifyContent={"center"} spacing={spacing}>
                    {[0,1,2].map((value) => (
                        <Grid key={value} item>
                            <Paper
                                sx={{
                                    height:140,
                                    width:100,
                                    backgroundColor:"green",
                                }}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Paper sx={{p:2}}>
                    <Grid container>
                        <Grid item>
                            <FormControl component={"fieldset"}>
                                <FormLabel component={"legend"}>spacing</FormLabel>
                                <RadioGroup
                                    name="spacing"
                                    aria-label="spacing"
                                    value={spacing.toString()}
                                    onChange={handleChange}
                                    row
                                >
                                    {
                                        [0,0.5,1,2,3,4,8,12].map((value) => (
                                            <FormControlLabel
                                                key={value}
                                                value={value.toString()}
                                                control={<Radio />}
                                                label={value.toString()}
                                            />
                                        ))
                                    }
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
}