// import { useState } from 'react'
import {actions} from './store/index';
import {useSelector ,useDispatch}  from 'react-redux';
import './App.css'

function App() {
  const dispatch=useDispatch();
  const val=useSelector((state)=>state.value);
  console.log(val);
  return (
    <div>
      <h1>{val}</h1>
      <button onClick={()=>dispatch(actions.plus())}>+</button>
      <button onClick={()=>dispatch(actions.minus())}>-</button>
      <button onClick={()=>dispatch(actions.plusby(2))}>+2</button>

    </div>
  )
}

export default App
