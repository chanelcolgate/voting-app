import React from 'react';

export default class Five extends React.Component {
    state = { 
        name: '',
        names: [] 
    };

    onFormSubmit = (event) => {
        const names = [ ...this.state.names, this.state.name ];
        this.setState({ names: names, name: '' });
        event.preventDefault();
    };

    onNameChange = (event) => {
        this.setState({ name: event.target.value });
    };

    render() {
        return (
            <div>
                <h1>Sign Up Sheet</h1>
                <form onSubmit={this.onFormSubmit}>
                    <input 
                        placeholder='Name'
                        value={this.state.name}
                        onChange={this.onNameChange}
                    />
                    <input 
                        type='submit'
                    />
                </form>
                <div>
                    <h3>Names</h3>
                    <ul>
                        { this.state.names.map((name, i) => <li key={i}>{name}</li>) }
                    </ul>
                </div>
            </div>
        );
    }
}