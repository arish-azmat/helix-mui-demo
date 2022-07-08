import { Card, Grid } from '@mui/material'
import React from 'react'

const columns = [
    "Study Id", "Compound", "Asset", "Therapeutic Area", "Indication", "Project", "Development Phase", "Drug Program"
]

export default function Study({study}) {
    
    return (
        <Card style={{paddingLeft:'15px'}}>
            <Grid container >
                {
                    columns.map((item,index) => <Grid item md={1.5}>
                        <p>{item}</p>
                        <p><strong>{Object.values(study)[index]}</strong></p>
                    </Grid>)
                }

            </Grid>
            <p>{study.StudyTitle}</p>
        </Card>
    )
}
