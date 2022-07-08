import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Card, CardHeader, CardContent } from "@mui/material";
import { makeStyles } from "@mui/styles";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const useStyles = makeStyles({
  root: {
    height:'250px',
    marginTop:'10px'
  }
})
function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <br />
      <Grid container spacing={{ xs: 2, md: 2 }}>
        {Array.from(Array(4)).map((_, index) => (
          <Grid item xs={2} sm={4} md={3} key={index}>
            <Card className={classes.root} variant="outlined">
              <CardHeader></CardHeader>
              <CardContent ></CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={{ xs: 2, md: 2 }}>
          <Grid item md={6}>
          <Card className={classes.root} variant="outlined">
              <CardHeader></CardHeader>
              <CardContent ></CardContent>
            </Card>
          </Grid>
          <Grid item md={6}>
          <Card className={classes.root} variant="outlined">
              <CardHeader></CardHeader>
              <CardContent ></CardContent>
            </Card>
          </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
