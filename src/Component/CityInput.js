import React, { Component } from 'react'

class CityInput extends Component {

    constructor(props) {
        super(props);

        this.state = { name: "" }
    }

    handleChange(event) {
        this.setState({ name: event.target.value });
    }

    handleSubmit(event) {
        alert(`City name submited: ${this.state.name}`);
        event.preventDefault();
    }



    render() {
        return (
            <div className="cityInput">
                <form onSubmit={this.handleSubmit.bind(this)}>

                    <p>Your city <input type="text" value={this.state.name} onChange={this.handleChange.bind(this)} />
                        <input type="submit" value="Submit" /></p>
                </form>
            </div>
        );
    }
}


export default CityInput