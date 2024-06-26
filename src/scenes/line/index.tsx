import { Box } from '@mui/material'
import React from 'react'
import Header from '../../components/Header'
import LineChart from '../../components/LineChart'

const Line = () => {
  return (
    <Box m="20px">
      <Header title='Line Chart' subtitle='Simple Line Chart' />
      <Box sx={{width: {xs: '700px', md: '100%'}}} height="75vh">
        <LineChart />
      </Box>
    </Box>
  )
}

export default Line