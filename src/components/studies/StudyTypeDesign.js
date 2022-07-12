import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { Fragment } from 'react'
import Dropdown from '../../common/Dropdown'

export default function StudyTypeDesign({ handleTabChange }) {
    return (
        <Fragment>
            <Grid container spacing={10}>
                <Grid item xs={6}>
                    <Grid container spacing={0}>
                        <Grid item xs={6}>
                            <Typography variant='label'>Study Type</Typography>
                            <Dropdown placeholder='Select Study Type' options={[{ title: "test" }]} />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant='label'>Statistical Design</Typography>
                            <Dropdown placeholder='Select Statistical Design' options={[{ title: "test" }]} />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant='label'>Blinding Design</Typography>
                            <Dropdown placeholder='Select Blinding Design' options={[{ title: "test" }]} />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant='label'>Comparative Study</Typography>
                            <Dropdown placeholder='Select Comparative Study' options={[{ title: "test" }]} />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant='label'>Compassionate Use Study</Typography>
                            <Dropdown placeholder='Select Compassionate Use Study' options={[{ title: "test" }]} />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant='label'>Post-Authorization Safety Study</Typography>
                            <Dropdown placeholder='Select Post-Authorization Safety Study' options={[{ title: "test" }]} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid container>
                        <Grid item xs={6}>
                            <Typography variant='label'>Post-Marketing Surveillance</Typography>
                            <Dropdown placeholder='Select Post-Marketing Surveillance' options={[{ title: "test" }]} />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant='label'>Pediatric Study</Typography>
                            <Dropdown placeholder='Select Pediatric Study' options={[{ title: "test" }]} />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant='label'>Pharmacogenetics Inclusion</Typography>
                            <Dropdown placeholder='Select Pharmacogenetics Inclusion' options={[{ title: "test" }]} />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant='label'>Gender</Typography>
                            <Dropdown placeholder='Select Gender' options={[{ title: "test" }]} />
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant='label'>Minimum Age</Typography>
                            <Dropdown placeholder='Select Minimum Age' options={[{ title: "test" }]} />
                        </Grid>
                        <Grid item xs={3}>
                            <Typography style={{ opacity: 0 }} variant='label'>Select year</Typography>
                            <Dropdown placeholder='Select year' options={[{ title: "test" }]} />
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant='label'>Maximum Age</Typography>
                            <Dropdown placeholder='Select Maximum Age' options={[{ title: "test" }]} />
                        </Grid>
                        <Grid item xs={3}>
                            <Typography style={{ opacity: 0 }} variant='label'>Select year</Typography>
                            <Dropdown placeholder='Select year' options={[{ title: "test" }]} />
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>


            <Button variant='contained'  style={{ marginTop: 20, float: "right" }}>Create Study</Button>
            <Button variant='outlined' color='primary'  style={{ marginTop: 20,marginRight:'10px', float: "right" }}>Cancel</Button>
        </Fragment>
    )
}
