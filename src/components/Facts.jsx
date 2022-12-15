import catEyes from '../assets/cat-eyes.png'

export function Facts(){

  fetch("https://catfact.ninja/fact").then((res) => res.json()).
  then((data) => {
    console.log(data)
  });

  return(
    <div className='generator'>
      <img src={catEyes} alt="" />
      <button>Generate Fact</button>
    </div>
  )
}