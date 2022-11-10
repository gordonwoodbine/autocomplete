import { Autocomplete as MAuto, createFilterOptions } from '@material-ui/lab';

import { Chip, TextField } from '@material-ui/core';
import { useEffect, useState } from 'react';

const Autocomplete = ({ options, value, setValue, ...props }) => {
  // const [value, setValue] = useState([]);

  // useEffect(() => {
  //   console.log(value);
  // }, [value]);

  const filter = createFilterOptions();

  return (
    <>
      <MAuto
        options={options}
        // freeSolo
        // value={value}
        onChange={(event, newValue) => {
          if (typeof newValue[newValue.length - 1] === 'string') {
            console.log('first if');
            const newNewVal = newValue.slice();
            const input = newNewVal.pop();
            setValue('test', [
              ...newNewVal,
              {
                email: input,
              }]);
          } else if (newValue[newValue.length - 1]?.inputValue) {
            console.log('second if');
            const newNewVal = newValue.slice();
            const input = newNewVal.pop();

            // Create a new value from the user input
            setValue('test', [
              ...newNewVal,
              {
                email: input.inputValue,
              }]);
            // handleAdd({ title: newValue.inputValue })
          } else {
            console.log(newValue);
            setValue('test', newValue);
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
          value.test.map((option, index) => {
            // console.log(option, 'tagValue')
            return (
              <Chip label={option?.email || option} {...getTagProps({ index })} />
            )
          })
        }
      />
    </>
  );
};
export default Autocomplete;
