import React from "react";
import { Pagination,Stack } from "@mui/material";

export default function BasicPagination() {
    return (
        <Stack spacing={2}>
            <Pagination count={10} variant="outlined"/>
            <Pagination count={10} color="primary" showFirstButton showLastButton/>
            <Pagination count={10} color="secondary" />
            <Pagination count={10} disabled />
        </Stack>
    );
}