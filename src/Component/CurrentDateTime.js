import React, { Component } from 'react'

class CurrentDateTime extends Component {

    constructor(props) {
        super(props);

        this.state = { date: new Date() }
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    formatDateTime() {

        let tempDateTime = this.state.date;
        let tempDate = tempDateTime.getFullYear() + '-' + (tempDateTime.getMonth() + 1) + '-' + tempDateTime.getDate();
        let tempTime = tempDateTime.getHours() + ":" + tempDateTime.getMinutes() + ":" + tempDateTime.getSeconds();
        let dateTime = tempTime + ' ' + tempDate;
        return dateTime;
    }

    render() {
        return (
            <div className="currenDateTimeText">
                <p>{this.state.date.getHours() + ":" + this.state.date.getMinutes() + ":" + this.state.date.getSeconds() + " " +
                    this.state.date.getFullYear() + '-' + (this.state.date.getMonth() + 1) + '-' + this.state.date.getDate()}</p>
            </div>
        );
    }
}

export default CurrentDateTime