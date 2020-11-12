import React from 'react';
import Field from './Field';
import { Grid } from '@material-ui/core';

const Fields = ({ elements, onDelete, fieldIndex, onChange }) => {
  return elements.map(({ id, className, ...restProps }, index) => (
    <Grid item xs={index === 0 ? 6 : 2}>
      <Field
        {...restProps}
        id={`${id}-${fieldIndex + 1}`}
        className={`${className}-${fieldIndex + 1}`}
        onAction={onDelete}
        onChange={onChange}
      />
    </Grid>
  ));
};

export default Fields;
