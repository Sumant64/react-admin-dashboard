import React from 'react'
import { Box, Button, IconButton, Typography, makeStyles, useTheme } from "@mui/material";
import { tokens } from '../../theme';

interface Props {
    title: string,
    subtitle: string
}

const SubHeader = (props: Props) => {
    const { title, subtitle } = props
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    return (
        <>
            <Box mb="0px">
                <Typography
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ m: "0 0 5px 0", fontSize: {xs: '17px'} }}
                >
                    {title}
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[400]}>
                    {subtitle}
                </Typography>
            </Box>
        </>
    )
}

export default SubHeader