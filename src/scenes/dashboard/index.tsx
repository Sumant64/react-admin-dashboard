import { Box, Button, Grid, IconButton, Typography, useTheme } from '@mui/material';
import React from 'react'
import { tokens } from '../../theme';
import Header from '../../components/Header';
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import StatBox from '../../components/StatBox';
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import LineChart from '../../components/LineChart';
import ProgressCircle from '../../components/ProgressCircle';
import BarChart from '../../components/BarChart';
import { mockTransactions } from '../../data/mockData';
import GeographyChart from '../../components/GeographyChart';

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


  return (
    <Box m="20px">
      {/* Header */}
      <Box display="flex" flexWrap="wrap" justifyContent="space-between" alignItems="center">
        <Header title='DASHBOARD' subtitle='Welcome to your dashboard' />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold"
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* Grid and Charts */}
      <Grid container columns={12} spacing={2} sx={{ marginTop: { xs: '20px', md: '0px' } }}>
        <Grid sx={{ backgroundColor: colors.primary[400] }} item xs={12} md={3}>
          <StatBox
            title="12,361"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Grid>
        <Grid sx={{ backgroundColor: colors.primary[400] }} item xs={12} md={3}>
          <StatBox
            title="431,225"
            subtitle="Sales Obtained"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Grid>
        <Grid sx={{ backgroundColor: colors.primary[400] }} item xs={12} md={3}>
          <StatBox
            title="32,441"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Grid>
        <Grid sx={{ backgroundColor: colors.primary[400] }} item xs={12} md={3}>
          <StatBox
            title="1,325,134"
            subtitle="Traffic Received"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Grid>
      </Grid>

      {/* Row 2 */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          marginTop: '20px',
          gap: '20px',
        }}
      >
        <Box
          sx={{
            flex: 2,
            backgroundColor: colors.primary[400],
            display: { xs: 'none', md: 'block' }
          }}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                $59,342.32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0" >
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: colors.primary[400],
            flex: 1,
            height: '300px'
          }}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            sx={{
              color: colors.grey[100]
            }}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                sx={{
                  backgroundColor: colors.greenAccent[500]
                }}

                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>


      {/* Row 3 */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          marginTop: '20px',
          gap: '20px',
        }}
      >
        <Box
          sx={{
            flex: 1,
            backgroundColor: colors.primary[400]
          }}
          p="30px"
        >
          <Typography variant='h5' fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>

        {/* Bar chart */}
        <Box
          sx={{
            flex: 1,
            backgroundColor: colors.primary[400],
            minWidth: {xs: '300px'}
          }}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>

        {/* Geography chart */}
        <Box
          sx={{
            flex: 1,
            backgroundColor: colors.primary[400]
          }}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
      </Box>


    </Box>
  )
}

export default Dashboard