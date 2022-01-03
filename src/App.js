import logo from './logo.svg';
import './App.css';
import Hello from './Components/Hello';
import ProjectCard from './Components/ProjectCard';
import { useState } from 'react';
import Projects from './Components/Projects';
import { useEffect } from 'react';
import Qualifications from "./Components/Qualifications.js"
import Code from "./Components/Code.js"
import Contact from "./Components/Contact.js"
import ContactCard from './Components/ContactCard';
function App() {
  const [tabState, settabState] = useState(0)  

  useEffect(()=>{
    upAnimations()
  }, [])


  function upAnimations(){
    
    var t = 0
    var intersectionObserver = new IntersectionObserver(entries =>{
      entries.forEach(entry =>{        
        if(entry.isIntersecting){
          entry.target.classList.add('up')
          //setTimeout(()=>{entry.target.classList.add('up')}, t)   
          t= t+10        
          intersectionObserver.unobserve(entry.target)
        }
      })
    })

    document.querySelectorAll('.animate').forEach(element => {
      intersectionObserver.observe(element)  
      //element.classList.add('up')      
    }); 
  }
  function addUp(){
    console.log("readding")
    document.querySelectorAll('.animate').forEach(element => {
      element.classList.add('up')           
    }); 
  }
  function removeUp(){
    console.log("removing animations")
    document.querySelectorAll('.animate').forEach(element =>{
      element.classList.remove('up')
    })    
  }
  function newTabState(index){
    settabState(index)
      removeUp()
      setTimeout(() => {
        upAnimations() 
        //addUp()
      }, 200); 
        
  }

  return (
    <div className="appBackground">
      <div className='appContainerOuter'>      
          <div className={'appTab '+ (tabState === 0 && 'appTabActive')} onClick={()=>newTabState(0)}>
            Projects
          </div>
          <div className={'appTab '+ (tabState === 1 && 'appTabActive')} onClick={()=>newTabState(1)}>
            Qualifications
          </div>
          <div className={'appTab '+ (tabState === 2 && 'appTabActive')} onClick={()=>newTabState(2)}>
            Code
          </div>
          <div className={'appTab '+ (tabState === 3 && 'appTabActive')} onClick={()=>newTabState(3)}>
            Contact
          </div>
        <div className='appContainer'>
          
          {/*
            <div className='animate'>Hello</div>
            <img src={logo} className="App-logo" alt="logo" style={{height:"80px"}}/>
          */}
          <br></br>            
          {tabState === 0 && <Projects ></Projects>}
          {tabState === 1 && <Qualifications ></Qualifications>}
          {tabState === 2 && <Code ></Code>}
          {tabState === 3 && <Contact ></Contact>}
          {/*tabState != 0 && 
            <div style={{height:"2000px"}}>
            </div>
          */}
          {tabState === 3 && <ContactCard ></ContactCard>}
          {tabState != 3 && <ContactCard></ContactCard>}
        </div>
      </div>
    </div>
  );
}

export default App;
