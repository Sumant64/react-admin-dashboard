import { AppBar, Box, Button, Dialog, DialogActions, DialogTitle, IconButton, InputBase, Toolbar, useTheme } from '@mui/material';
import React, { useContext, useState } from 'react'
import { ColorModeContext, tokens } from '../theme';
import InputIcon from '@mui/icons-material/Input';
import DehazeIcon from '@mui/icons-material/Dehaze';
import CancelIcon from '@mui/icons-material/Cancel';
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SubHeader from '../components/common/SubHeader';
import SearchIcon from "@mui/icons-material/Search";

interface Props {
  toggle: boolean,
  setToggle: any
}

const TopBar = (props: Props) => {
  const [open, setOpen] = useState('');
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const handleClose = () => {
    setOpen('');
  };

  const handleConfirmLogout = () => {
    setOpen('logout')
  }

  const handleMobileSidebar = () => {
    props.setToggle(!props.toggle)
  }

  return (
    <>
      <Dialog
        open={open == 'logout'}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Box
          sx={{
            width: { xs: '300px', md: '500px' }
          }}
        >
          <Box sx={{ position: 'absolute', right: '10px', top: '10px' }}>
            <CancelIcon sx={{ width: '30px', height: '30px', cursor: 'pointer' }}
              onClick={handleClose}
            />
          </Box>
          <DialogTitle id="alert-dialog-title">
            <SubHeader title="LOGOUT" subtitle="Are you sure you want to logout?" />
          </DialogTitle>
          <DialogActions>
            <Button variant="contained" color='secondary' onClick={handleClose}>Cancel</Button>
            <Button variant="contained" color='secondary'>Yes</Button>
          </DialogActions>
        </Box>
      </Dialog>

      {/* Appbar */}
      <AppBar elevation={3} sx={{ backgroundColor: 'inherit' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* SEARCH BAR */}
          <Box
            // display="flex"
            // backgroundColor={colors.primary[400]}
            // borderRadius="3px"
            display="flex"
            sx={{
              backgroundColor: colors.primary[400],
              borderRadius: '3px',
            }}
          >
            <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
            <IconButton type="button" sx={{ p: 1 }}>
              <SearchIcon />
            </IconButton>
          </Box>

          <Box display='flex'>
            <IconButton sx={{ marginRight: '10px' }} onClick={colorMode.toggleColorMode}>
              {theme.palette.mode === "dark" ? (
                <DarkModeOutlinedIcon  />
              ) : (
                <LightModeOutlinedIcon />
              )}
            </IconButton>
            <IconButton  onClick={handleConfirmLogout} title="log out">
              <InputIcon  />
            </IconButton>
            <IconButton onClick={handleMobileSidebar} title="log out">
              <DehazeIcon  />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>

  )
}

export default TopBar