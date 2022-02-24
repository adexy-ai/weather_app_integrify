import axios from 'axios'
import {storageService} from './storageService'


export const weatherService = {
    getWeather,
    getAutoComplete,
    getCityByCoords,
    loadFavorites,
    addFavorite,
    removeFavorite,
    isStorage
}


const KEY_WEATHER = 'weather';
const KEY_FAVORITES = 'favorites';
let gWeather;
let gFavorites = [];

export async function getCityByCoords(lat, lng) {
    try {
        const city = axios.get(`https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=z0766gk3hrdKoJ0iTWMryRUvQAuQYgkj&q=${lat},${lng}`)
        return city;
    } catch (err) {
        console.log(err)
        throw err
    }
}

export async function getWeather(locationId,cityName) {
    if (!locationId) {
        gWeather  = storageService.loadFromStorage(KEY_WEATHER);
        if (gWeather) return gWeather;
    } else {
    var prmRes = axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationId}?apikey=s9LG1iE1JYDKGH9A5AeujArIo8xOyqjR&language=en-us&details=false&units=metric`)
    return prmRes.then(res => {
        res.data.cityName = cityName;
        res.data.key = locationId;
        storageService.saveToStorage(KEY_WEATHER,res.data)
        return res.data
    })
}
}



export async function getAutoComplete(keyword) {
    var prmRes = axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=s9LG1iE1JYDKGH9A5AeujArIo8xOyqjR&q=${keyword}&language=en-us`)
    return prmRes.then(res => {
        return res.data
    })
}

function addFavorite(favorite,cityName,cityKey){
    favorite.cityName = cityName;
    favorite.key = cityKey;
    gFavorites = [...gFavorites,favorite]
    storageService.saveToStorage(KEY_FAVORITES, gFavorites)
    
    return favorite;
}
function removeFavorite(favoriteKey){
    gFavorites= gFavorites.filter(favorite=> favorite.key!==favoriteKey)
    storageService.saveToStorage(KEY_FAVORITES, gFavorites)
    return favoriteKey;
}
function loadFavorites(){
    gFavorites= storageService.loadFromStorage(KEY_FAVORITES)
    if(!gFavorites || !gFavorites.length) gFavorites=[];
    return gFavorites
}


function isStorage() {
    if (storageService.loadFromStorage(KEY_WEATHER)) return true;
    else return false;
}

