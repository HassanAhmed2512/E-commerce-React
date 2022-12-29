import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


export default function FirstAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
            <Link to="/" style={{textDecoration: 'none' , color:"white"}} >Home Page</Link>
          </Typography>
          <Button color="inherit"> <Link to="/Register" style={{textDecoration: 'none' , color:"white"}} >Sign up</Link></Button>
          <Button color="inherit"><Link to="/Login" style={{textDecoration: 'none' , color:"white"}} >Sign in</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
