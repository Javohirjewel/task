import './App.css'
import Left from "../left/Left"
import Right from "../right/Right"
import { useEffect, useState } from 'react'
import axios from 'axios'
import { ICard } from '../types'

function App() {
  const [data, setData] = useState<ICard[]>([])


  useEffect(() => {
    axios.get('http://localhost:3000/foods')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])
  
  return (
   <>
      <div className='mx-auto w-max flex  mt-[200px] '>
        <Left data = {data} setData = {setData}/>
        <Right data = {data}/>
      </div>
    </>
  )
}

export default App
