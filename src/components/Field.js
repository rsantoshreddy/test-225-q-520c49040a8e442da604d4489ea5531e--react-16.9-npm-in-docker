import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: '100%',
  },
}));

const Field = ({
  label,
  type,
  id,
  options,
  value,
  color,
  onAction,
  onChange,
  className = '',
  fieldNumber = id,
}) => {
  const classes = useStyles();

  let control = null;
  switch (type) {
    case 'select':
      control = (
        <Fragment>
          <InputLabel htmlFor={id}>{label}</InputLabel>
          <Select
            value={value}
            onChange={(event) => {
              onChange(event, fieldNumber);
            }}
          >
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
            {options.map((option) => (
              <MenuItem key={option.id} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </Fragment>
      );
      break;
    case 'text':
      control = (
        <TextField
          label={label}
          id={id}
          className={className}
          onChange={(event) => {
            onChange(event, fieldNumber);
          }}
          value={value}
        />
      );
      break;
    case 'button':
      control = (
        <Button
          variant='contained'
          color={color}
          onClick={onAction}
          id={id}
          className={className}
        >
          {label}
        </Button>
      );
      break;
    // no default
  }
  return <FormControl className={classes.formControl}>{control}</FormControl>;
};

export default Field;
