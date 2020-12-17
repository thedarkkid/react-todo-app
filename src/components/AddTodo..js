import React, {Component} from "react";
import PropTypes from 'prop-types';

export default class AddTodo extends Component {

    state = {
        title: '',
        price: 0
    };

    onFormChange = (e) => this.setState({[e.target.name]: e.target.value});

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
    };

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input type="text"
                       name="title"
                       placeholder="Add Todo"
                       value={this.state.title}
                       onChange={this.onFormChange}
                       style={{flex: '10', padding: '5px'}}
                />
                <input type="submit" value="Submit" className="btn" style={{flex: '1'}}/>
            </form>
        );
    }
}
