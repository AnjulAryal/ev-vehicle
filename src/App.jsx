import React, { useEffect, useState } from 'react'
import Background from './Components/Background/Background'
import Navbar from './Components/Navbar/Navbar'
import Hero from "./Components/Hero/Hero"
const App = () => {
  let heroData = [
    {text1: "Dive into", text2: "what you love"},
    {text1: "Indulge", text2: "your passions"},
    {text1: "Give in to", text2: "your passions"}
  ]
  const [heroCount,setheroCount] = useState(1)
  const [playStatus,setPlayStatus] = useState(false)

  useEffect(()=>{
    setInterval(()=>{
      setheroCount((count)=>{
        return count===2?0:count+1
      })
    },3000);
  },[]);
  return (
    <div>
      <Background playStatus = {playStatus} heroCount = {heroCount}/>
      <Navbar/>
      <Hero setPlayStatus={setPlayStatus} heroData={heroData[heroCount]} heroCount={heroCount} playStatus={playStatus} setheroCount={setheroCount}/>
    </div>
  )
}

export default App
