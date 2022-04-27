import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Button} from "./Button";
import {Button2} from "./Button2";

function App() {
    let [startValue, setStartValue] = useState('0');
    // let [currentStartValue, setCurrentStartValue] = useState('0');
    let [maxValue, setMaxValue] = useState('1');
    // let [maxValue, setMaxValue] = useState('1');
    let [errorMaxValue, setErrorMaxValue] = useState(false);
    let [errorStartValue, setErrorStartValue] = useState(false);
    let [inc, setInc] = useState(0);
    let [errorSetButton, setErrorSetButton] = useState(true);



    function onChangeStartHandler(e: ChangeEvent<HTMLInputElement>) {
        setStartValue(e.currentTarget.value);

        if (+e.currentTarget.value < +maxValue) {
            setErrorStartValue(false);
            setErrorMaxValue(false);
            setErrorSetButton(false) //кнопка Set disabled
        }else{
            setErrorStartValue(true);
            setErrorMaxValue(true);
            setErrorSetButton(true) //кнопка Set disabled
        }
        if (+e.currentTarget.value < 0) {
            setErrorStartValue(true);
            setErrorSetButton(true) //кнопка Set disabled
        }
    }

    function onChangeMaxHandler(e: ChangeEvent<HTMLInputElement>) {
        setMaxValue(e.currentTarget.value);

        if (+startValue >= +e.currentTarget.value) {
            setErrorStartValue(true);
            setErrorMaxValue(true);
            setErrorSetButton(true); //кнопка Set disabled
        }

        if (+startValue < +e.currentTarget.value) {
            setErrorStartValue(false);
            setErrorMaxValue(false);
            setErrorSetButton(false); //кнопка Set disabled
        }
        if (+e.currentTarget.value >= 0 && +startValue < +e.currentTarget.value) {
            setErrorMaxValue(false);
            setErrorSetButton(false); //кнопка Set disabled
        }
        if (+e.currentTarget.value < 0) {
            setErrorMaxValue(true);
            setErrorSetButton(true); //кнопка Set disabled
        }
        if (+startValue < 0) setErrorStartValue(true);
        else setErrorStartValue(false);
    }

    const increment  =() =>
    {
        setInc(inc+1)
    }

    const reset  = () =>
    {
        setInc (+startValue)
    }

    return (
        <div className="App">
            <div className={'wrapper-counter'}>
                <div className="scoreboard border">
                    <div className="input">
                        <label htmlFor="1">max value:</label>
                        <input className={errorMaxValue? 'error':''} onChange={onChangeMaxHandler} value={maxValue} id={'1'} type="number"/>
                        {errorMaxValue && <div>Ошибка</div>}
                    </div>
                    <div className="input">
                        <label htmlFor="2">start value:</label>
                        <input className={errorStartValue? 'error':''} onChange={onChangeStartHandler} value={startValue} id={'2'} type="number"/>
                        {errorStartValue && <div>Ошибка</div>}
                    </div>
                </div>
                <div className="action border">
                    <Button disabled={errorSetButton} setErrorSetButton ={setErrorSetButton} errorSetButton={errorSetButton} name={'Set'} startValue={startValue} maxValue={maxValue} setStartValue={setStartValue} setMaxValue={setMaxValue} inc={inc} setInc ={setInc}/>
                </div>
            </div>
            <div className={'wrapper-counter'}>
                <div className={inc>= +maxValue || !errorSetButton  || errorMaxValue || errorStartValue  ?  "scoreboard border colorRed" : "scoreboard border"}>
                    {inc}
                </div>
                <div className="action border">
                    <Button2 name={'Inc'}  func={increment} disabled={!errorSetButton || +inc>=+maxValue || errorMaxValue || errorStartValue}/>
                    <Button2 name={'Reset'} func={reset} disabled={!errorSetButton || (+inc<=+startValue || errorMaxValue || errorStartValue)}/>
                    {/*<Button name={'Inc'} disabled ={(errorMaxValue || errorStartValue)? inc >= Number(maxValue): false} errorSetButton={errorSetButton} setErrorSetButton ={setErrorSetButton}  startValue={startValue} maxValue={maxValue} setStartValue={setStartValue} setMaxValue={setMaxValue} inc={inc} setInc ={setInc}/>*/}
                    {/*<Button name={'Reset'} disabled ={inc <= Number(startValue) && errorSetButton } errorSetButton={errorSetButton} setErrorSetButton ={setErrorSetButton}  startValue={startValue} maxValue={maxValue} setStartValue={setStartValue} setMaxValue={setMaxValue} inc={inc} setInc ={setInc}/>*/}
                </div>
            </div>
        </div>
    )
}
export default App;
// {(errorMaxValue && setErrorStartValue) ? <div>Incorrect value!</div>: ''}
// {errorSetButton? inc : <div>enter values and press 'set'</div>}