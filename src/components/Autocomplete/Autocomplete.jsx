import { Autocomplete as MAuto, createFilterOptions } from '@material-ui/lab';

import { Chip, TextField } from '@material-ui/core';
import { useEffect, useState } from 'react';

const Autocomplete = ({ options, ...props }) => {
  const [value, setValue] = useState([]);

  useEffect(() => {
    console.log(value);
  }, [value]);

  const filter = createFilterOptions();

  return (
    <>
      <MAuto
        options={options}
        // freeSolo
        value={value}
        onChange={(event, newValue) => {
          if (typeof newValue === 'string') {
            setValue({
              email: newValue,
            });
          } else if (newValue && newValue.inputValue) {
            // Create a new value from the user input
            setValue({
              email: newValue.inputValue,
            });
            // handleAdd({ title: newValue.inputValue })
          } else {
            setValue(newValue);
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          // Suggest the creation of a new value
          if (params.inputValue !== '') {
            filtered.push({
              inputValue: params.inputValue,
              email: `Add "${params.inputValue}"`,
            });
          }

          return filtered;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        id='free-solo-with-text-demo'
        // options={top100Films}
        getOptionLabel={(option) => {
          // Value selected with enter, right from the input
          if (typeof option === 'string') {
            return option;
          }
          // Add "xxx" option created dynamically
          if (option.inputValue) {
            return option.inputValue;
          }
          // Regular option
          return option.email;
        }}
        renderOption={(option) => option.email}
        // style={{ width: 300 }}
        freeSolo
        renderInput={(params) => (
          <TextField
            {...params}
            label='Free solo with text demo'
            variant='outlined'
          />
        )}
        multiple
        renderTags={(tagValue, getTagProps) =>
          tagValue.map((option, index) => (
            <Chip label={option?.email || option} {...getTagProps({ index })} />
          ))
        }
      />
    </>
  );
};
export default Autocomplete;
