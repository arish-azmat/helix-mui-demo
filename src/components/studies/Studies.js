import { Button, Card, CardContent, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { Fragment, useState } from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Flex from '../../common/Flex';
import Study from './Study';
import _ from 'lodash';
import styled from '@emotion/styled';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
const useStyles = makeStyles(theme => ({
    root: {
        padding: '0px',
        '&:last-child': {
            padding: '0px'
        }
    }
}));

const studies = [
    {
        "StudyId": "ONC1234",
        "Compound": "SU011248",
        "Asset": "Sunitinib",
        "TherapeuticArea": "Oncology",
        "Indication": "Breast Neoplasms",
        "Project": "PN_LX_6272",
        "DevelopmentPhase": "II",
        "DrugProgram": "C459",
        "StudyTitle": "A PHASE 3, RANDOMIZED, OBSERVER-BLIND STUDY TO EVALUATE THE SAFETY, TOLERABILITY, AND IMMUNOGENICITY OF MULTIPLE PRODUCTION LOTS AND DOSE LEVELS OF THE VACCINE CANDIDATE BNT162b2 AGAINST COVID-19 IN HEALTHY PARTICIPANTS 12 THROUGH 50 YEARS OF AGE AND THE SAFETY, TOLERABILITY, AND IMMUNOGENICITY OF BNT162b2 RNA-BASED COVID-19 VACCINE CANDIDATES AS A BOOSTER DOSE IN HEALTHYyPARTICIPANTS 18 THROUGH 50 YEARS OF AGE"
    },
    {
        "StudyId": "ONC11339",
        "Compound": "SU011252",
        "Asset": "Sunitinib",
        "TherapeuticArea": "Oncology",
        "Indication": "Breast Neoplasms",
        "Project": "PN_LX_6276",
        "DevelopmentPhase": "III",
        "DrugProgram": "C461",
        "StudyTitle": "A PHASE 3, RANDOMIZED, OBSERVER-BLIND STUDY TO EVALUATE THE SAFETY, TOLERABILITY, AND IMMUNOGENICITY OF MULTIPLE PRODUCTION LOTS AND DOSE LEVELS OF THE VACCINE CANDIDATE BNT162b2 AGAINST COVID-19 IN HEALTHY PARTICIPANTS 12 THROUGH 50 YEARS OF AGE AND THE SAFETY, TOLERABILITY, AND IMMUNOGENICITY OF BNT162b2 RNA-BASED COVID-19 VACCINE CANDIDATES AS A BOOSTER DOSE IN HEALTHYyPARTICIPANTS 18 THROUGH 50 YEARS OF AGE"
    },
    {
        "StudyId": "ONC1254",
        "Compound": "SU011254",
        "Asset": "Sunitinib",
        "TherapeuticArea": "Oncology",
        "Indication": "Breast Neoplasms",
        "Project": "PN_LX_6278",
        "DevelopmentPhase": "I",
        "DrugProgram": "C462",
        "StudyTitle": "A PHASE 3, RANDOMIZED, OBSERVER-BLIND STUDY TO EVALUATE THE SAFETY, TOLERABILITY, AND IMMUNOGENICITY OF MULTIPLE PRODUCTION LOTS AND DOSE LEVELS OF THE VACCINE CANDIDATE BNT162b2 AGAINST COVID-19 IN HEALTHY PARTICIPANTS 12 THROUGH 50 YEARS OF AGE AND THE SAFETY, TOLERABILITY, AND IMMUNOGENICITY OF BNT162b2 RNA-BASED COVID-19 VACCINE CANDIDATES AS A BOOSTER DOSE IN HEALTHYyPARTICIPANTS 18 THROUGH 50 YEARS OF AGE"
    },
    {
        "StudyId": "ONC11266",
        "Compound": "SU011266",
        "Asset": "Sunitinib",
        "TherapeuticArea": "Dermatology",
        "Indication": "Scaly Skin",
        "Project": "PN_LX_6266",
        "DevelopmentPhase": "III",
        "DrugProgram": "C466",
        "StudyTitle": "A PHASE 3, RANDOMIZED, OBSERVER-BLIND STUDY TO EVALUATE THE SAFETY, TOLERABILITY, AND IMMUNOGENICITY OF MULTIPLE PRODUCTION LOTS AND DOSE LEVELS OF THE VACCINE CANDIDATE BNT162b2 AGAINST COVID-19 IN HEALTHY PARTICIPANTS 12 THROUGH 50 YEARS OF AGE AND THE SAFETY, TOLERABILITY, AND IMMUNOGENICITY OF BNT162b2 RNA-BASED COVID-19 VACCINE CANDIDATES AS A BOOSTER DOSE IN HEALTHYyPARTICIPANTS 18 THROUGH 50 YEARS OF AGE"
    },
    {
        "StudyId": "ONC11268",
        "Compound": "SU011268",
        "Asset": "Sunitinib",
        "TherapeuticArea": "Oncology",
        "Indication": "Breast Neoplasms",
        "Project": "PN_LX_6268",
        "DevelopmentPhase": "I",
        "DrugProgram": "C458",
        "StudyTitle": "A PHASE 3, RANDOMIZED, OBSERVER-BLIND STUDY TO EVALUATE THE SAFETY, TOLERABILITY, AND IMMUNOGENICITY OF MULTIPLE PRODUCTION LOTS AND DOSE LEVELS OF THE VACCINE CANDIDATE BNT162b2 AGAINST COVID-19 IN HEALTHY PARTICIPANTS 12 THROUGH 50 YEARS OF AGE AND THE SAFETY, TOLERABILITY, AND IMMUNOGENICITY OF BNT162b2 RNA-BASED COVID-19 VACCINE CANDIDATES AS A BOOSTER DOSE IN HEALTHYyPARTICIPANTS 18 THROUGH 50 YEARS OF AGE"
    }
]

const SearchBox = styled('input')`
border-radius:15px;
width:330px;
height:25px;
padding:0 10px;
position:relative;
border:1px solid #00000036;
&:focus{
border:2px solid #0000c9;
}
`;


export default function Studies() {
    const classes = useStyles();

    const [alignment, setAlignment] = useState('All');
    const [favList, setFavList] = useState([]);
    const categories = {
        All: studies,
        Favorites: favList
    }

    const handleChange = (event, newAlignment) => {
        if (newAlignment)
            setAlignment(newAlignment);
    };

    const markUnmarkAsFav = (study) => {
        if (favList.filter((item) => item.StudyId === study.StudyId).length > 0) {
            const fav = [...favList];
            _.remove(fav, (it) => it.StudyId === study.StudyId);
            setFavList(fav)
        } else {
            favList.push(study)
        }
    }
    return (
        <Fragment style={{ marginTop: 20 }}>
            <Flex style={{ position: 'relative' }} verticalContent={'center'} isFlex={true} >
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
                <div style={{ position: 'absolute', right: '20px', display: 'flex', alignItems: 'center' }}>
                    <SearchBox placeholder='Type TA, Indication, Compound, Protocol etc.' type="text" height={100}/>
                    <div style={{ margin: '0 20px', display: 'inline-flex', justifyContent: 'center', width: '30px', height: '30px', alignItems: 'center', background: '#8080803d', borderRadius: "50%" }}>
                        <FilterAltOutlinedIcon />
                    </div>
                    <Button variant='contained' className='sigma-btn'><a href="#/Studies/AddNew">Add New Study +</a></Button>
                </div>
            </Flex>
            <Card style={{ marginTop: 10, boxShadow: 'none' }}>
                {categories[alignment].map((study) => <Study key={study.StudyId} markUnmarkAsFav={markUnmarkAsFav} study={study} />)}

            </Card>
        </Fragment>
    )
}
