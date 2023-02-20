import './App.css';
import Info from './Info';
import { useState } from 'react'

const App = () => {
  const [visible, setVisible] = useState(false)
  console.log(visible)
  return (
    <div>
      <button onClick={() => {
        setVisible(!visible)
      }}>
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr />
      {visible && <Info />}
    </div>
  );
}

export default App;
