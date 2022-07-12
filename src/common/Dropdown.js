import { Autocomplete, TextField } from '@mui/material'
import React from 'react'

export default function Dropdown({ label, value, onChange, options,placeholder }) {
    return (
        <Autocomplete
            id="size-small-outlined"
            size="small"
            options={options}
            value={value}
            onChange={onChange}
            getOptionLabel={(option) => option.title}
            renderInput={(params) => (
                <TextField {...params} hiddenLabel={!label} {...(label ? { label: label } : {})} placeholder={placeholder} />
            )}
        />
    )
}
