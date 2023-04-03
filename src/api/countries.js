/**
 * REST Countries API calls
 * https://restcountries.com/#endpoints-all
 * https://github.com/apilayer/restcountries/
 */
const apiURL = 'https://restcountries.com/v3.1';

const apiCall = async queryURL => {
  try {
    const response = await fetch(queryURL);
    if (response.status === 404) {
      throw new Error('Page not found');
    } else if (response.status === 500) {
      throw new Error('Server error');
    } else if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

// Returns an array of countries from either all regions or specific regions, defaults to all regions
export const searchByRegion = async (
  region = 'all'
) => {
  let queryURL = '';
  if (region === 'all') {
    queryURL = `${apiURL}/all?fields=name,population,region,capital,flags`;
  } else  {
    queryURL = `${apiURL}/region/${region}?fields=name,population,region,capital,flags`;
  }
  return apiCall(queryURL);
};

// Returns an array of country names suggestions based on partial or complete country name
export const searchCountrySuggestions = async (
  countryNameSearch
) => {
  const queryURL = `${apiURL}/name/${countryNameSearch}?fields=name`;
  return apiCall(queryURL);
};

// Returns more detailed info on a single country based on either country name or country code, if neither provided, returns false
export const countryInfo = async (
  countryName,
  countryCode
) => {
  let queryURL = "";
  if (typeof countryName !== "undefined") {
    queryURL = `${apiURL}/name/${countryName}?fields=name,population,region,subregion,capital,currencies,languages,flags,tld`;
  } else if (typeof countryCode !== "undefined") {
    queryURL = `${apiURL}/alpha/${countryCode}?fields=name,population,region,subregion,capital,currencies,languages,flags,tld`;
  } else {
    return false;
  }
  return apiCall(queryURL);
};