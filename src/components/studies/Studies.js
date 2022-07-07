import { Card, CardContent, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { Fragment, useState } from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Flex from '../../common/Flex';
const useStyles = makeStyles(theme => ({
    root: {
        padding: '0px',
        '&:last-child': {
            padding: '0px'
        }
    }
}));



export default function Studies() {
    const classes = useStyles();
    const [alignment, setAlignment] = useState('All');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    return (
        <Fragment>
            <Flex verticalContent={'center'} isFlex={true} >
                <Typography variant='h6'>Studies</Typography>
                <ToggleButtonGroup
                    sx={{ marginLeft: '10px' }}
                    size='small'
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                >
                    <ToggleButton value="All">All</ToggleButton>
                    <ToggleButton value="Favorites">Favorites</ToggleButton>
                </ToggleButtonGroup>
            </Flex>
        </Fragment>
    )
}
