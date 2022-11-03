import React from 'react';

const CountryItems = ({country}) => {
    console.log(country);
    return (
        <div className='countries'>
            <div style={{marginBottom:"5px"}}><b>{country.altSpellings[1] === undefined ? country.name.official : country.altSpellings[1]}</b></div>
            <img src={country.flags.svg}/>
            <div className='margin'><b>Country: </b>{country.name.common}</div>
            <div className='margin'><b>Capital: </b>{country.capital?.[0]}</div>
            <div className='margin'><b>Continent: </b>{country.continents[0]}</div>
        </div>
    );
};

export default CountryItems;