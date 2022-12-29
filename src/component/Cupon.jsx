import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Cupon() {
  return (
    <Box sx={{ width: '100%', maxWidth: 500 }}>
      <Typography variant="h1" gutterBottom>
        Thank you For buying cupon We have sent The cupon in your mail 
      </Typography>
    </Box>
  );
}