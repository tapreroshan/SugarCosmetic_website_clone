import React from 'react'
import NavigationBar from './Components/NavigationBar'
import { Slider } from './Components/Slider'
import { Card } from './Components/card'
import card2 from './images/Bestseller/bestseler-image1.png'
import { Heading } from './Components/Heading'
import './App.css'
import { Footer } from './Components/Footer'
function App() {


  return (
    <>
    <nav ><NavigationBar /></nav>
    <main >
    <div className="fixed-image">
      <img
        src="https://images.sugarcosmetics.com/Homepage/0a2edfd6-8883-4f04-8607-6bc644a18c87.gif"
        alt="Fixed Image"
      />
    </div>
    <Slider />
    
    </main>
    <footer>
       <Footer />
    </footer>
   
    </>
  )
}

export default App
