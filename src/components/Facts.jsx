import Axios from 'axios'
import catEyes from '../assets/cat-eyes.png'

export function Facts(){
  Axios.get("https://catfact.ninja/fact").then((res) => {
    console.log(res.data)
  })

  return(
    <div className='generator'>
      <img src={catEyes} alt="" />
      <button>Generate Fact</button>
    </div>
  )
}