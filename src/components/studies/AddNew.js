import React from "react";
import { Card, Grid, Button, Box, TextField, Tab, makeStyles } from '@mui/material';
import { TabContext, TabList, TabPanel } from "@mui/lab";
import KeyInformationForm from "./KeyInformationForm";



export default function AddNew() {
    const [value, setValue] = React.useState("1");
    const handleTabChange = (event, newValue) => {
        setValue(newValue);
    };
    return (<div>
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleTabChange} aria-label="lab API tabs example">
                    <Tab label="Key Information" value="1" />
                    <Tab label="Study Type/Design" value="2" />
                </TabList>
            </Box>
            <TabPanel value="1">
                <KeyInformationForm handleTabChange={handleTabChange} />
            </TabPanel>
            <TabPanel value="2">Study Type/Design</TabPanel>
        </TabContext>
    </div>)
}