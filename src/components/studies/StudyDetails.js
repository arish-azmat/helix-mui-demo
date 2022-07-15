import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Card, Grid, Button, Box, Tab } from '@mui/material';
import { TabContext,TabList,TabPanel } from "@mui/lab";




export default function StudyDetails() {
    const [value, setValue] = React.useState("1");
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (<div>
        <p>
            <Breadcrumbs aria-label="breadcrumb">
                <Link
                    underline="hover"
                    sx={{ display: 'flex', alignItems: 'center' }}
                    color="inherit"
                    href="/"
                >
                    <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    Home
                </Link>
                <Link
                    underline="hover"
                    sx={{ display: 'flex', alignItems: 'center' }}
                    color="inherit"
                    href="/material-ui/getting-started/installation/"
                >
                    <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    Study
                </Link>
                <Typography
                    sx={{ display: 'flex', alignItems: 'center' }}
                    color="text.primary"
                >
                    <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    {window.location.hash.split("/")[2]}
                </Typography>
            </Breadcrumbs>
        </p>
        <Card variant="outlined" style={{ marginTop: 20, padding: 15 }}>
            <p><h4>Study Information             <Button variant='contained' style={{ float: "right" }}>VIEW DETAILS</Button>
            </h4>
            </p>
            <p style={{ color: "gray" }}>Study Title</p>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <p style={{ color: "gray" }}>Study Title</p>
                    <p style={{ fontSize: 13 }}>
                        A PHASE 3, RANDOMIZED, OBSERVER-BLIND STUDY TO EVALUATE THE SAFETY, TOLERABILITY, AND IMMUNOGENICITY OF MULTIPLE PRODUCTION LOTS AND DOSE LEVELS OF THE VACCINE CANDIDATE BNT162b2 AGAINST COVID-19 IN
                        HEALTHY PARTICIPANTS 12 THROUGH 50 YEARS OF AGE AND THE SAFETY, TOLERABILITY, AND IMMUNOGENICITY OF BNT162b2 RNA-BASED COVID-19 VACCINE CANDIDATES AS A BOOSTER DOSE IN HEALTHY PARTICIPANTS 18 THROUGH
                        50 YEARS OF AGE
                    </p>
                </Grid>
                <Grid item xs={6}>
                    <p style={{ color: "gray" }}>Protocol Description</p>
                    <p style={{ fontSize: 13 }}>
                        A Post Approval Active Surveillance Safety Study to Monitor Real-World Safety of the Pfizer-BioNTech COVID 19
                        vaccine in the US/A Phase 1/2 Safety and Immunogenicity Study of BNT162b2 in Children Aged 6 Months to &lt;12
                        Years
                    </p>
                </Grid>
            </Grid>
        </Card>
        {/*<Card variant="outlined" style={{ marginTop: 20, padding: 15 }}>
            <h4>Purposes</h4>
            <Card variant="outlined" style={{ marginTop: 10, padding: 15 }}>
                <Grid container spacing={3}>
                    <Grid item xs={1}>
                        <p><span style={{ color: "gray", fontSize: 13 }}>Type</span></p>
                        <p>CSR</p>
                    </Grid>
                    <Grid item xs={1}>
                        <p><span style={{ color: "gray", fontSize: 13 }}>Name</span></p>
                        <p>CSR</p>
                    </Grid>
                    <Grid item xs={1}>
                        <p><span style={{ color: "gray", fontSize: 13 }}>Restricted</span></p>
                        <p>No</p>
                    </Grid>
                    <Grid item xs={2}>
                        <p><span style={{ color: "gray", fontSize: 13 }}>Permitted Users</span></p>
                        <p>No</p>
                    </Grid>
                </Grid>
            </Card>
        </Card> */}
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Study Information" value="1" />
                        <Tab label="Study Type/Design" value="2" />
                        <Tab label="Operational Metrics" value="3" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <Grid container spacing={3}>
                        <Grid item xs={1}>
                            <p><span style={{ color: "gray", fontSize: 13 }}>Study ID</span></p>
                            <p>ONC11248</p>
                        </Grid>
                        <Grid item xs={1}>
                            <p><span style={{ color: "gray", fontSize: 13 }}>Protocol Id</span></p>
                            <p>--</p>
                        </Grid>
                        <Grid item xs={1}>
                            <p><span style={{ color: "gray", fontSize: 13 }}>Project</span></p>
                            <p>No</p>
                        </Grid>
                        <Grid item xs={2}>
                            <p><span style={{ color: "gray", fontSize: 13 }}>Development Phase</span></p>
                            <p>No</p>
                        </Grid>
                        <Grid item xs={1}>
                            <p><span style={{ color: "gray", fontSize: 13 }}>Drug Program</span></p>
                            <p>ONC11248</p>
                        </Grid>
                        <Grid item xs={1}>
                            <p><span style={{ color: "gray", fontSize: 13 }}>Candidate Code</span></p>
                            <p>--</p>
                        </Grid>
                        <Grid item xs={1}>
                            <p><span style={{ color: "gray", fontSize: 13 }}>EUDRACT Number</span></p>
                            <p>No</p>
                        </Grid>
                        <Grid item xs={1}>
                            <p><span style={{ color: "gray", fontSize: 13 }}>Asset</span></p>
                            <p>No</p>
                        </Grid>
                        <Grid item xs={1}>
                            <p><span style={{ color: "gray", fontSize: 13 }}>Compound</span></p>
                            <p>SU0112411</p>
                        </Grid>
                        <Grid item xs={1}>
                            <p><span style={{ color: "gray", fontSize: 13 }}>Indication</span></p>
                            <p>Scaly Skin</p>
                        </Grid>
                        <Grid item xs={1}>
                            <p><span style={{ color: "gray", fontSize: 13 }}>Indication</span></p>
                            <p>Scaly Skin</p>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item xs={1}>
                            <p><span style={{ color: "gray", fontSize: 13 }}>Therapeutic Area</span></p>
                            <p>VACCINES</p>
                        </Grid>
                        <Grid item xs={1}>
                            <p><span style={{ color: "gray", fontSize: 13 }}>Study Status</span></p>
                            <p>ONGOING</p>
                        </Grid>
                        <Grid item xs={1}>
                            <p><span style={{ color: "gray", fontSize: 13 }}>Protocol Approved</span></p>
                            <p>Yes</p>
                        </Grid>
                        <Grid item xs={2}>
                            <p><span style={{ color: "gray", fontSize: 13 }}>On Hold Study</span></p>
                            <p>Y</p>
                        </Grid>
                        <Grid item xs={2}>
                            <p><span style={{ color: "gray", fontSize: 13 }}>Termination Date</span></p>
                            <p>10/02/2018</p>
                        </Grid>
                        <Grid item xs={2}>
                            <p><span style={{ color: "gray", fontSize: 13 }}>Reason for Termination</span></p>
                            <p>BUSINESS</p>
                        </Grid>
                        <Grid item xs={2}>
                            <p><span style={{ color: "gray", fontSize: 13 }}>DMC Committee Used</span></p>
                            <p>Y</p>
                        </Grid>
                        <Grid item xs={2}>
                            <p><span style={{ color: "gray", fontSize: 13 }}>Asset</span></p>
                            <p>No</p>
                        </Grid>
                    </Grid>

                </TabPanel>
                <TabPanel value="2">Study Type/Design</TabPanel>
                <TabPanel value="3">Operational Metrics</TabPanel>
            </TabContext>
        </Box>
    </div>)
}