import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Toolbar } from '@mui/material';
import { useNavigate } from 'react-router';

export default function Header() {
  const [value, setValue] = React.useState('Dashboard');
const navigate=useNavigate();
  return (
    <React.Fragment>
      <div>
        <Toolbar />
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            navigate("/"+newValue);
          }}
        >
          {["Dashboard", "Studies", "Settings"].map((text) => <BottomNavigationAction value={text} label={text} icon={<RestoreIcon />} />)}

        </BottomNavigation>
      </div>
    </React.Fragment>
  );
}
