import React, { Component } from 'react';
import Image from './Image';
import PriceList from './PricesList/PriceList';
import RatingNotes from './RatingNotes';
import './GameInfo.css'

class GameInfo extends Component {
   render() {
      const { deals, thumb } = this.props.location.state.game
      const { title } = this.props.location.state.game.info
      const { addFav } = this.props
      const {dealID, price} = deals[0]
      const { gameID } = this.props.match.params


    return(
        
            <div className="game-main"> 
                <Image addFav={addFav} gameID={gameID} price={price} imgurl={thumb} title={title} />
                <div className="game-main-deals">
                    <RatingNotes dealID={dealID} />
                    <PriceList deals={deals} /> 
                </div>
             </div>
        );
    }
}

export default GameInfo