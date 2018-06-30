import React, { Component } from 'react';

const Text = props => (
        <form className="box" onSubmit={props.getWeather}>
            <p>Willkommen bei dieser einfachen Wetterapp. <br></br><br></br>Diese Anwendung basiert auf React und erfüllte den Zweck, eine API abzurufen, um dir das Wetter in deiner Stadt anzeigen zu lassen!</p>
            <br></br>
            <input type="text" name="city"/>
            <button>Zeig mir das Wetter</button>
        </form>
    );

export default Text;