import React, { Component } from "react";

class DisplayTemp extends Component {
    render() {
        var { Temp, Name, Lat, Long, Humidity } = this.props;
        // console.log("Humiditi: ", this.props);
        if (Temp === "Loading") {
            return (
                <div className="loading">
                    <img id="loading" src="./loading.gif" />
                    <p>Loading Your Local Weather...</p>
                </div>
            );
        } else {
            var Lat = Math.round(Lat);
            var Long = Math.round(Long);
            return (
                <div className="display-weather">
                    <p className="humidity">
                        It is <span id="cityName"> {Temp} &#8451; </span> at{" "}
                        <br />
                        <span id="cityName">{Name}</span>
                    </p>
                    <p className="humidity">
                        Latitude: {Lat} and Longitude: {Long}
                    </p>
                    <p className="humidity">Humidity: {Humidity}</p>
                </div>
            );
        }
    }
}
export default DisplayTemp;
