import React from "react";
import { Card, Grid, Button, Box } from '@mui/material';
import Tab from '@material-ui/core/Tab';
import Tabs from '@mui/material/Tabs';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import TextField from '@mui/material/TextField';


export default function AddNew() {
    const [value, setValue] = React.useState("1");
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (<div>
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="Key Information" value="1" />
                    <Tab label="Study Type/Design" value="2" />
                </TabList>
            </Box>
            <TabPanel value="1">
                <Grid container spacing={0}>
                    <Grid item xs={3}>
                        <p><span style={{ color: "gray", fontSize: 13 }}>Study ID</span></p>
                        <TextField id="outlined-basic" label="Study ID" variant="outlined" className="sigma-input" />
                    </Grid>
                    <Grid item xs={3}>
                        <p><span style={{ color: "gray", fontSize: 13 }}>Protocol ID</span></p>
                        <TextField id="outlined-basic" label="Protocol ID" variant="outlined" className="sigma-input" />
                    </Grid>
                    <Grid item xs={3}>
                        <p><span style={{ color: "gray", fontSize: 13 }}>Asset</span></p>
                        <TextField id="outlined-basic" label="Asset" variant="outlined" className="sigma-input" />
                    </Grid>
                    <Grid item xs={3}>
                        <p><span style={{ color: "gray", fontSize: 13 }}>Compound</span></p>
                        <TextField id="outlined-basic" label="Compound" variant="outlined" className="sigma-input" />
                    </Grid>
                </Grid>
                <Grid container spacing={0}>
                    <Grid item xs={3}>
                        <p><span style={{ color: "gray", fontSize: 13 }}>Study Title*</span></p>
                        <TextField id="outlined-basic" label="Study Title*" variant="outlined" className="sigma-input"  maxRows={5}/>
                    </Grid>
                    <Grid item xs={3}>
                        <p><span style={{ color: "gray", fontSize: 13 }}>Protocol Description</span></p>
                        <TextField id="outlined-basic" label="Protocol Description" variant="outlined" className="sigma-input" />
                    </Grid>
                    <Grid item xs={3}>
                        <p><span style={{ color: "gray", fontSize: 13 }}>Indication</span></p>
                        <TextField id="outlined-basic" label="Indication" variant="outlined" className="sigma-input" />
                    </Grid>
                    <Grid item xs={3}>
                        <p><span style={{ color: "gray", fontSize: 13 }}>Therapeutic Area</span></p>
                        <TextField id="outlined-basic" label="Therapeutic Area" variant="outlined" className="sigma-input" />
                    </Grid>
                </Grid>
                <Grid container spacing={0}>
                    <Grid item xs={3}>
                        <p><span style={{ color: "gray", fontSize: 13 }}>Project</span></p>
                        <TextField id="outlined-basic" label="Project" variant="outlined" className="sigma-input" />
                    </Grid>
                    <Grid item xs={3}>
                        <p><span style={{ color: "gray", fontSize: 13 }}>Development Phase*</span></p>
                        <TextField id="outlined-basic" label="Development Phase*" variant="outlined" className="sigma-input" />
                    </Grid>
                    <Grid item xs={3}>
                        <p><span style={{ color: "gray", fontSize: 13 }}>Study Status</span></p>
                        <TextField id="outlined-basic" label="Termination Date" variant="outlined" className="sigma-input" />
                    </Grid>
                    <Grid item xs={3}>
                        <p><span style={{ color: "gray", fontSize: 13 }}>Termination Date</span></p>
                        <TextField id="outlined-basic" label="Termination Date" variant="outlined" className="sigma-input" />
                    </Grid>
                </Grid>

                <Button variant='contained' className='sigma-btn' style={{marginTop:20,float:"right"}}>Next</Button>



            </TabPanel>
            <TabPanel value="2">Study Type/Design</TabPanel>
        </TabContext>
    </div>)
}