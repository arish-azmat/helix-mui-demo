import { Card, CardContent, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { Fragment, useState } from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Flex from '../../common/Flex';
import Study from './Study';
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
            <Card style={{marginTop:10}}>
                {studies.map((study) => <Study study={study} />)}

            </Card>
        </Fragment>
    )
}
