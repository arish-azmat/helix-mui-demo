import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import logo from "./assets/images/logo.PNG";
import Studies from "./components/studies/Studies";
import StudyDetails from "./components/studies/StudyDetails";
import Dashboard from "./components/dashboard";
import AddNew from "./components/studies/AddNew";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Popover from "@mui/material/Popover";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Badge from "@mui/material/Badge";
import {
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import transLogo from "../src/assets/images/Pfizer_Logo_White_RGB.png";
import { makeStyles } from "@mui/styles";
import ChangeTheme from "./common/ChangeTheme";
import Header from "./components/Header";

const drawerWidth = 160;
const useStyles = makeStyles({
  root: {
    background: "#fff",
  },
});
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function App(props) {
  const [notification, setNotification] = useState(null);

  const h = useNavigate();
  const l = useLocation();
  React.useEffect(() => {
    if ((l.pathname = "/")) {
      h("/Dashboard");
    }
  }, []);
  const open = Boolean(notification);
  const id = open ? "simple-popover" : undefined;
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [value, setValue] = React.useState(0);

  const readstudies = [
    {
      StudyId: "ONC1234",
      Compound: "SU011248",
      Asset: "Sunitinib",
      TherapeuticArea: "Oncology",
      Indication: "Breast Neoplasms",
      Project: "PN_LX_6272",
      DevelopmentPhase: "II",
      DrugProgram: "C459",
      read: true,
      StudyTitle: "A PHASE 3, RANDOMIZED, OBSERVER-BLIND STUDY TO EVALUATE",
    },
    {
      StudyId: "ONC11339",
      Compound: "SU011252",
      Asset: "Sunitinib",
      TherapeuticArea: "Oncology",
      Indication: "Breast Neoplasms",
      Project: "PN_LX_6276",
      DevelopmentPhase: "III",
      DrugProgram: "C461",
      read: true,
      StudyTitle: "A PHASE 3, RANDOMIZED, OBSERVER-BLIND STUDY TO EVALUATE",
    },
  ];
  const unreadStudies = [
    {
      StudyId: "ONC11266",
      Compound: "SU011266",
      Asset: "Sunitinib",
      TherapeuticArea: "Dermatology",
      Indication: "Scaly Skin",
      Project: "PN_LX_6266",
      DevelopmentPhase: "III",
      DrugProgram: "C466",
      read: false,
      StudyTitle: "A PHASE 3, RANDOMIZED, OBSERVER-BLIND STUDY TO EVALUATE ",
    },
    {
      StudyId: "ONC1254",
      Compound: "SU011254",
      Asset: "Sunitinib",
      TherapeuticArea: "Oncology",
      Indication: "Breast Neoplasms",
      Project: "PN_LX_6278",
      DevelopmentPhase: "I",
      DrugProgram: "C462",
      read: false,
      StudyTitle: "A PHASE 3, RANDOMIZED, OBSERVER-BLIND STUDY TO EVALUATE ",
    },
    {
      StudyId: "ONC11268",
      Compound: "SU011268",
      Asset: "Sunitinib",
      TherapeuticArea: "Oncology",
      Indication: "Breast Neoplasms",
      Project: "PN_LX_6268",
      DevelopmentPhase: "I",
      DrugProgram: "C458",
      read: false,
      StudyTitle: "A PHASE 3, RANDOMIZED, OBSERVER-BLIND STUDY TO EVALUATE",
    },
  ];
  const Logo={
    helix:logo,
    mui:'https://www.saama.com/wp-content/themes/saama/assets/img/saama-logo-white-tag.svg'
  }
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color={""}
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Grid container spacing={3}>
            <Grid item xs={1}>
              <img src={Logo[props.type]} height={"70"} style={{ marginTop: 5 }} />
            </Grid>
            <Grid item xs={7}></Grid>
            <Grid item xs={4}>
              <div style={{ marginTop: 25, fontSize: 20, float: "right" }}>
                <ChangeTheme type={props.type} setType={props.setType} />
                <SearchIcon />
                <AccountCircleIcon style={{ marginLeft: 15 }} />
                {/* <Badge badgeContent={3} color="primary"> */}
                <NotificationsIcon
                  onClick={(e) => setNotification(e.currentTarget)}
                  style={{ marginLeft: 15 }}
                />
                {/* </Badge> */}
                <Popover
                  id={id}
                  open={open}
                  anchorEl={notification}
                  onClose={() => setNotification(null)}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                >
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      aria-label="basic tabs example"
                    >
                      <Tab label="Unread" />
                      <Tab label="Read" />
                    </Tabs>
                  </Box>
                  <Link to={"#"}>
                    <Typography
                      style={{ float: "right", color: "gray" }}
                      variant="subtitle"
                    >
                      Mark as all read
                    </Typography>
                  </Link>

                  <TabPanel value={value} index={0}>
                    {unreadStudies.map((s) => {
                      return (
                        <Paper
                          key={s.StudyId}
                          style={{ padding: "10px", marginBottom: "10px" }}
                          elevation={1}
                        >
                          <Grid container>
                            <Grid item md={5}>
                              <Typography variant="h6"> {s.StudyId}</Typography>
                            </Grid>
                            <Grid item md={7}>
                              <Button
                                style={{ fontSize: "10px", background: "grey" }}
                                variant="contained"
                              >
                                Newly Onboarded
                              </Button>
                            </Grid>
                          </Grid>
                          <Typography variant="label">Study Title</Typography>
                          <Typography
                            style={{ fontSize: "12px" }}
                            variant="subtitle"
                          >
                            {s.StudyTitle}
                          </Typography>
                          <Grid container>
                            <Grid item md={5}>
                              <Typography variant="label">
                                {"Development Phase"}
                              </Typography>
                            </Grid>
                            <Grid item md={7}>
                              <Typography variant="label">
                                {" "}
                                Therapeutic Area
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid container>
                            <Grid item md={5}>
                              <Typography variant="label">
                                {" "}
                                {s.DevelopmentPhase}
                              </Typography>
                            </Grid>
                            <Grid item md={7}>
                              <Typography variant="label">
                                {s.TherapeuticArea}
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid container>
                            <Grid item md={7}>
                              <Typography variant="label">
                                Onboarded on: 14/06/2022
                              </Typography>
                            </Grid>
                            <Grid item md={5}>
                              <Grid container>
                                <Grid item md={8}>
                                  <Link to="#">
                                    <Typography
                                      variant="label"
                                      style={{
                                        color: "#000",
                                      }}
                                    >
                                      Mark as Read{" "}
                                    </Typography>
                                  </Link>
                                </Grid>
                                <Grid item md={4}>
                                  <Link to="#" style={{ float: "right" }}>
                                    <Typography
                                      variant="label"
                                      style={{
                                        color: "#000",
                                        float: "right",
                                      }}
                                    >
                                      View
                                    </Typography>
                                  </Link>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Paper>
                      );
                    })}
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    {readstudies.map((s) => {
                      return (
                        <Paper
                          key={s.StudyId}
                          style={{ padding: "10px", marginBottom: "10px" }}
                          elevation={1}
                        >
                          <Grid container>
                            <Grid item md={5}>
                              <Typography variant="h6"> {s.StudyId}</Typography>
                            </Grid>
                            <Grid item md={7}>
                              <Button
                                style={{ fontSize: "10px", background: "grey" }}
                                variant="contained"
                              >
                                Newly Onboarded
                              </Button>
                            </Grid>
                          </Grid>
                          <Typography variant="label">Study Title</Typography>
                          <Typography
                            style={{ fontSize: "12px" }}
                            variant="subtitle"
                          >
                            {s.StudyTitle}
                          </Typography>
                          <Grid container>
                            <Grid item md={5}>
                              <Typography variant="label">
                                {"Development Phase"}
                              </Typography>
                            </Grid>
                            <Grid item md={7}>
                              <Typography variant="label">
                                {" "}
                                Therapeutic Area
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid container>
                            <Grid item md={5}>
                              <Typography variant="label">
                                {" "}
                                {s.DevelopmentPhase}
                              </Typography>
                            </Grid>
                            <Grid item md={7}>
                              <Typography variant="label">
                                {s.TherapeuticArea}
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid container>
                            <Grid item md={7}>
                              <Typography variant="label">
                                Onboarded on: 14/06/2022
                              </Typography>
                            </Grid>
                            <Grid item md={5}>
                              <Link to="#">
                                <Typography
                                  variant="label"
                                  style={{
                                    color: "#000",
                                    float: "right",
                                  }}
                                >
                                  View
                                </Typography>
                              </Link>
                            </Grid>
                          </Grid>
                        </Paper>
                      );
                    })}
                  </TabPanel>
                </Popover>
                <ShoppingCartIcon style={{ marginLeft: 15 }} />
                <Button
                 
                  style={{ marginLeft: 18, marginTop: -13 }}
                  className="sigma-btn"
                >
                  LOG OUT
                </Button>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3 }}
        style={{ marginTop: 15, padding: 0 }}
      >
        <Header />
        <div style={{padding:'15px'}}>
          <Routes>
            <Route exact path="/Studies" element={<Studies />} />
            <Route exact path="/Studies/:studyID" element={<StudyDetails />} />
            <Route exact path="/Dashboard" element={<Dashboard />} />
            <Route exact path="/Studies/AddNew" element={<AddNew />} />
          </Routes>
        </div>
      </Box>
    </Box>
  );
}
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


// old sidebar

{/*   <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto", marginTop: 2 }}>
          <List>
            {["Dashboard", "Studies", "Settings"].map((text, index) => (
              <ListItem key={text}>
                <ListItemButton
                  onClick={() => {
                    h("/" + text);
                  }}
                >
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer> */}