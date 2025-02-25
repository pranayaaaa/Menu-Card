import { useState } from 'react'
import Restraurant from "./Components/Basics/Restraurant"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Restraurant/>
    </>
  )
}

export default App
