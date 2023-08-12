import { useSelector,useDispatch } from 'react-redux'
import './App.css'
import {plus, minus,plusbyvalue} from './features/counterSlice';

function App() {
  const dispatch=useDispatch();
  const val=useSelector((state)=>state.app.value);
  return (
    <div>
      <h1>{val}</h1>
      <button onClick={()=>dispatch(plus())}>+</button>
      <button onClick={()=>dispatch(minus())}>-</button>
      <button onClick={()=>dispatch(plusbyvalue(2))}>+2</button>

    </div>
  )
}

export default App
