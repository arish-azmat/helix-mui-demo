import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from '@mui/material/Stack';

import Grid from "@mui/material/Grid";
import {
  Card,
  CardHeader,
  CardContent,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Button,
  Link,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const useStyles = makeStyles({
  root: {
    height: "250px",
    marginTop: "10px",
  },
});
const useStyles2 = makeStyles({
  root: {
    // height: "400px",
    marginTop: "10px",
  },
});
const useStylesBtn = makeStyles({
  root: {
    float: "right",
    marginTop: '20px'
  },
});
function Dashboard() {
  const classes = useStyles();
  const classes2 = useStyles2();
  const classesBtn = useStylesBtn();
  return (
    <div>
      <Grid container spacing={{ xs: 2, md: 2 }}>
        {Array.from(Array(4)).map((_, index) => (
          <Grid key={index} item xs={2} sm={4} md={3} >
            <Card className={classes.root} variant="outlined">
              <CardHeader></CardHeader>
              <CardContent></CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={{ xs: 2, md: 2 }}>
        <Grid item md={6}>
          <Card className={classes2.root} variant="outlined">
            <div className="recent-studies">
              <p>Recent Studies</p>
            </div>
            <Stack spacing={2} direction={'column'} >
              {["ONC11248", "ONC11325", "ONC11336", "ONC11340", "ONC11342"].map((text, index) => (
                <Paper key={text} elevation={5}>
                  <ListItem

                    secondaryAction={
                      <Typography variant="subtitle2"
                        edge={"end"}
                      >{"Accessed on: 24/12/2022"}</Typography>
                    }
                    disablePadding
                  >
                    <ListItemButton>
                      <Link href={`#/Studies/${text}`}> <ListItemText primary={text} /></Link>
                    </ListItemButton>
                  </ListItem>
                </Paper>
              ))}

            </Stack>
            <Button className={`${classesBtn.root} sigma-btn`} variant="contained" style={{ marginTop: 20 }}>View all</Button>
          </Card>
        </Grid>
        <Grid item md={6}>
          <Grid item md={12}>
            <Card className={classes.root} variant="outlined">
              <CardHeader></CardHeader>
              <CardContent></CardContent>
            </Card>
          </Grid>
          <Grid item md={12}>
            <Card className={classes.root} variant="outlined">
              <CardHeader></CardHeader>
              <CardContent></CardContent>
            </Card>
          </Grid>

        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
