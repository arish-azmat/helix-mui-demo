import { Card, Grid } from '@mui/material'
import React, { useState } from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
const columns = [
    "Study Id", "Compound", "Asset", "Therapeutic Area", "Indication", "Project", "Development Phase", "Drug Program"
]

export default function Study({ study }) {

    const [fav, setFav] = useState(false)

    return (
        <Card style={{ paddingLeft: '15px', marginTop: 15 }}>
            <Grid container >
                <Grid item md={0.3} onClick={() => { setFav(!fav) }}>
                    {fav ? <StarIcon style={{ margin: '15px 0', cursor: "pointer" }} /> : <StarBorderIcon style={{ margin: '15px 0', cursor: "pointer" }} />}
                </Grid>
                {
                    columns.map((item, index) => <Grid item md={1.46}>
                        <p>{item}</p>
                        <p><strong>{Object.values(study)[index]}</strong></p>
                    </Grid>)
                }

            </Grid>
            <p style={{ fontSize: 12 }}>{study.StudyTitle}</p>
        </Card>
    )
}
