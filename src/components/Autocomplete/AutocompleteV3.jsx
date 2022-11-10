import { Chip, TextField } from '@material-ui/core';
import { Autocomplete as MAuto } from '@material-ui/lab';
import React from 'react';

const AutocompleteV3 = ({ name, options, value, setValue, setOptions, error }) => {

  const addToOptions = (newValue) => {
    if (!newValue.length) return;
    const newestOption = newValue[newValue.length - 1];
    if (options.find(o => o.email === newestOption) === undefined) {
      setOptions(prev => ([
        ...prev,
        {
          email: newestOption
        }
      ]))
    }
  }

  return (
    <MAuto
      name={name}
      multiple
      id="tags-filled"
      options={options.map((option) => option.email)}
      filterSelectedOptions
      onChange={(e, newValue) => {
        // console.log('newValue', newValue);
        setValue('values', newValue);
        addToOptions(newValue);
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
        <TextField {...params} error={error[name] ? true : false} helperText={error[name]} variant='outlined' label="freeSolo" placeholder="Favorites" />
      )}
    />
  )
}

export default AutocompleteV3