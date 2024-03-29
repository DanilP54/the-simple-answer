import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loader = (props) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress {...props} />
    </Box>
  );
}

export {Loader}

