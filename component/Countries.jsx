import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CountriesDetails from './CountriesDetails';
import CountryItems from './CountryItems';

const Countries = () => {

    const [countries, setCountries] = useState([]); //Cuando se recorre un arreglo se usa el array
    //En ese caso como map se usa con arreglo se tuvo que poner un [] en el estado.
    const [continent, setContinent] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() =>{
        axios.get('https://restcountries.com/v3.1/all')
        .then((res) => {
            setIsLoading(false);
            setCountries(res.data);
        })
    },[])
    const sortedCountries = countries.sort((a, b) => a.name.common.localeCompare(b.name.common))
    const filterAfrica = sortedCountries.filter((country) => country.continents[0] === "Africa");
    const filterAntarctica = sortedCountries.filter((country) => country.continents[0] === "Antarctica");
    const filterAsia = sortedCountries.filter((country) => country.continents[0] === "Asia");
    const filterEurope = sortedCountries.filter((country) => country.continents[0] === "Europe");
    const filterNorthAmerica = sortedCountries.filter((country) => country.continents[0] === "North America");
    const filterSouthAmerica = sortedCountries.filter((country) => country.continents[0] === "South America");
    const filterOceania = sortedCountries.filter((country) => country.continents[0] === "Oceania");
    return (
        <div>
            <div className="btns">
                <button onClick={() => setContinent("Africa")}>Africa</button>
                <button onClick={() => setContinent("Antarctica")}>Antarctic</button>
                <button onClick={() => setContinent("Asia")}>Asia</button>
                <button onClick={() => setContinent("Europe")}>Europe</button>
                <button onClick={() => setContinent("North America")}>North America</button>
                <button onClick={() => setContinent("South America")}>South America</button>
                <button onClick={() => setContinent("Oceania")}>Oceania</button>
                <button onClick={() => setContinent("All")}>All Continent</button>
            </div>
            { isLoading ? ( 
            <div className='loading'><h1>Loading...</h1></div>
            ) : (
            <div className='CountriesContent'>
                <CountriesDetails  
                continent={continent} 
                countries={countries}
                filterAfrica={filterAfrica}
                filterAntarctica={filterAntarctica}
                filterAsia={filterAsia}
                filterEurope={filterEurope}
                filterNorthAmerica={filterNorthAmerica}
                filterSouthAmerica={filterSouthAmerica}
                filterOceania={filterOceania}
                />
            </div>
            )}
        </div>
    );
};

export default Countries;