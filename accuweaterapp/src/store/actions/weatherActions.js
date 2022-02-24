import { weatherService } from '../../services/weatherService'


export function loadWeather(cityKey = '',cityName='') {
    return async dispatch => {
        try {
            const weather = await weatherService.getWeather(cityKey,cityName);
            dispatch({ type: 'SET_WEATHER', weather })
        } catch (err) {
            console.log('weatherActions: couldn\'t load weather');
            throw err
        }
    }
}

export function addFavorite(weather,cityName,cityKey) {
    return async dispatch => {
        try {
            console.log(weather)
            const favorite = weatherService.addFavorite(weather,cityName,cityKey)
            dispatch({ type: 'ADD_FAVORITE', favorite })
        } catch (err) {
            console.log('weatherActions: couldn\'t add favorite');
            throw err;
        }
    }
}

export function removeFavorite(key) {
    return async dispatch => {
        try {
            const favoriteKey = weatherService.removeFavorite(key)
            dispatch({ type: 'REMOVE_FAVORITE', favoriteKey })
        } catch (err) {
            console.log('weatherActions: couldn\'t remove favorite');
            throw err;
        }
    }
}

export function loadFavorites() {
    return async dispatch => {
        try {
            const favorites = await weatherService.loadFavorites()
            dispatch({ type: 'SET_FAVORITES', favorites })
        } catch (err) {
            console.log('weatherActions: couldn\'t load favorites');
            throw err;
        }
    }
}