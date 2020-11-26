import React, { Component } from 'react';

class AddTask extends Component {
    state = {
        title: '',
        urgency: '',
        status: '🔲',
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.addTask(this.state)
        this.setState({ title: '', urgency: '' })

    }

    handleChange = (event) => {
        event.preventDefault();
        this.setState({ [event.target.id]: event.target.value })
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Title:
                    <input type='text' name='title' id='title' value={this.state.title}
                        onChange={this.handleChange} />
                </label>
                <label>
                    Urgency:
                    <input type='text' name='urgency' id='urgency' value={this.state.urgency}
                        onChange={this.handleChange} />
                </label>
                <button type='submit'>Add</button>

            </form>
        );
    }
}

export default AddTask;