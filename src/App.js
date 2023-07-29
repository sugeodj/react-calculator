import { useReducer } from 'react';
import DigitButton from './DigitButton';
import './App.css';

export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate',
}

function reducer(state, { type, payload }) { 
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      return {
        ...state,
        currentOperand: `${ state.currentOperand || ''}${ payload.digit }`
      }
  }
}

function App() {
  const [{ currentOperand, previousOperand }, dispatch] = useReducer(reducer, {});

  return (
    <div className='calculator-grid'>
      <div className='output'>
        <div className='previous-operand'>
         { previousOperand }
        </div>
        <div className='current-operand'>
          { currentOperand }
        </div>
      </div>
      <button className='span-two'>AC</button>
      <button>DEL</button>
      {/* <DigitButton digit='/' dispatch={ dispatch } /> */}
      
      <DigitButton digit='4' dispatch={ dispatch } />
      <DigitButton digit='5' dispatch={ dispatch } />
      <DigitButton digit='6' dispatch={ dispatch } />
      <DigitButton digit='7' dispatch={ dispatch } />
      <DigitButton digit='8' dispatch={ dispatch } />
      <DigitButton digit='9' dispatch={ dispatch } />
      <DigitButton digit='1' dispatch={ dispatch } />
      <DigitButton digit='2' dispatch={ dispatch } />
      <DigitButton digit='3' dispatch={ dispatch } />
      <button>*</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button className='span-two'>=</button>
    </div>
  )
}

export default App;
