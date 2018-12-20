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

    getWeather = async e => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;

        // console.log("country: ", country);

        const api_call = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`
        );

        const data = await api_call.json();
        // console.log("app.js data.weather[0].description ", data.weather[0]);

        console.log("data from api ", data);
        // console.log("data.sys.country ", data.sys.country);

        try {
            if (data.name && data.sys.country) {
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

        //
        if (!this.state.error) {
            if (
                data.weather[0].icon === "01d" ||
                data.weather[0].icon === "01n"
            ) {
                document.getElementById("app").style.backgroundImage =
                    "url('/clear_sky.jpg')";
                document
                    .getElementById("app")
                    .querySelector("#content")
                    .classList.remove("rain");
                document
                    .getElementById("app")
                    .querySelector("#content")
                    .classList.remove("snow");
                document
                    .getElementById("app")
                    .querySelector("#content")
                    .classList.remove("cloud");
                document
                    .getElementById("app")
                    .querySelector("#content")
                    .classList.add("clear_sky");
            } else if (
                data.weather[0].icon === "02d" ||
                data.weather[0].icon === "02n"
            ) {
                document.getElementById("app").style.backgroundImage =
                    "url('/few_clouds.jpg')";

                document
                    .getElementById("app")
                    .querySelector("#content")
                    .classList.remove("rain");
                document
                    .getElementById("app")
                    .querySelector("#content")
                    .classList.remove("snow");
                document
                    .getElementById("app")
                    .querySelector("#content")
                    .classList.remove("clear_sky");

                document
                    .getElementById("app")
                    .querySelector("#content")
                    .classList.add("cloud");
            } else if (
                data.weather[0].icon === "03d" ||
                data.weather[0].icon === "03n"
            ) {
                document.getElementById("app").style.backgroundImage =
                    "url('/scattered_clouds.jpg')";

                document
                    .getElementById("app")
                    .querySelector("#content")
                    .classList.remove("rain");
                document
                    .getElementById("app")
                    .querySelector("#content")
                    .classList.remove("snow");
                document
                    .getElementById("app")
                    .querySelector("#content")
                    .classList.remove("clear_sky");

                document
                    .getElementById("app")
                    .querySelector("#content")
                    .classList.add("cloud");
            } else if (
                data.weather[0].icon === "04d" ||
                data.weather[0].icon === "04n"
            ) {
                document.getElementById("app").style.backgroundImage =
                    "url('/broken_clouds.jpg')";

                document
                    .getElementById("app")
                    .querySelector("#content")
                    .classList.remove("rain");
                document
                    .getElementById("app")
                    .querySelector("#content")
                    .classList.remove("snow");
                document
                    .getElementById("app")
                    .querySelector("#content")
                    .classList.remove("clear_sky");

                document
                    .getElementById("app")
                    .querySelector("#content")
                    .classList.add("cloud");
            } else if (
                data.weather[0].icon === "09d" ||
                data.weather[0].icon === "09n"
            ) {
                document.getElementById("app").style.backgroundImage =
                    "url('/beach-clouds-dark.jpg')";

                document
                    .getElementById("app")
                    .querySelector("#content")
                    .classList.remove("cloud");
                document
                    .getElementById("app")
                    .querySelector("#content")
                    .classList.remove("snow");
                document
                    .getElementById("app")
                    .querySelector("#content")
                    .classList.remove("clear_sky");

                document
                    .getElementById("app")
                    .querySelector("#content")
                    .classList.add("rain");
            } else if (
                data.weather[0].icon === "10d" ||
                data.weather[0].icon === "10n"
            ) {
                document.getElementById("app").style.backgroundImage =
                    "url('/beach-clouds-dark.jpg')";

                document
                    .getElementById("app")
                    .querySelector("#content")
                    .classList.remove("cloud");
                document
                    .getElementById("app")
                    .querySelector("#content")
                    .classList.remove("snow");
                document
                    .getElementById("app")
                    .querySelector("#content")
                    .classList.remove("clear_sky");

                document
                    .getElementById("app")
                    .querySelector("#content")
                    .classList.add("rain");
            } else if (
                data.weather[0].icon === "11d" ||
                data.weather[0].icon === "11n"
            ) {
                document.getElementById("app").style.backgroundImage =
                    "url('/thunderstorm.jpg')";

                document
                    .getElementById("app")
                    .querySelector("#content")
                    .classList.remove("cloud");
                document
                    .getElementById("app")
                    .querySelector("#content")
                    .classList.remove("snow");
                document
                    .getElementById("app")
                    .querySelector("#content")
                    .classList.remove("clear_sky");

                document
                    .getElementById("app")
                    .querySelector("#content")
                    .classList.add("rain");
            } else if (
                data.weather[0].icon === "13d" ||
                data.weather[0].icon === "13n"
            ) {
                document.getElementById("app").style.backgroundImage =
                    "url('/snow.jpg')";

                document
                    .getElementById("app")
                    .querySelector("#content")
                    .classList.remove("cloud");
                document
                    .getElementById("app")
                    .querySelector("#content")
                    .classList.remove("rain");
                document
                    .getElementById("app")
                    .querySelector("#content")
                    .classList.remove("clear_sky");

                document
                    .getElementById("app")
                    .querySelector("#content")
                    .classList.add("snow");
            } else if (
                data.weather[0].icon === "50d" ||
                data.weather[0].icon === "50n"
            ) {
                document.getElementById("app").style.backgroundImage =
                    "url('/mist.jpg')";

                document
                    .getElementById("app")
                    .querySelector("#content")
                    .classList.remove("rain");
                document
                    .getElementById("app")
                    .querySelector("#content")
                    .classList.remove("snow");
                document
                    .getElementById("app")
                    .querySelector("#content")
                    .classList.remove("clear_sky");

                document
                    .getElementById("app")
                    .querySelector("#content")
                    .classList.add("cloud");
            }
        }
        //     }
    };

    render() {
        return (
            <div id="app" style={this.divStyle}>
                <div id="content" />
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
