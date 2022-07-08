

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import logo from './assets/images/logo.PNG'
import Studies from './components/studies/Studies';
import Dashboard from './components/dashboard'
import { Link, Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
const drawerWidth = 160;
const useStyles = makeStyles({
  root: {
    background: '#fff'
  }
})
export default function App(props) {
  const h = useNavigate();
  const l = useLocation();
  React.useEffect(() => {
    if(l.pathname="/"){
      h("/Dashboard");
    }
  }, [])

 const classes = useStyles()
  return (

    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" color={''} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <img src={logo} height={'65'} />  <h3 style={{color:"#0B07A9",marginLeft:15}}> | SIGMA</h3>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Dashboard', 'Studies', 'Settings'].map((text, index) => (

              <ListItem key={text} disablePadding>

                <ListItemButton onClick={() => { h("/" + text) }}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>

              </ListItem>

            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />

        <Routes>
          <Route
            exact
            path="/Studies"
            element={<Studies />}
          />
          <Route
            exact
            path="/Dashboard"
            element={<Dashboard />}
          />


        </Routes>


      </Box>
    </Box>
  );
}
