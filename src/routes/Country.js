import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { countryInfoByName } from '../api/countries';

const Country = () => {
  const { countryName } = useParams();
  const [countryInfo, setCountryInfo] = useState(null);

  useEffect(() => {
    const search = async () => {
      const country = await countryInfoByName(countryName);
      setCountryInfo(country[0]);
    }
    search();
  },[countryName]);

  return (
    <>
      <h5>Country Details for {countryName}</h5>
      {countryInfo !== null 
        ?
          <img src={countryInfo.flags.png} alt={countryInfo.flags.alt} />
        : 
          <p>Loading...</p>
      }      
    </>
  );
}

export default Country;