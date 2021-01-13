import React from 'react';

function Todo({todos, todo, setTodos, setCompTodos, comptodos}){

    const deleteHandler = (e) => {
       // const index = todos.indexOf(todo);
        //todos.splice(index, 1);
        if(todo.completed){
            setCompTodos(comptodos.filter( (el) => (el.id!==todo.id )));
        }
        else
        setTodos(todos.filter( (el) => (el.id !== todo.id )));
        
       
        
    }

    const completeHandler = (e) => {

       if(todo.completed!== true){
        todo.completed = true;
        //setTodos(todos.filter( (el) => ( el.completed === false  )));
        //const index = todos.indexOf(todo);
        setTodos(todos.filter( (el) => ( el.completed === false  )));
        setCompTodos([
            ...comptodos, todo
        ])
    }

    }

    return(
       <div className="bar">
           
           <li value = {todo.text} className = {`${todo.completed ? "completed": "todo-item"}`}> {todo.text} </li>
           <button onClick = {completeHandler} className = "checkBtn"> Done </button>
           <button onClick = {deleteHandler} className = "trashBtn"> Delete</button>
           
       </div>
    );
}

export default Todo;