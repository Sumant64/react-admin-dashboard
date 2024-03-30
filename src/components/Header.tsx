import { Box, Typography, useTheme } from '@mui/material';
import React from 'react'
import { tokens } from '../theme';

interface Props {
    title: string;
    subtitle: string;
}

const Header = (props: Props) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


  return (
    <Box mb="30px">
        <Typography
            variant='h2'
            color={colors.grey[100]}
            fontWeight="bold"
            sx={{m: '0 0 5px 0'}}
        >
            {props.title}
        </Typography>
        <Typography variant='h5' color={colors.greenAccent[400]}>
            {props.subtitle}
        </Typography>
    </Box>
  )
}

export default Header