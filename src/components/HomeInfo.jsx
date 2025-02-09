import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
     <p className="font-medium sm:text-xl text-center">{text}</p>
     <Link to={link} className="neo-brutalism-white neo-btn">
     {btnText}
     <img src={arrow} className="w-4 h-4 object-contain"/>
     </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hi, I am Priyanka <span className="font-semibold"></span>👋🏻
            <br/>
            A MCA student passionate about front-end experiences✨.
        </h1>
    ),
    2: (
        <InfoBox 
           text="💻 Skilled in crafting intuitive and responsive user interfaces with a strong foundation in front-end development. 🚀 Passionate about leveraging technology to drive innovation and create impactful solutions. 🌟"
           link="/about"
           btnText="wanna know me more"
         />  
        
    ),
    3: (
        <InfoBox 
           text="Let multiple projects to success over the years. curious about the impact"
           link="/projects"
           btnText="visit my portfolio"
         />  
    ),
    4: (
        <InfoBox 
           text="Need a project done or looking for a dev? I'm just a few keystroke away"
           link="/contact"
           btnText="Lets Talk"
         />  
    ),

}



const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
    
}

export default HomeInfo;