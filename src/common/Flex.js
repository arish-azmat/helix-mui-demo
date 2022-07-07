
import React from 'react'
import { alpha, styled } from '@mui/material/styles';
import { Card } from '@mui/material';

const FCard = styled(Card)(({ isFlex, flexDirection, centerContaint, verticalContent, horizantalContent }) => ({
    padding:'10px',
    display: isFlex ? 'flex' : 'block',
    flexDirection: flexDirection ? flexDirection : 'row',
    ...(centerContaint ? {
        justifyContent: 'center',
        alignItems: 'center'
    } : {
        alignItems: verticalContent ? verticalContent : 'unset',
        justifyContent: horizantalContent ? horizantalContent : 'unset'
    }),

}))

export default function Flex({ children, ...props }) {
    return (
        <FCard {...props} color="red">
            {children}
        </FCard>
    )
}
