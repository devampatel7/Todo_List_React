import React, {useState, useEffect} from 'react';
import Tasks from './Tasks';
import TextBox from './TextBox';

import './App.css';




function App() {
  
const [inputText, setInputText] = useState("");

const [todos, setTodos] = useState([]);

const [todoID, setID] = useState(0);

const [comptodos, setCompTodos] = useState([]);

const [status, setStatus] = useState("All");

const [filterTodos, setfilterTodos] = useState([]);


const FilterHandler = (e) =>{

  switch(status){
    case "Completed":
      setfilterTodos(comptodos);
      break;
    case "Incomplete":
      setfilterTodos(todos);
      break;
    default:
      setfilterTodos(todos.concat(comptodos));
      break;
  }
}

useEffect(()=>{
  FilterHandler();
}, [status, todos, comptodos]);

  return (

    <div className="App">
      <h1 >Todo List</h1>
      <h2 className = "credit"> by Devam Patel Rutgers University</h2>
      < TextBox 
      inputText = {inputText} 
      setInputText = {setInputText}
      todos = {todos}
      setTodos = {setTodos}
      todoID = {todoID}
      setID = {setID}
      setStatus = {setStatus}
       />
      
      
      < Tasks 
      todos={todos} 
      setTodos={setTodos} 
      comptodos={comptodos} 
      setCompTodos={setCompTodos} 
      filterTodos = {filterTodos}
      />
      
     
    
    
      
    </div>
  );
}

export default App;
