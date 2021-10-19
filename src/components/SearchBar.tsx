import React, { ChangeEvent } from 'react';
import { Categories } from '../api';

interface ISearchBarProps {
  category: Categories;
  value: string;
  setValue: (value: string) => void;
  onSubmit: () => void;

}

const SearchBar = (props: ISearchBarProps) => (
  <div>
    <input
      type="text"
      placeholder={`Search ${props.category}...`}
      value={props.value}
      onChange={(event) => {
        props.setValue(event.target.value);
      }}
      onKeyUp={(event) => {
        if (event.key === 'Enter') {
          props.onSubmit();
        }
      }}
    />
  </div>
);

export default SearchBar;
