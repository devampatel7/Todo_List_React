import React from 'react';
import './App.css';
//Form Class

function TextBox({ inputText, setInputText, todos, setTodos, todoID, setID, setStatus}){
    
     const inputTextHandler = (e) =>{
         setInputText(e.target.value);

     }

     const TodoHandler = (e) => {

        e.preventDefault(); //prevents reloading after each submission

         setTodos([
             ...todos, {text: inputText, completed: false, id: todoID } 
         ]); //copy the remaining items and make a new object in the end
         
         
         setID(todoID+1);
         setInputText(""); // reset the input text back to empty because the actual content is in the todos object

         
     }

   
     
    const selectHandler = (e) =>{

         setStatus(e.target.value);

    }


    return(
    <form>
        
        <input value = {inputText} onChange={inputTextHandler} type="text" className="todo-input" />
        <button onClick = {TodoHandler} type="submit" className="submitBtn"> ADD </button>
         <select  onChange = {selectHandler}  className = "optionSelect">
                <option value = "All"  className = "opt1"> All</option>
                <option value = "Incomplete"  className = "opt2"> Incomplete</option>
                <option  value = "Completed" className = "opt3"> Completed</option>

         </select>




    </form>    
    );
}

export default TextBox;