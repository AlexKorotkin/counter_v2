import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Button} from "./Button";

function App() {
    let [startValue, setStartValue] = useState('0');
    let [maxValue, setMaxValue] = useState('1');
    let [errorMaxValue, setErrorMaxValue] = useState(false);
    let [errorStartValue, setErrorStartValue] = useState(false);


    function onChangeStartHandler(e: ChangeEvent<HTMLInputElement>) {
        setStartValue(e.currentTarget.value);

        if (+e.currentTarget.value < +maxValue) {
            setErrorStartValue(false);
            setErrorMaxValue(false);
        }else{
            setErrorStartValue(true);
            setErrorMaxValue(true);
        }
        if (+e.currentTarget.value < 0) {
            setErrorStartValue(true);
        }
        // +e.currentTarget.value >= 0 ? setErrorStartValue(false): setErrorStartValue(true);
    };

    function onChangeMaxHandler(e: ChangeEvent<HTMLInputElement>) {
        setMaxValue(e.currentTarget.value);


        if (+startValue >= +e.currentTarget.value) {
            setErrorStartValue(true);
            setErrorMaxValue(true);
        }

        if (+startValue < +e.currentTarget.value) {
            setErrorStartValue(false);
            setErrorMaxValue(false);
        }
        if (+e.currentTarget.value >= 0 && +startValue < +e.currentTarget.value) {
            setErrorMaxValue(false);
        }
        if (+e.currentTarget.value < 0) {
            setErrorMaxValue(true);
        }

    }

    return (
        <div className="App">
            <div className={'wrapper-counter'}>
                <div className="scoreboard border">
                    <div className="input">
                        <label htmlFor="1">max value:</label>
                        <input onChange={onChangeMaxHandler} value={maxValue} id={'1'} type="number"/>
                        {errorMaxValue && <div>Ошибка</div>}
                    </div>
                    <div className="input">
                        <label htmlFor="2">start value:</label>
                        <input onChange={onChangeStartHandler} value={startValue} id={'2'} type="number"/>
                        {errorStartValue && <div>Ошибка</div>}
                    </div>
                </div>
                <div className="action border">
                    <Button name='set' startValue={startValue} maxValue={maxValue}/>
                </div>
            </div>
            <div className={'wrapper-counter'}>
                <div className="scoreboard border">
                    {startValue}
                </div>
                <div className="action border">
                    <Button name='Inc' startValue={startValue} maxValue={maxValue}/>
                    <Button name='Reset' startValue={startValue} maxValue={maxValue}/>
                </div>
            </div>
        </div>
    )
};

export default App;

