import { Box } from '@mui/material'
import React from 'react'
import Header from '../../components/Header'
import PieChart from '../../components/PieChart'

const Pie = () => {
  return (
    <Box m="20px">
      <Header title='Pie Chart' subtitle='Simple Pie Chart' />
      <Box sx={{height: {xs: '70vh', md: '75vh'}}}>
        <PieChart />
      </Box>
    </Box>
  )
}

export default Pie