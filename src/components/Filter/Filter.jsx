import React from 'react';
import PropTypes from 'prop-types';
import { FindContact, FindContactInput } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <FindContact>
      Find contacts by name
      <FindContactInput
        type="text"
        value={value}
        onChange={onChange}
      ></FindContactInput>
    </FindContact>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};
export default Filter;
