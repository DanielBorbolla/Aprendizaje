import { useState } from 'react';
import './App.css';
import FccLogo from './components/FccLogo/FccLogo';
import CalcButton from './components/CalcButton/CalcButton';
import Screen from './components/Screen/Screen';
import ClearButton from './components/ClearButton/ClearButton';
import { evaluate } from 'mathjs';

function App() {
  const [number, setnumber] = useState('0');

  const iscero = numval => {
    return (numval == '0')
  }
  const getnumber = val => {
    iscero(number) ? setnumber(val) : setnumber(number + val)
  }
  const calculateResult = () => {
    setnumber(evaluate(number));

  }
  return (
    <div className="App">
      <FccLogo />
      <div className='calculator-container'>
        <Screen screeninput={number} />

        <div className='row'>
          <CalcButton clickAction={getnumber}>1</CalcButton>
          <CalcButton clickAction={getnumber}>2</CalcButton>
          <CalcButton clickAction={getnumber}>3</CalcButton>
          <CalcButton clickAction={getnumber}>+</CalcButton>
        </div>
        <div className='row'>
          <CalcButton clickAction={getnumber}>4</CalcButton>
          <CalcButton clickAction={getnumber}>5</CalcButton>
          <CalcButton clickAction={getnumber}>6</CalcButton>
          <CalcButton clickAction={getnumber}>-</CalcButton>
        </div>
        <div className='row'>
          <CalcButton clickAction={getnumber}>7</CalcButton>
          <CalcButton clickAction={getnumber}>8</CalcButton>
          <CalcButton clickAction={getnumber}>9</CalcButton>
          <CalcButton clickAction={getnumber}>*</CalcButton>
        </div>
        <div className='row'>
          <CalcButton clickAction={calculateResult}>=</CalcButton>
          <CalcButton clickAction={getnumber}>0</CalcButton>
          <CalcButton clickAction={getnumber}>.</CalcButton>
          <CalcButton clickAction={getnumber}>/</CalcButton>
        </div>
        <div className='row'>
          <ClearButton clickclear={() => setnumber('0')}>Clear</ClearButton>
        </div>

      </div>
    </div>
  )
}

export default App
