import React, { useState, useEffect } from 'react';
import { searchByRegion } from '../api/countries';
import RegionFilter from '../components/RegionFilter';
import SearchBox from '../components/SearchBox';

const Home = () => {
  const [region, setRegion] = useState("all");
  const [countriesArr, setCountriesArr] = useState([]);  

  const handleChangeRegion = newRegion => {
    console.log("Set New Region:" + newRegion);
    setRegion(newRegion);
  }

  useEffect(() => {
    const search = async () => {
      const countries = await searchByRegion(region);
      setCountriesArr(countries);
    }
    search();
  },[region]);


  return (
    <>
      <SearchBox />
      <RegionFilter handleChangeRegion={handleChangeRegion} />
      <ol>
        {countriesArr.length > 0 ?
          countriesArr.map((country, index) => {
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