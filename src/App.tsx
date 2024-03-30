import { useState } from "react";
import TopBar from "./layout/TopBar";
import { Box } from "@mui/material";
import SidebarComp from "./layout/SidebarComp";
import { Route, Routes } from "react-router";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import Invoices from "./scenes/invoices";
import Form from "./scenes/form";
import Bar from "./scenes/bar";
import Pie from "./scenes/pie";
import Line from "./scenes/line";
import FAQ from "./scenes/faq";
import Calendar from "./scenes/calendar";
import Geography from "./scenes/geography";


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
            <Route path="/team" element={<Team />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/form" element={<Form />} />
            <Route path="/bar" element={<Bar />} />
            <Route path="/pie" element={<Pie />} />
            <Route path="/line" element={<Line />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/geography" element={<Geography />} />
          </Routes>
          </Box>
        </div>
      </div>
    </>
  );
}

export default App;
