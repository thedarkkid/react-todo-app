import React, {Fragment, useEffect, useState} from 'react'
import TodoItem from "./TodoItem.";
import Paginator from "../../common/Paginator";

let paginator = null;
export default function Todos(props) {
    const [todos, setTodos] = useState(props.todos);

    useEffect( () => {
        if(props.todos && props.todos.length > 0){
            if(props.todos.length !== todos.length){
                paginator = new Paginator(props.todos, 2);
                setTodos(paginator.Current);
            }
        }
    },  [props]);


    return (
        <Fragment>
            {
                todos.map( (todo) => (
                    <TodoItem key={todo.id} todo={todo} toggleComplete={props.toggleComplete} delete={props.deleteTodo}/>
                ))
            }
            <Fragment>
                <button onClick={() => setTodos(paginator.Previous)}>Previous</button>
                <button onClick={() => setTodos(paginator.Next)}>Next</button>
            </Fragment>
        </Fragment>
    );
}
