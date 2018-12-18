var axios = require("axios");

var OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?";
const secrets = require("./secrets.json");

const API_KEY = secrets.KEY;

module.exports = {
    getTemp: function(Lat, Long) {
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&lat=${Lat}&lon=${Long}&APPID=${API_KEY}&units=metric`;
        console.log("Request Url: ", requestUrl);
        return axios.get(requestUrl).then(
            function(res) {
                console.log("This is res", res);
                if (res.data.cod && res.data.message) {
                    throw new Error(res.data.message);
                } else {
                    return res.data;
                }
            },
            function(res) {
                throw new Error(res.data.message);
            }
        );
    }
};
