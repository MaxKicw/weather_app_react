import React, { Component } from 'react';
import './App.css';
import Card from './components/card';
import Text from './components/text';

const API_KEY = '3075ade1e14052f065f6aaf86bb84876';

class App extends Component {

  state = {
    temperature: undefined,
    city: undefined,
    humidity: undefined,
    discription: undefined,
    error: undefined
  }

  clickHandler = () => {

  }


  getWeather = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + API_KEY + '&units=metric');
    const data = await api_call.json();
    console.log(data);
    if (city && data.cod != "404"){
       this.setState({ temperature: data.main.temp, city: data.name, humidity: data.main.humidity, discription: data.weather[0].description, error: undefined });
    }else if(data.cod === "404"){
      this.setState({ temperature: undefined, city: undefined, humidity: undefined, discription: undefined, error: "Bitte geben Sie eine korrekt geschriebene Stadt ein!" });
    }else{
      this.setState({ temperature: undefined, city: undefined, humidity: undefined, discription: undefined, error: "Bitte geben Sie eine Stadt ein!" });
    }
  }

  render() {
    return (
      <div>
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-xs-5">
                <Text getWeather={this.getWeather} />
              </div>
              <div className="col-xs-7">
                <Card temperature={this.state.temperature}
                  city={this.state.city}
                  humidity={this.state.humidity}
                  discription={this.state.discription}
                  error={this.state.error} />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
