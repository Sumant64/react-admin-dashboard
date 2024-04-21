import { Box, Typography, useTheme } from '@mui/material'
import React from 'react';
import Header from '../../components/Header'
import { tokens } from '../../theme';
import { DataGrid } from '@mui/x-data-grid';
import { mockDataTeam } from '../../data/mockData';
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns: any = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "name",
      headerName: "Name",
      // flex: 1,
      width: 150,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
      width: 60
    },
    {
      field: "phone",
      headerName: "Phone Number",
      // flex: 1,
      width: 100
    },
    {
      field: "email",
      headerName: "Email",
      // flex: 1,
      width: 150
    },
    {
      field: "accessLevel",
      headerName: "Access Level",
      // flex: 1,
      width: 200,
      renderCell: ({ row }: any) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            borderRadius="4px"
            sx={{
              backgroundColor: row.access === "admin" ? colors.greenAccent[600] : row.access === "manager" ? colors.greenAccent[700] : colors.greenAccent[700]
            }}
          >
            {row.access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {row.access === "manager" && <SecurityOutlinedIcon />}
            {row.access === "user" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {row.access}
            </Typography>
          </Box>
        );
      },
    },
  ];


  return (
    <Box m="20px">
    <Header title="TEAM" subtitle="Managing the Team Members" />
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
      <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} />
    </Box>
  </Box>
  )
}

export default Team