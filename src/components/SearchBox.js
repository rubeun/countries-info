import React, { useState } from 'react';

const SearchBox = ({ handleFilterCountries }) => {
  const [countryNameSearch, setCountryNameSearch] = useState("");

  const handleSearch = (e) => {
    setCountryNameSearch(e.target.value);
    handleFilterCountries(e.target.value);
  }

  return (
    <>
      <input
        type='text'
        name='search-box'
        id='search-box'
        placeholder='Search Country'
        value={countryNameSearch}
        onChange={handleSearch}
      />
    </>
  );

}

export default SearchBox;