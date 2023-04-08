import React from 'react';

const RegionFilter = ({ handleChangeRegion }) => {
  
  const changeRegion = (e) => {
    handleChangeRegion(e.target.value)
  }

  return (
    <select
      name='region-filter'
      id='region-filter'
      onChange={changeRegion}
    >
      <option value='all'>Filter By Region</option>
      <option value='africa'>Africa</option>
      <option value='america'>America</option>
      <option value='asia'>Asia</option>
      <option value='europe'>Europe</option>
      <option value='oceania'>Oceania</option>
    </select>
  );
}

export default RegionFilter;