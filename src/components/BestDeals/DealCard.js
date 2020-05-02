import React from 'react'
import { Link } from 'react-router-dom'

const DealCard = ({gameID, thumb, title, salePrice, dealID}) => {
    const thumbnail = {backgroundImage: `url(${thumb})`}
    return(
        <a 
            className="game-card" 
            href={`https://www.cheapshark.com/redirect?dealID=${dealID}`}
            target='_blank'>
            <span className='card-thumb' style={thumbnail}></span>
            <div className="game-info-container">
                <div className="game-info">
                    <p>{title}</p>
                </div>
                <div className="game-price">
                    <p>{salePrice} $</p>
                </div>
            </div>
        </a>
    )
}

export default DealCard;