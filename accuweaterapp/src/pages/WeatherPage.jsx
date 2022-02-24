import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import {Search} from '../cmps/Search'
import {List} from '../cmps/List'
import { loadWeather,addFavorite, removeFavorite, loadFavorites} from '../store/actions/weatherActions'
import { weatherService } from '../services/weatherService';




function _WeatherPage({loadWeather,weather,addFavorite,favorites,removeFavorite,loadFavorites}){


    useEffect(() => {
        const isStorage = weatherService.isStorage()
        if (!isStorage) {
        navigator.geolocation.getCurrentPosition(setUserLocation)
        } else {
            loadWeather();
        }

        loadFavorites();
    }, [loadFavorites,loadWeather])
    
    async function setUserLocation(loc) {
        const {latitude,longitude} = loc.coords
        const city = await  weatherService.getCityByCoords(latitude,longitude)
        getWeather(city.data.ParentCity.Key,city.data.ParentCity.LocalizedName)
    }



    async function getWeather(cityKey,cityName) {
        await loadWeather(cityKey,cityName);
    }

    function setToggleFavorite(favorite,name,key) {
        const currIdxFav = favorites.findIndex(fav => fav.key === key);
        if (currIdxFav === -1) addFavorite(favorite,name,key)
        else removeFavorite(key);

    }


        return (
            <React.Fragment>
                <Search getWeather={getWeather}/>
                {weather && Object.keys(weather).length>0 && <List favorites={favorites} cityKey={weather.key} toggleFavorite={setToggleFavorite} weather={weather} cityName={weather.cityName}/>}
            </React.Fragment>
        
        )
    }

const mapStateToProps = state => {
    return {
        weather: state.weatherReducer.weather,
        favorites: state.weatherReducer.favorites
    }
}
const mapDispatchToProps = {
    loadWeather,
    addFavorite,
    loadFavorites,
    removeFavorite

}


export const WeatherPage = connect(mapStateToProps, mapDispatchToProps)(_WeatherPage)