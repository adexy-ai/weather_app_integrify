import React from 'react'
import {Preview} from '../cmps/Preview'

export function Favorite({ favorite, removeFavorite }) {
    return (
        <div className="favorite-list center flex column justify-center align-center main-container full">
            <i onClick={(ev) => removeFavorite(favorite.key)} className="fas fa-trash"></i>
            <h1>{favorite.cityName}</h1>
            <div className="favorite-preview flex">
            {favorite.DailyForecasts.map((day, idx) =>
                <Preview key={idx} day={day} />)}
            </div>
        </div>
    )
}
