import Dashboard from './components/dashboard'
import Studies from './components/studies/Studies';
import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Dashboard from "./components/dashboard";
import Header from "./components/header";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
// import HighlightedCode from 'docs/src/modules/components/HighlightedCode';
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
function App() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "100vh",
  }));
  const [spacing, setSpacing] = React.useState(2);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const jsx = `
<Grid container spacing={${spacing}}>
`;

  return (
    <div className="App">
      <Header />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4}>
          <Grid spacing={8} item xs={2}>
            <Item>
              {" "}
              <Paper
                sx={{
                  height: 140,
                  width: 170,
                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                }}
              />
            </Item>
          </Grid>
          <Grid item xs={8}>
            <Dashboard />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
