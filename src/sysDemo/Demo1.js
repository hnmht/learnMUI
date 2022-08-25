import React from "react";
import styled from "@emotion/styled";
import {
    TrendingUp as TrendingUpIcon,    
} from "@mui/icons-material";

const StatWrapper = styled('div')(({theme}) => `
    background-color:${theme.palette.background.paper};
    box-shadow:${theme.shadows[1]};
    border-radius:${theme.shape.borderRadius}px;
    padding:${theme.spacing(2)};
    min-width:300px;
`);

const StatHeader = styled('div')(({theme}) => `
    color:${theme.palette.text.secondary};
`,);

const StatValue = styled('div')(({theme}) => `
    color:${theme.palette.text.primary};
    font-size:34px;
    font-weight:${theme.typography.fontWeightMedium};
`,
);

const StyledTrend = styled(TrendingUpIcon)(({theme}) => `
    color:${theme.palette.success.dark};
    font-size:16px;
    vertical-alignment:sub;
`,
);

const StatDiff = styled('div')(({theme}) => `
    color:${theme.palette.success.dark};
    display:inline;
    font-weight:${theme.typography.fontWeightMedium};
    margin-left:${theme.spacing(0.5)};
    margin-right:${theme.spacing(0.5)};
`,
);

const StatPrevious = styled('div')(({theme}) => `
    color:${theme.palette.text.secondary};
    display:inline;
    font-size:12px;
`,
);

export default function Demo1() {
    return (
        <StatWrapper>
            <StatHeader>会话</StatHeader>
            <StatValue>98.3 K</StatValue>
            <StyledTrend/>
            <StatDiff>18.77%</StatDiff>
            <StatPrevious>于上周相比</StatPrevious>
        </StatWrapper>
    );
}