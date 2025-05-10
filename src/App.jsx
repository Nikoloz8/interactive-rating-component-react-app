import { useState } from 'react'
import './App.css'
import MainCard from "./components/main-card/MainCard"
import ThankCard from "./components/thank-card/ThankCard"

function App() {  
  const [isVisible, setVisible] = useState(false)
  const [Value, SetValue] = useState(0)    


  return (
    <>
      <MainCard isVisible={isVisible} setVisible={setVisible} Value={Value} SetValue={SetValue} />
      <ThankCard isVisible={isVisible} Value={Value}/>
    </>
  )
}

export default App
