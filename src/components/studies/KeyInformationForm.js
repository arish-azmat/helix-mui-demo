import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { Fragment } from 'react'
import Dropdown from '../../common/Dropdown'

export default function KeyInformationForm({ handleTabChange }) {
    return (
        <Fragment>
            <Grid container spacing={10}>
                <Grid item xs={6}>
                    <Grid container spacing={0}>
                        <Grid item xs={6}>
                            <Typography variant='label'>Study ID*</Typography>
                            <TextField hiddenLabel id="study_id" variant="outlined" size="small" />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant='label'>Protocol ID</Typography>
                            <TextField hiddenLabel id="protocol_id" variant="outlined" size="small" />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant='label'>Study Title*</Typography>
                            <TextField hiddenLabel id="study_title" placeholder='Enter Study Title' variant="outlined" size="small" multiline rows={5} />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant='label'>Protocol Description</Typography>
                            <TextField hiddenLabel id="protocol_description" placeholder='Enter Protocol Description' variant="outlined" size="small" multiline
                                rows={5} />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant='label'>Project</Typography>
                            <Dropdown placeholder='Select Poject or Type to Search' options={[{ title: "test" }]} />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant='label'>Development Phase*</Typography>
                            <Dropdown placeholder='Select Development Phase' options={[{ title: "test" }]} />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant='label'>Drug Program*</Typography>
                            <Dropdown placeholder='Select Drug Program or Type to Search' options={[{ title: "test" }]} />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant='label'>EUDRACT Number</Typography>
                            <TextField type={'number'} placeholder='Enter EUDRACT Number' hiddenLabel id="protocol_id" variant="outlined" size="small" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid container>
                        <Grid item xs={6}>
                            <Typography variant='label'>Asset</Typography>
                            <Dropdown placeholder='Select Asset or Type to Search' options={[{ title: "test" }]} />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant='label'>Compound</Typography>
                            <Dropdown placeholder='Select Compound or Type to Search' options={[{ title: "test" }]} />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant='label'>Indication</Typography>
                            <Dropdown placeholder='Select Indication or Type to Search' options={[{ title: "test" }]} />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant='label'>Therapeutic Area</Typography>
                            <Dropdown placeholder='Select Therapeutic Area' options={[{ title: "test" }]} />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant='label'>Study Status</Typography>
                            <Dropdown placeholder='Select Study Status or Type to Search' options={[{ title: "test" }]} />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant='label'>Termination Date</Typography>
                            <TextField placeholder='Select Termination Date' type={'date'} hiddenLabel id="study_id" variant="outlined" size="small" />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant='label'>Reason For Termination</Typography>
                            <Dropdown placeholder='Select Reason For Termination' options={[{ title: "test" }]} />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant='label'>DMC Committee Used</Typography>
                            <Dropdown options={[{ title: "test" }]} />
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>


            <Button onClick={() => handleTabChange(null, "2")} variant='contained' className='sigma-btn' style={{ marginTop: 20, float: "right" }}>Next</Button>
        </Fragment>
    )
}
