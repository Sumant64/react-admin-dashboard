import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'
import Header from '../../components/Header'
import { tokens } from '../../theme';
import { DataGrid } from '@mui/x-data-grid';
import { mockDataInvoices } from '../../data/mockData';

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns: any = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      cellClassName: "name-column--cell"
    },
    {
      field: "phone",
      headerName: "Phone Number",
      width: 100
    },
    {
      field: "email",
      headerName: "Email",
      width: 200
    },
    {
      field: "cost",
      headerName: "Cost",
      width: 100,
      renderCell: (params: any) => (
        <Typography color={colors.greenAccent[500]}>
          ${params.row.cost}
        </Typography>
      )
    }, 
    {
      field: "date",
      headerName: "Date",
      width: 150
    }
  ]


  return (
    <Box m="20px">
      <Header title="INVOICES" subtitle="List of Invoice Balances" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
      </Box>
    </Box>
  )
}

export default Invoices