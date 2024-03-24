import { useState } from "react";
import TopBar from "./layout/TopBar";
import { Box } from "@mui/material";
import SidebarComp from "./layout/SidebarComp";
import { Route, Routes } from "react-router";
import Dashboard from "./scenes/dashboard";


function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div style={{ boxSizing: 'border-box' }}>
        <TopBar toggle={toggle} setToggle={setToggle} />
        <div className="app" style={{ display: 'flex', position: 'relative', paddingTop: '4rem' }}>
          <div>
            <SidebarComp toggle={toggle} setToggle={setToggle} />
          </div>
          <Box sx={{ width: '100%', marginLeft: { xs: '5px', md: '20px' }, overflowY: 'auto' }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
          </Box>
        </div>
      </div>
    </>
  );
}

export default App;
