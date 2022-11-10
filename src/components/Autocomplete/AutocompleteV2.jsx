import { Chip, TextField } from '@material-ui/core';
import { Autocomplete as MAuto } from '@material-ui/lab';
import React from 'react';

const AutocompleteV2 = ({ name, options, value, setValue, error }) => {
  return (
    <MAuto
      name={name}
      multiple
      id="tags-filled"
      options={options.map((option) => option.email)}
      filterSelectedOptions
      onChange={(e, newValue) => {
        console.log('newValue', newValue);
        setValue('values', newValue);
      }}
      freeSolo
      renderTags={(value, getTagProps) =>
        value.map((option, index) => {
          return (
            <Chip variant="outlined" label={option} {...getTagProps({ index })} />
          )
        })
      }
      renderInput={(params) => (
        <TextField {...params} error={error[name] ? true : false} helperText={error[name]} variant="outlined" label="freeSolo" placeholder="Favorites" />
      )}
    />
  )
}

export default AutocompleteV2