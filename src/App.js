import React from 'react';
import './App.css';
import { inject } from 'react-rxjs';
import store$, { inc, dec} from './store';

const props = (storeState) => ({storeState, inc, dec})

export function App(props) {
  console.log(props)
  return (
    <div> 
      Count: {props.storeState.count}
      <button onClick={props.inc}>+</button>
      <button onClick={props.dec}>-</button>
    </div>
  );
}

export default inject(store$, props)(App);
