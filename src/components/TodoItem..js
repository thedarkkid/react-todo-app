import React, {Component} from "react";
import PropTypes from 'prop-types';

export default class TodoItem extends Component {
    style = (todo) => {
        return {
            todoDiv:{
                background: '#f4f4f4',
                padding: '10px',
                borderBottom: '1px #ccc dotted',
                textDecoration: (todo.completed) ? 'line-through': 'none',
                p:{

                }
            }

        };
    };


    render() {
        const todo = this.props.todo;
        const stylesheet = this.style(todo);
        return (
            <div style={stylesheet.todoDiv}>
                <p style={stylesheet.todoDiv.p}>
                    <input type="checkbox" onChange={this.props.markComplete}/>
                    {' '}
                    {todo.title}
                </p>
            </div>
        );
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired
};
