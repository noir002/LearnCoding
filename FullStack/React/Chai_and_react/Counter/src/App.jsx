import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter_hoon_mein, badha_diya_counter] = useState(5)

  const addValue = () => {
    if(counter_hoon_mein < 20 ){
    badha_diya_counter(counter_hoon_mein + 1)
    }
  }

  const subValue = () => {
    if(counter_hoon_mein > 0){
    badha_diya_counter(counter_hoon_mein - 1)
    }
  }  

  return (
    <>
      
      <h1>Hello Paras :)</h1>
      <h2>Happy coding</h2>

      <br /><br />

      <div>
        <h1>Counter value: {counter_hoon_mein}</h1>
        <div>
        <button onClick={addValue}>Add value</button> 
        <button onClick={subValue}>Remove Value</button>
        </div>

      </div>
    </>
  )
}

export default App
