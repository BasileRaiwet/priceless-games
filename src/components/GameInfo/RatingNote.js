import React, {Component} from 'react'
import DealRating from './DealRating';
import Note from './Note';

const theBoxe= {
    width: "300px",
    marginLeft: "100px",
    marginTop: "250px"

}
const boxOne={
    width: "130px",
    height: "140px",
    border: "1px solid yellow",    
    marginTop: "2px",
    marginLeft: "0px"
}
const boxTwo={
    width: "130px",
    height: "140px",
    border: "1px solid yellow",    
    marginTop: "10px",
    marginLeft: "0px"
}

const note={
    width: "70px",
    marginLeft: "30px",
    marginTop: "30px"
}
const deal={
    marginLeft: "20px",
    marginTop: "5px"
}
const notep={
 marginLeft: "45px",
 marginTop: "5px"
}
const RatingNote = (props) => {

        return(

             <div style={theBoxe}>
                    
                    <div style={boxOne}>
                    <img src="https://thumbs.dreamstime.com/z/ic-ne-de-signe-de-manette-symbole-de-jeu-vid%C3%A9o-79712581.jpg" alt="note" style={note} />
                     <p style={deal}>Deal rating</p>
                    </div>
                     

                    <div style={boxTwo}>

                  <img src="https://thumbs.dreamstime.com/z/ic-ne-de-signe-de-manette-symbole-de-jeu-vid%C3%A9o-79712581.jpg" alt="note" style={note} />
                   <p style={notep}>Note</p>
                    </div>
                  <DealRating />
                  <Note />
             </div>  
        );
    }

    
    export default RatingNote