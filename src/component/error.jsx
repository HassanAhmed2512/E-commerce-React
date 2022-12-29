import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

export default function DescriptionAlerts1() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
<Alert variant="filled" severity="error">
  some thing went wrong — check it out!
</Alert>
    </Stack>
  );
}