import React, {useState} from 'react';
import './App.css';
import {Button} from "./Button";

 function App() {
  let [minValue, setMinValue] =useState();
  let [maxValue, setMaxValue] =useState();

  return (
    <div className="App">
        <div className={'wrapper-counter'}>
            <div className="scoreboard border">
               <div className="input">
                   <label htmlFor="1">max value:</label>
                   <input id={'1'} type="number"/>
               </div><div className="input">
                   <label htmlFor="2">max value:</label>
                   <input id={'2'} type="number"/>
               </div>
            </div>
            <div className="action border">
                <Button name ='set'/>
            </div>
        </div>
            <div className={'wrapper-counter'}>
                <div className="scoreboard border">

                </div>
                <div className="action border">
                    <Button name ='Inc' />
                    <Button name ='Reset' />
                </div>
            </div>
    </div>
  )
};

 export default App;

