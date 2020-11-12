import React from 'react';
import Box from '@material-ui/core/Box';

const FormWithTitle = ({ title, className, children }) => {
  return (
    <div className={className}>
      {title ? (
        <Box borderColor='grey.500' borderBottom={1}>
          <h1>{title}</h1>
        </Box>
      ) : null}
      {children}
    </div>
  );
};

export default FormWithTitle;
