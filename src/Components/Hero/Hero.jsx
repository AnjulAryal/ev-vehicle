import React from 'react'
import arrow_btn from "../../Assets/arrow_btn.png"
import play_icon from "../../Assets/play_icon.png"
import pause_icon from "../../Assets/pause_icon.png"
import "./Hero.css"
const Hero = (props) => {
  return (
    <div className='hero'>
        <div className="hero-text">
            <p>{props.heroData.text1}</p>
            <p>{props.heroData.text2}</p>
        </div>
        <div className="hero-explore">
            <p>Explore the features</p>
            <img src={arrow_btn} alt="" />
        </div>
        <div className="hero-dot-play">
            <ul className="hero-dots">
                <li onClick={()=>props.setheroCount(0)} className={props.heroCount===0?"hero-dot orange":"hero-dot"}></li>
                <li onClick ={()=>props.setheroCount(1)} className={props.heroCount===1?"hero-dot orange":"hero-dot"}></li>
                <li onClick={()=>props.setheroCount(2)} className={props.heroCount===2?"hero-dot orange":"hero-dot"}>  </li>
            </ul>
            <div className="hero-play">
                <img onClick={()=>props.setPlayStatus(!props.playStatus)}src={props.playStatus?pause_icon:play_icon} alt="" />
                <p>See the video</p>
            </div>
        </div>
    </div>
  )
}

export default Hero
