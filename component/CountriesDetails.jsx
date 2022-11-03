import React from 'react';
import CountryItems from './CountryItems';

//Se puede usar continent, dentro de continent hay varios elementos.
//se puede apreciar con un console.log(element)
const CountriesDetails = (continent) => {
    console.log(continent)
    if(continent.continent === "Africa"){
        return(
            <>
        {
            continent.filterAfrica.map((country)=> (
                <CountryItems 
                country={country}
                key={country.name.common}/>
            ))
        }
            </>             
                                        )
        }else if(continent.continent === "Antarctica"){
            return(
                <>
            {
                continent.filterAntarctica.map((country)=> (
                    <CountryItems 
                    country={country}
                    key={country.name.common}/>
                ))
            }
                </>             
                                            )
        }else if(continent.continent === "Asia"){
            return(
                <>
            {
                continent.filterAsia.map((country)=> (
                    <CountryItems 
                    country={country}
                    key={country.name.common}/>
                ))
            }
                </>             
                                            )
        }else if(continent.continent === "Europe"){
            return(
                <>
            {
                continent.filterEurope.map((country)=> (
                    <CountryItems 
                    country={country}
                    key={country.name.common}/>
                ))
            }
                </>             
                                            )
        }else if(continent.continent === "North America"){
            return(
                <>
            {
                continent.filterNorthAmerica.map((country)=> (
                    <CountryItems 
                    country={country}
                    key={country.name.common}/>
                ))
            }
                </>             
                                            )
        }else if(continent.continent === "Oceania"){
            return(
                <>
            {
                continent.filterOceania.map((country)=> (
                    <CountryItems 
                    country={country}
                    key={country.name.common}/>
                ))
            }
                </>             
                                            )
        }else if(continent.continent === "South America"){
            return(
                <>
            {
                continent.filterSouthAmerica.map((country)=> (
                    <CountryItems 
                    country={country}
                    key={country.name.common}/>
                ))
            }
                </>             
                                            )
        }else{
            return(
                <>
            {
                continent.countries.map((country)=> (
                    <CountryItems 
                    country={country}
                    key={country.name.common}/>
                ))
            }
                </>             
                                            )
        }
};

export default CountriesDetails;