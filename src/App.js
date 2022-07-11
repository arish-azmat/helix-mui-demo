

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import logo from './assets/images/logo.PNG'
import Studies from './components/studies/Studies';
import Dashboard from './components/dashboard';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
const drawerWidth = 160;
const useStyles = makeStyles({
  root: {
    background: '#fff'
  }
});
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function App(props) {
  const h = useNavigate();
  const l = useLocation();
  React.useEffect(() => {
    if (l.pathname = "/") {
      h("/Dashboard");
    }
  }, [])

  const classes = useStyles()
  return (

    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" color={''} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Grid container spacing={3}>
            <Grid item xs={1}>
              <img src={logo} height={'65'} />
            </Grid>
            <Grid item xs={7}></Grid>
            <Grid item xs={4}>
              <div style={{ marginTop: 20, fontSize: 20,float:"right" }}>
                <SearchIcon />
                <AccountCircleIcon style={{ marginLeft: 15 }} />
                <NotificationsIcon style={{ marginLeft: 15 }} />
                <ShoppingCartIcon style={{ marginLeft: 15 }} />
                <Button variant='contained' style={{ marginLeft: 18,marginTop:-9 }} className="sigma-btn">LOG OUT</Button>
              </div>
            </Grid>
          </Grid>
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
