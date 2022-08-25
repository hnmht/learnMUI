import React from "react";
import { styled } from "@mui/system";


// import styled from "@emotion/styled";

const MyDiv = styled('div')(({theme}) => ({
    color:theme.palette.primary.contrastText,
    backgroundColor:theme.palette.primary.main,
    padding:theme.spacing(1),
    borderRadius:theme.shape.borderRadius,
}));

const Input = styled('input')({
    padding:'0.5em',
    margin:'0.5em',
    color:"palegoldenrod",
    background:"papayawhip",
    border:"none",
    borderRadius:3,
});



export default function SpacingDemo({theme}) {
    // console.log("theme.spacing(1):",theme.spacing(1))   
    return (
        <>
            <MyDiv>正确</MyDiv>
            {/* <Input/> */}
        </>
    );
}