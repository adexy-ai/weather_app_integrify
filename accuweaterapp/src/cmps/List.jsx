import React from 'react'
import { Preview } from './Preview'

export function List({ weather, cityKey, toggleFavorite, favorites }) {

    const getStyle = () => {
        const city = favorites.findIndex(fav => fav.key === cityKey);
        if (city !== -1) return {fontWeight: '700'}
    }
    console.log("Getting weather info index",weather.DailyForecasts);

    return (
        <div className="list-container">
            <i className="far fa-heart" style={getStyle()} onClick={(ev) => toggleFavorite(weather, weather.cityName, cityKey)}></i>
            <h1>{weather.Headline.Text} at <span className="city">{weather.cityName}</span></h1>
            <section className="weather-list">
                {<Preview {...weather.DailyForecasts[0]}/>}
                {/* {weather.DailyForecasts.map((day, idx) =>
                    <Preview key={idx} day={day} />)} */}
            </section>
        </div>
    )
}
