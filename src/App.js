import "./styles.css";
import {useEffect, useState} from 'react'
export default function App() {
  const [screen,setScreen] = useState(window.screen.width);
  const actualScreen = () => {
    setScreen(window.innerWidth)
  }
  useEffect(() =>{
    console.log(window.innerWidth)
    window.addEventListener('resize', actualScreen)
  })
 
  return (
    <>
      <h1>screen size</h1>
     <h1> {screen}</h1>
    </>

  );
}
