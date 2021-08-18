import React, { Component } from "react"
import CityInput from "./CityInput"
import CurrentDateTime from "./CurrentDateTime";
import WeatherGraph from "./WeatherGraph";


class MainContainer extends Component {

    render() {
        return (
            <div className="mainContainer">
                <CityInput />
                <WeatherGraph />
                <CurrentDateTime />
            </div>
        );
    }
}

export default MainContainer