import React from 'react'
import '../Stylesheets/Section.css';
import courseImg from '../assets/imgs/Technologies.jpg'
import aiInterviewerImg from '../assets/imgs/aiAgent.jpg'
import learnerIcon from '../assets/imgs/learner.png'
import laptopIcon from '../assets/imgs/onlineCourse.png'
import interviewer from '../assets/imgs/Interviewer.png';
import arrow from '../assets/imgs/arrow.png';

function Section() {
  return (
    <div className='sect-cont'>
       
       {/* <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <Galaxy 
          mouseRepulsion={false}
          mouseInteraction={false}
          density={1.5}
          glowIntensity={0.5}
          saturation={0.8}
          hueShift={240}
        />
      </div> */}


      <div className='Hero'>
        <h1 className='sect-title'>CodeVerse</h1>
        <h3 className='sect-subtitle'>Your Gateway to Coding Mastery.< br/> <br/>
         Start learning and developing your future software, It is your time<br/> to shine in the development Universe!
        </h3>
      
        <br/>
  
        <div className='btns'>
          <button className='get-started'>Get Started</button>
          {/* <button className='view-courses'>View Courses</button> */}
        </div>

     </div>

          <br/>
          <br/>
        <h1 className='Why'>Why CodeVerse ?</h1>
        <div className='features-cont'>
        
          <div className='feature-box'>
            <img src = {learnerIcon} alt='Online Learner' />
            <h3 className='feature-title'>Learn at your own<br/> pace</h3>
          </div>
          
          <hr className='features-hr'/>
            
          <div className='feature-box'>
            <img src = {laptopIcon} alt='Online Courses' />
            <h3 className='feature-title'>+20 Courses in <br/> Different Aspects</h3>
          </div>
           
          <hr className='features-hr'/>
          
          <div className='feature-box'>
            <img src = {interviewer} alt='Interviewer' />
            <h3 className='feature-title'>Get ready for your<br/> job interview</h3>
          </div>
        
        </div>




      <div className='exp-courses'> 
           <img src = {courseImg} alt='Technologies' />
           <hr className='exp-courses-hr'/>
           <h2 className='exp-courses-h2'>Explore Our Courses <br/> in Different fields and <br/> stacks</h2>   
           <img src={arrow} alt = 'Arrow'/>
        
      </div>    
      
      <div className='check-out'> 
           <img src={arrow} alt = 'Arrow'/>
           <h2 className='check-out-h2'>Check out your <br/> experience with our <br/> AI-Powered <br/>Interviewer</h2>   
           <hr className='check-out-hr'/>
           <img src = {aiInterviewerImg} alt='AI Agent' />
            
      </div>    

       
    </div>
  )
}

export default Section