import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

export default function DescriptionAlerts() {
  return (
    <Stack sx={{ width: '100%' }} spacing={5}>
<Alert variant="filled" severity="success">
  payment success — check it out!
</Alert>
    </Stack>
  );
}