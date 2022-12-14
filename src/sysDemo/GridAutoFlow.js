import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

function Item(props) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
                border: '1px solid',
                borderColor: (theme) =>
                    theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                p: 1,
                borderRadius: 2,
                textAlign: 'center',
                fontSize: '0.875rem',
                fontWeight: '700',
                ...sx,
            }}
            {...other}
        />
    );
}

Item.propTypes = {
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
        ),
        PropTypes.func,
        PropTypes.object,
    ]),
};

export default function GridAutoFlow() {
    return (
        <div style={{ width: '100%' }}>
            <Box
                sx={{
                    display: 'grid',
                    gridAutoFlow: 'column',
                    gridTemplateColumns: 'repeat(5, 1fr)',
                    gridTemplateRows: 'repeat(2, 150px)',
                    gap: 1,
                }}
            >
                <Item sx={{ gridColumn: '1', gridRow: '1 / 3' }}>1</Item>
                <Item>2</Item>
                <Item>3</Item>
                <Item>4</Item>
                <Item sx={{ gridColumn: '5', gridRow: '2 / 3' }}>5</Item>
            </Box>
        </div>
    );
}
