import './App.css';
import Info from './Info';
import { useState } from 'react'
import CounterUseReducer from './CounterUseReducer';
const App = () => {
  const [visible, setVisible] = useState(false)
  console.log(visible)
  return (
    <CounterUseReducer />
  );
}

export default App;
