import React from 'react';
import './App.css';
import Todo from './Todo';

function Tasks ({todos, setTodos, comptodos, setCompTodos, filterTodos}){


    return(
        <div className = 'todo-container'>
          <ul className = 'todo-list'>
            { filterTodos.map( (todo)=> (
                <Todo todo = {todo} todos = {todos} setTodos ={setTodos} comptodos = {comptodos} setCompTodos = {setCompTodos} />
            ) )

            }

          </ul>
        </div>
    );

}

export default Tasks;