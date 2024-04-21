import React from 'react';
import { mockDataContacts } from '../../data/mockData';
import { Box, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import Header from '../../components/Header';
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


  const columns: any = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "name",
      headerName: "Name",
      // flex: 1,
      width: 180,
      cellClassName: "name-column--cell"
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left"
    },
    {
      field: "phone",
      headerName: "Phone Number",
      width: 100
      // flex: 1
    },
    {
      field: "email",
      headerName: "Email",
      // flex: 1
    },
    {
      field: "address",
      headerName: "Address",
      width: 250
      // flex: 1
    },
    {
      field: "city",
      headerName: "City",
      width: 150
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      width: 100
    }
  ]



  return (
    <Box m="20px">
      <Header
        title='CONTACTS'
        subtitle='List of Contacts for Future Reference'
      />
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
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  )
}

export default Contacts