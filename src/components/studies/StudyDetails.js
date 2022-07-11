import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Card, Grid, makeStyles } from '@mui/material'


export default function StudyDetails() {
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
            <p><h4>Study Information</h4></p>
            <p style={{ color: "gray" }}>Study Title</p>
            <p style={{ fontSize: 13 }}>
                A PHASE 3, RANDOMIZED, OBSERVER-BLIND STUDY TO EVALUATE THE SAFETY, TOLERABILITY, AND IMMUNOGENICITY OF MULTIPLE PRODUCTION LOTS AND DOSE LEVELS OF THE VACCINE CANDIDATE BNT162b2 AGAINST COVID-19 IN
                HEALTHY PARTICIPANTS 12 THROUGH 50 YEARS OF AGE AND THE SAFETY, TOLERABILITY, AND IMMUNOGENICITY OF BNT162b2 RNA-BASED COVID-19 VACCINE CANDIDATES AS A BOOSTER DOSE IN HEALTHY PARTICIPANTS 18 THROUGH
                50 YEARS OF AGE
            </p>
            <p style={{ color: "gray" }}>Protocol Description</p>
            <p style={{ fontSize: 13 }}>
                A Post-Approval Active Surveillance Safety Study to Monitor Real-World Safety of the Pfizer-BioNTech COVID-19 vaccine in the US/A Phase 1/2 Safety and Immunogenicity Study of BNT162b2 in Children Aged 6 Months to &lt;12 Years
            </p>
        </Card>
        <Card variant="outlined" style={{ marginTop: 20, padding: 15 }}>
            <p><h4>Purposes</h4></p>
            <Card variant="outlined" style={{ marginTop: 10, padding: 15 }}>
                <Grid container item md={0.3}>
                    <p style={{ color: "gray" }}>Type</p>
                    <p>CSR</p>
                </Grid>
            </Card>
            <Card variant="outlined" style={{ marginTop: 10, padding: 15 }}>
                <Grid container item md={0.3}>
                    <p style={{ color: "gray" }}>Type</p>
                    <p>CSR</p>
                </Grid>
            </Card>
        </Card>
    </div>)
}