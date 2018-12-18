import React from "react";

const Form = props => (
    <div className="display">
        <form onSubmit={props.getWeather}>
            <input type="text" name="city" placeholder="City ..." />
            <br />

            <input type="text" name="country" placeholder="Country ..." />
            <br />
            <button>Get Weather</button>
        </form>
    </div>
);

export default Form;
