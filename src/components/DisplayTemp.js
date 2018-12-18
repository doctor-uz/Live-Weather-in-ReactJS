import React, { Component } from "react";

class DisplayTemp extends Component {
    render() {
        var { Temp, Name, Lat, Long, Humidity } = this.props;
        // console.log("Humiditi: ", this.props);
        if (Temp === "Loading") {
            return <div className="loading">Loading Your Local Weather...</div>;
        } else {
            var Lat = Math.round(Lat);
            var Long = Math.round(Long);
            return (
                <div className="display-weather">
                    <p>
                        It is {Temp} &#8451; at <br />
                        <span id="cityName">{Name}</span>
                    </p>
                    Latitude: {Lat} and Longitude: {Long}
                    <p>Humidity: {Humidity}</p>
                </div>
            );
        }
    }
}
export default DisplayTemp;
