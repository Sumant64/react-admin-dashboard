import React from 'react';
import { mockDataContacts } from '../../data/mockData';
import { useTheme } from '@mui/material';
import { tokens } from '../../theme';

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  

  return (
    <div>Contacts</div>
  )
}

export default Contacts