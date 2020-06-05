import React, { Component } from 'react';

class EventPractice extends Component {
    state = {
        username: '',
        message: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleClick = () => {
        alert(`${this.state.message}, ${this.state.username}`);
        this.setState({
            username: '',
            message: '',
        });
    }

    render() {
        return (
            <div>
                <h1>Practice event.</h1>
                <input
                    type="text"
                    name="username"
                    placeholder="User name."
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="message"
                    placeholder="Input message."
                    onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>OK</button>
            </div>
        );
    }
}

export default EventPractice;
