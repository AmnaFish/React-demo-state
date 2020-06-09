import React, { useState } from 'react';
import './Room.css';

function Room() {
    const [isLit, setLit] = useState(true);
    let [age, setAge] = useState(23);

    //const state = useState(true);
    //const isLit = state[0];
    //const setLit = state[1];
    //console.log("State", state);
    function updateLit() {
        console.log("button clicked");
        setLit(!isLit);
        //isLit= !isLit;
    }
    return (
        <div className={"room" + (isLit? "lit":"dark")}>
            This Room is : Lit = {isLit ? "lit" : "dark"}
            <br />
            <button onClick={updateLit}>Toggle Light</button>
            <br />
            Age: {age}
            <br />
            <button onClick={() => {
                console.log("Age");
                setAge(++age);
            }}>Increase Age</button>
        </div>
    );
}

export default Room;