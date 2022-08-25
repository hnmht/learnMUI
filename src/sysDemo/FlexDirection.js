import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

function Item(props) {
    const { sx, ...other} = props;
    // console.log("other:", { ...other});
    return (
        <Box
            sx={{
                p:1,
                m:1,
                bgcolor:(theme) => (theme.palette.mode === 'dark' ? "#101010" : 'grey.100'),
                color: (theme) => (theme.palette.mode === 'dark' ? "grey.300" :'grey.800'),
                border:"1px solid",
                borderColor:(theme) => theme.palette.mode === 'dark' ?'grey.800' :'grey.300',
                borderRadius:2,
                fontSize:'0.875rem',
                fontWeight:'700',
                ...sx,
            }}
            {...other}
        />
    );
}

Item.propTypes = {
    sx:PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func,PropTypes.object,PropTypes.bool]),),
        PropTypes.func,
        PropTypes.object,
    ]),
};

export default function FlexDirection() {
    return (
        <div style={{ width:'100%'}}>
            <Box
                sx={{
                    display:"flex",
                    flexDirection:'row',
                    p:1,
                    m:1,
                    bgcolor:'Background.paper',
                    borderRadius:1,
                }}
            >
                <Item sx={{flexGrow:1}}>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
                <Item>Item 4</Item>
                <Item>Item 5</Item>
                <Item>Item 6</Item>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    flexWrap:"wrap",
                    maxHeight:200,
                    p: 1,
                    m: 1,
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                }}
            >
                <Item sx={{ flexGrow: 1 }}>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
                <Item>Item 4</Item>
                <Item>Item 5</Item>
                <Item>Item 6</Item>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column-reverse',
                    alignItems: 'flex-start',
                    p: 1,
                    m: 1,
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                }}
            >
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
            </Box>
        </div>
    );
}