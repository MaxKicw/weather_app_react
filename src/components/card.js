import React, { Component } from 'react';

const Card = props => (
        <div className="card">
            {props.city && <p>Stadt: {props.city}</p>}
            {props.humidity && <p>Luftfeuchtigkeit: {props.humidity}</p>}
            {props.discription && <p>Beschreibung: {props.discription}</p>} 
            {props.error && <p>Fehler: {props.error}</p>}   
        </div>
    );

export default Card;



//Lange aber auführliche Komponente
/*class Card extends React.Component{

    render(){
        return  <div className="card">
                    {this.props.city && <p>Stadt: {this.props.city}</p>}
                    {this.props.humidity && <p>Luftfeuchtigkeit: {this.props.humidity}</p>}
                    {this.props.discription && <p>Beschreibung: {this.props.discription}</p>} 
                    {this.props.error && <p>Fehler: {this.props.error}</p>}   
                </div>
    }
}*/
