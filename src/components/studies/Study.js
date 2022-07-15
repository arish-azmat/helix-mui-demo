import { Card, Grid,Link } from '@mui/material'
import React, { useState } from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
const columns = [
    "Study Id", "Compound", "Asset", "Therapeutic Area", "Indication", "Project", "Development Phase", "Drug Program"
];


export default function Study({ study, markUnmarkAsFav }) {
    const [fav, setFav] = useState(false)
    const [showTitle, setShowTitle] = useState(false)

    return (
        <Card style={{ paddingLeft: '15px', marginTop: 15, border: '1px solid #0000001a' }}>
            <Grid container >
                <Grid item md={0.3} onClick={() => { setFav(!fav); markUnmarkAsFav(study) }}>
                    {fav ? <StarIcon style={{ margin: '15px 0', cursor: "pointer" }} /> : <StarBorderIcon style={{ margin: '15px 0', cursor: "pointer" }} />}
                </Grid>
                {
                    columns.map((item, index) => <Grid key={index} item md={1.46}>
                        <p style={{ margin: '15px 0 0 0', fontSize: '14px' }}>{item}</p>
                        <p style={{ margin: '5px 0 15px 0' }}><strong>{ item == "Study Id" ? <Link href={`#/Studies/${Object.values(study)[index]}`}>{Object.values(study)[index]}</Link> : <span>{Object.values(study)[index]}</span>}</strong></p>
                    </Grid>)
                }
                <Grid item md={0.3}></Grid>
                <Grid item md={11} onClick={() => setShowTitle(!showTitle)}>
                    <p style={{ margin: '0px', fontSize: '14px' }}>Study Title</p>
                    <p style={{
                        fontSize: 12,
                        cursor: 'pointer',
                        ...(showTitle ? {} : {
                            display: "-webkit-box",
                            "-webkit-line-clamp": "1",
                            "-webkit-box-orient": "vertical",
                            overflow: "hidden"
                        })
                    }}>{study.StudyTitle}</p>
                </Grid>
                <Grid item md={0.7} onClick={() => setShowTitle(!showTitle)}>
                    {showTitle ? <KeyboardArrowUpIcon style={{ margin: '8px 0', cursor: "pointer" }} /> : <KeyboardArrowDownIcon style={{ margin: '8px 0', cursor: "pointer" }} />}
                </Grid>
            </Grid>

        </Card>
    )
}
