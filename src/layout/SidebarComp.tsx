import { Avatar, Box, IconButton, Typography, useTheme } from '@mui/material';
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { tokens } from '../theme';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

interface Props {
  toggle: boolean,
  setToggle: any
}

const Item = (props: any) => {
  const { title, to, icon, selected, setSelected } = props
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{
        // color: colors.grey[100],
        // color: `${selected === title ? colors.grey[600] : "#141414"}`,
      }}
      onClick={() => setSelected(title)}
      icon={icon}
      component={<Link to={to} />}
    >
      <Typography style={{ color: selected === title ? colors.grey[600] : colors.grey[100] }}>{title}</Typography>
    </MenuItem>
  );
};

const SidebarComp = (props: Props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const [breakPoint, setBreakPoint] = useState('');
  let path = window.location.pathname;
  const userName = 'Sumant';
  const corporateName = "Profile";

  useEffect(() => {
    let arrPath = path.split('/')

    switch (arrPath[1]) {
      case 'user':
        setSelected('User');
        break;
      case 'vehicle':
        setSelected('Vehicle');
        break;
      case 'corporate':
        setSelected('Corporate');
        break;
      case 'stats':
        setSelected('Stats');
        break;
      case 'analytics':
        setSelected('Analytics');
        break;
      case 'vehicle-details':
        setSelected('Vehicle');
        break;
    }
  }, []);

  const handleClick = () => {
    props.setToggle(false)
  }




  return (
    <Box
      sx={{
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
        "& .css-dip3t8": {
          backgroundColor: "rgb(249, 249, 249, 0.95) !important",
        },
        marginRight: '-10px',
        height: '93vh',
        width: '100%',
        overflowY: 'scroll',
        overflowX: 'hidden'
      }}
    >
      <Sidebar
        backgroundColor={colors.primary[400]}
        transitionDuration={400} onBackdropClick={() => props.setToggle(false)} toggled={props.toggle} collapsedWidth='80px' width='250px' collapsed={isCollapsed} breakPoint='sm'>
        <Menu
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              // only apply styles on first level elements of the tree
              if (level === 0)
                return {
                  color: disabled ? '#f5d9ff' : '#d359ff',
                  backgroundColor: active ? '#e2e2e2' : undefined,
                };
            },
          }}
        >
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon sx={{ color: colors.grey[100] }} />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <Avatar sx={{ height: '70px', width: '70px', fontSize: '35px' }}>
                  {/* {userName.slice(0, 1)} */}
                  S
                </Avatar>
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h4"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  {
                    (userName.length > 14) ? `${userName.slice(0, 9)}...` : userName
                  }
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  {corporateName}
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Box onClick={() => handleClick()}>
              <Item
                title="Dashboard"
                to="/"
                icon={<HomeOutlinedIcon sx={{ color: colors.grey[600] }} />}
                selected={selected}
                setSelected={setSelected}
              />
            </Box>

            {/* data */}
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>

            <Box onClick={() => handleClick()}>
              <Item
                title="Manage Team"
                to="/team"
                icon={<PeopleOutlinedIcon sx={{ color: colors.grey[600] }} />}
                selected={selected}
                setSelected={setSelected}
              />
            </Box>

            <Box onClick={() => handleClick()}>
              <Item
                title="Contacts Information"
                to="/contacts"
                icon={<ContactsOutlinedIcon sx={{ color: colors.grey[600] }} />}
                selected={selected}
                setSelected={setSelected}
              />
            </Box>

            <Box onClick={() => handleClick()}>
              <Item
                title="Invoices Balances"
                to="/invoices"
                icon={<ReceiptOutlinedIcon sx={{ color: colors.grey[600] }} />}
                selected={selected}
                setSelected={setSelected}
              />
            </Box>

            {/* pages */}
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>

            <Box onClick={() => handleClick()}>
              <Item
                title="Profile Form"
                to="/form"
                icon={<PersonOutlinedIcon sx={{ color: colors.grey[600] }} />}
                selected={selected}
                setSelected={setSelected}
              />
            </Box>
            <Box onClick={() => handleClick()}>
              <Item
                title="Calendar"
                to="/calendar"
                icon={<CalendarTodayOutlinedIcon sx={{ color: colors.grey[600] }} />}
                selected={selected}
                setSelected={setSelected}
              />
            </Box>
            <Box onClick={() => handleClick()}>
              <Item
                title="FAQ Page"
                to="/faq"
                icon={<HelpOutlineOutlinedIcon sx={{ color:  colors.grey[600] }} />}
                selected={selected}
                setSelected={setSelected}
              />
            </Box>

            {/* Charts */}
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>

            <Box onClick={() => handleClick()}>
              <Item
                title="Bar Chart"
                to="/bar"
                icon={<BarChartOutlinedIcon sx={{ color: colors.grey[600] }} />}
                selected={selected}
                setSelected={setSelected}
              />
            </Box>

            <Box onClick={() => handleClick()}>
              <Item
                title="Pie Chart"
                to="/pie"
                icon={<PieChartOutlineOutlinedIcon sx={{ color: colors.grey[600] }} />}
                selected={selected}
                setSelected={setSelected}
              />
            </Box>
            <Box onClick={() => handleClick()}>
              <Item
                title="Line Chart"
                to="/line"
                icon={<TimelineOutlinedIcon sx={{ color: colors.grey[600] }} />}
                selected={selected}
                setSelected={setSelected}
              />
            </Box>
            <Box onClick={() => handleClick()}>
              <Item
                title="Geography Chart"
                to="/geography"
                icon={<MapOutlinedIcon sx={{ color:  colors.grey[600] }} />}
                selected={selected}
                setSelected={setSelected}
              />
            </Box>
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  )
}

export default SidebarComp