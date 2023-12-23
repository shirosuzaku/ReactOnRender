import { useState, useRef } from 'react'
import './App.css'
import Hero from './Components/Hero'
import Main from './Components/Main'
import About from './Components/About'

function App() {
  const [count, setCount] = useState(0)
  const dropDown = useRef(null)

  const openDropDown = (e) => {
    console.log(e.clientY,e.pageY)
    let diff = e.clientY - e.target.getClientRects()[0].y
    let h = e.target.getClientRects()[0].height + 10
    console.log(e.target.getClientRects()[0])
    dropDown.current.style.top = `${e.pageY - diff + h}px`
    dropDown.current.style.left = `${e.target.getClientRects()[0].x}px`
    dropDown.current.classList.toggle('active')
  }

  dropDown.current.addEventListener('click',e=>{
    console.log(e.target.dataset.id)
    const element = document.getElementById(e.target.dataset.id);
    element.scrollIntoView({ 
      behavior: "smooth", 
    });

    dropDown.current.classList.remove('active')
  })

  return (
    <>
      <Hero/>
      <div className="nav">
        <p>Menu</p>
        <p>About</p>
        <p>...</p>
      </div>
      <Main odd={openDropDown}/>
      <About/>
      <div className="dropDown" ref={dropDown}>
        <p data-id="g1">group one</p>
        <p data-id="g2">group two</p>
      </div>
    </>
  )
}

export default App
