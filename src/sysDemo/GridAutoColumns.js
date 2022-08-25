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

export default function GridAutoColumns() {
    return (
        <div style={{ width: '100%' }}>
            <Box
                sx={{
                    display: 'grid',
                    gridAutoColumns: '1fr',
                    gap: 1,
                }}
            >
                <Item sx={{ gridRow: '1', gridColumn: 'span 3',bgcolor:"primary.main" }}>span 3</Item>
                <Item sx={{ gridRow: '1', gridColumn: '4 / 5',bgcolor:"success.main" }}>4 / 5</Item>
                <Item sx={{ gridRow: '2', gridColumn: '3 / 5',bgcolor:"warning.main" }}>3 / 5</Item>
                <Item sx={{ gridRow: '3', gridColumn: '2 / 5',bgcolor:"error.main" }}>2 / 5</Item>
            </Box>
        </div>
    );
}
