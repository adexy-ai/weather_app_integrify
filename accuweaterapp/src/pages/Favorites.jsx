import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadFavorites,removeFavorite } from '../store/actions/weatherActions'
import {Favorite} from '../cmps/Favorite'

export function _Favorites({ loadFavorites, favorites,removeFavorite }) {
    
    useEffect(() => {
        loadFavorites()
    }, [loadFavorites])


    return (
        <div className="favorite-container">
            {favorites.length ? favorites.map(favorite =>
                <Favorite key={favorite.key} favorite={favorite} removeFavorite={removeFavorite} />)
                :
                <h1 className="center">No Favorites yet...</h1>
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        favorites: state.weatherReducer.favorites
    }
}
const mapDispatchToProps = {
    loadFavorites,
    removeFavorite

}


export const Favorites = connect(mapStateToProps, mapDispatchToProps)(_Favorites)