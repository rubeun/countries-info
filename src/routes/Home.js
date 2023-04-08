import React, { useState, useEffect } from 'react';
import { searchByRegion } from '../api/countries';
import RegionFilter from '../components/RegionFilter';
import SearchBox from '../components/SearchBox';

const Home = () => {
  const [region, setRegion] = useState("all");
  const [countriesArr, setCountriesArr] = useState([]);  
  const [filteredCountries, setFilteredCountries] = useState([]);

  const handleChangeRegion = newRegion => {
    setRegion(newRegion);
  }

  const handleFilterCountries = countryNameSearch => {
    let filteredCountriesArr = countriesArr.filter(country => country.name.common.toLowerCase().includes(countryNameSearch.toLowerCase()))
    setFilteredCountries(filteredCountriesArr);
  }

  useEffect(() => {
    const search = async () => {
      const countries = await searchByRegion(region);
      setCountriesArr(countries);
      setFilteredCountries(countries);
    }
    search();
  },[region]);


  return (
    <>
      <SearchBox handleFilterCountries={handleFilterCountries} />
      <RegionFilter handleChangeRegion={handleChangeRegion} />
      <ol>
        {filteredCountries.length > 0 ?
          filteredCountries.map((country, index) => {
            return (<li key={index}><a href={`/country/${country.name.common}`}>{country.name.common}</a></li>)
          })
          :
          <li>Loading...</li>
        }
      </ol>
    </>
  );
}

export default Home;