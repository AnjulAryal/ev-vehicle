import React from 'react'
import "./Background.css"
import video1 from "../../Assets/video1.mp4"
import image0 from "../../Assets/image1.png"
import image1 from "../../Assets/image2.png"
import image2 from "../../Assets/image3.png"
const Background = (props) => {
  if(props.playStatus){
    return (
        <video className='background' autoPlay loop muted>
            <source src = {video1} type="video/mp4"/>
        </video>
  )
  }else if (props.heroCount ===0){
    return <img src={image0} className='background fade-in' />
  }else if(props.heroCount===1){
    return <img src={image1} className='background fade-in' />
  }else if(props.heroCount===2){
    return <img src={image2} className='background fade-in' />
  }
}

export default Background
