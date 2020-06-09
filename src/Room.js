import React, { useState } from 'react';
import './Room.css';

function Room() {
    const [isLit, setLit] = useState(true);
    let [age, setAge] = useState(23);
    let [litOn, setOn] = useState(true);
    let [litOff, setOff] = useState(false);
    let [temp, uptemp] = useState({f:72, c:22});

    //const state = useState(true);
    //const isLit = state[0];
    //const setLit = state[1];
    //console.log("State", state);
    function updateLit() {
        console.log("button clicked");
        setLit(!isLit);
        //isLit= !isLit;
    }
    function on(){
        console.log("Light is on");
        setOn(litOn);
        window.alert("Light is On");
    }
    function off(){
        console.log("Light is off");
        setOff(litOff);
        window.alert("Light is off");
    }
    const updateC = ev => uptemp({
        c: ev.target.value,
        f: (+ev.target.value * 9 / 5 + 32).toFixed(2)
      })
      
      const updateF = ev => uptemp({
        c: ((+ev.target.value - 32) * 5 / 9).toFixed(2),
        f: ev.target.value
      })

    return (
        <div className={`room ${isLit? "lit":"dark"}`}>

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

            <button onClick={on}>Light turn on ></button>
            <button onClick={off}>Light turn off ></button>

            <h1>Celsius</h1>
        <input
            type = "number"
            value = {temp.c}
            onChange = {updateC} >
          </input>


          <h1>Fahrenheit</h1>
          <input
            type = "number" 
            value = {temp.f} 
            onChange = {updateF}>
          </input>


        </div>
    );
}

export default Room;