import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

import LatLong from "./components/LatLong";
import DisplayTemp from "./components/DisplayTemp";
import OpenWeatherAPI from "./components/OpenWeatherAPI";

const secrets = require("./secrets.json");

const API_KEY = secrets.KEY;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Lat: "",
            Long: "",
            Temp: "Loading"
        };
        this.onPass = this.onPass.bind(this);
    }
    onPass(Lat, Long) {
        var that = this;
        OpenWeatherAPI.getTemp(Lat, Long).then(
            function(data) {
                that.setState({
                    Lat: Lat,
                    Long: Long,
                    Temp: data.main.temp,
                    Name: data.name,
                    Humidity: data.main.humidity
                });
            },
            function(errorMessage) {
                alert(errorMessage);
            }
        );
    }

    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined,
        Lat: "",
        Long: "",
        Humidity: "",
        Temp: "Loading"
    };

    getWeather = async e => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;

        const api_call = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`
        );
        const data = await api_call.json();
        console.log(
            "app.js data.weather[0].description ",
            data.weather[0].description
        );

        try {
            if (city && country) {
                this.setState({
                    temperature: data.main.temp,
                    city: data.name,
                    country: data.sys.country,
                    humidity: data.main.humidity,
                    description: data.weather[0].description,
                    error: ""
                });
            } else {
                this.setState({
                    temperature: undefined,
                    city: undefined,
                    country: undefined,
                    humidity: undefined,
                    description: undefined,
                    error: "Please enter the values."
                });
            }
        } catch (e) {
            console.log(e);
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                error: "Incorrect city or country name"
            });
        }
    };

    render() {
        return (
            <div>
                <LatLong onPass={this.onPass} />
                <DisplayTemp
                    Temp={this.state.Temp}
                    Name={this.state.Name}
                    Lat={this.state.Lat}
                    Long={this.state.Long}
                    Humidity={this.state.Humidity}
                />
                <Titles />
                <Form getWeather={this.getWeather} />
                <Weather
                    temperature={this.state.temperature}
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    error={this.state.error}
                />
            </div>
        );
    }
}

export default App;
