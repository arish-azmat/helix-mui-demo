import React from 'react'
import Dropdown from './Dropdown'

export default function ChangeTheme({ type, setType }) {
    return (
        <Dropdown onChange={(e, val) => { setType(val.title) }} value={{ title: type }} style={{ display: 'inline-block', width: '150px',marginRight:'10px' }} placeholder='Select Theme' options={[{ title: "helix" }, { title: 'mui' }]} />
    )
}
