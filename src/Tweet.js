import React, {useState} from 'react';
import './App.css';


function Tweet({props}){
    const number = Number(props.likes);
    const [likeCount, setCount] = useState(number);

    const increment = ()=>{
        setCount(likeCount+1);
    }
    return(
        <div className= 'tweet'>
            <h3> {props.name} </h3>
            <p> {props.message}</p>
            
            <h3> <button onClick ={increment}> like</button> {likeCount}</h3>
        </div>
    );
}

export default Tweet;