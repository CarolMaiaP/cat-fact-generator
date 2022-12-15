import Axios from 'axios'
import { useState, useEffect } from 'react'
import catEyes from '../assets/cat-eyes.png'

export function Facts(){
  const [catFact, setCatFact] = useState("");

  async function fetchCatFact(){
    const api = await Axios.get("https://catfact.ninja/fact").then((res) => {
    setCatFact(res.data.fact)
  })
  }

  useEffect(() => {
    fetchCatFact();
  }, [])

  return(
    <div className='catFact'>
      <div className='generator'>
        <div className='cat-image'>
          <img src={catEyes} alt="" />
        </div>
        <div className='generate-btn'>
          <button onClick={fetchCatFact}>Generate Fact</button>
        </div>
      </div>
      <div className='cat-fact'>
        <h2>{catFact}</h2>
      </div>
    </div>
  )
}