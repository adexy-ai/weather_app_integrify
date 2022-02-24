import React from 'react'
import moment from 'moment'


export function Preview(props) {
  

    const getImg = (iconNum) => {
            if (iconNum < 10) iconNum = '0' + iconNum
            return `https://developer.accuweather.com/sites/default/files/${iconNum}-s.png`
        }
        
        console.log("I am here",props)
    return (
        <div className="preview-container flex column">
            <div className="img-container">
            <img src={getImg(props.Day.Icon)} alt="" />
            </div>
            <div className="info-container">
            <h3>{moment(new Date(props.Date)).format('L')}</h3>
            <p className="description">{props.Day.IconPhrase}</p>
            <p>{Math.round((props.Temperature.Minimum.Value-32)*0.5556)}°</p>
            <a href={props.Link} target="_blank" rel="noopener noreferrer"> <i className="fas fa-info-circle"></i> Read More</a>
            </div>
        </div>
    )
}

