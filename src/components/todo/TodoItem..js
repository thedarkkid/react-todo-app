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

                },
                btnStyle: {
                    background: '#ff0000',
                    color: '#fff',
                    border: 'none',
                    padding: '5px 8px',
                    borderRadius: '100%',
                    cursor: 'pointer',
                    float: 'right'
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
                    <input type="checkbox" onChange={this.props.toggleComplete.bind(this, todo.id)} checked={todo.completed}/>
                    {' '}
                    {todo.title}
                    <button onClick={this.props.delete.bind(this, todo.id)} style={stylesheet.todoDiv.btnStyle}>X</button>
                </p>
            </div>
        );
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleComplete: PropTypes.func.isRequired
};
