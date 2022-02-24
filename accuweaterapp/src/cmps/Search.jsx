import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import { useForm } from '../services/customHooks'
import { weatherService } from '../services/weatherService'

export function Search({getWeather}) {
    const [searchBy, handleChange] = useForm({ location: '' })
    const [options, setOptions] = useState([]);


    useEffect(() => {
        getSearchedLocations()
    }, [searchBy]);

    async function getSearchedLocations() {
        if (!searchBy.location) setOptions([]);
        else {
            const options = await weatherService.getAutoComplete(searchBy.location);
            setOptions(options);
        }
    }

    function onGetWeather(cityKey,cityName) {
        getWeather(cityKey,cityName);
        setOptions([]);
        handleChange();
    }

    const { location } = searchBy;
    return (
        <div className="search-container flex justify-center align-center center">
            <form autoComplete="off">
                <TextField value={location} label="Search for city..." name="location" onChange={handleChange} />
            </form>
            <ul>
                {options.length>0 && options.slice(0,3).map(option => <li key={option.Key}>{option.LocalizedName},{option.Country.LocalizedName} <i onClick={(ev) => onGetWeather(option.Key,option.LocalizedName)}className="fas fa-plus-circle"></i></li>)}
            </ul>
        </div>
    )
}
