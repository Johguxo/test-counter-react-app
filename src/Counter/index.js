import React, { useState, useEffect } from 'react';
import './style.scss';

const Counter = ({numInicial}) => {
  const [count, setCount] = useState(numInicial);

  return (
    <div className='counter'>
      <span id='value'>{count}</span>
      <div className='button-container'>
        <button className='btn' name='plus' onClick={() => setCount(count+1)}>+</button>
        <button className='btn' name='reset' onClick={() => setCount(0)}>Reset</button>
        <button className='btn' name='minus' onClick={() => setCount(count-1)}>-</button>
      </div>
    </div>
  );
}

export default Counter;