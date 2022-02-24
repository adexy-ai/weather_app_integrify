const initialState = {
    weather: [],
    favorites: []
}

export function weatherReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_WEATHER':
            return {
                ...state,
                weather: action.weather
            }
        case 'ADD_FAVORITE':
            return {
                ...state,
                favorites: [...state.favorites, action.favorite]
            }
        case 'REMOVE_FAVORITE':
            return {
                ...state,
                favorites: state.favorites.filter(favorite => favorite.key !== action.favoriteKey)
            }
        case 'SET_FAVORITES':
            return {
                ...state,
                favorites: action.favorites
            }
    
        default:
            return state
    }
}