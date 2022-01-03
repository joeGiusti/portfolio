import React from 'react'
import Hello from './Hello'
import { useEffect, useState } from 'react'

function ProjectCard(props) {    
    const [showVideo, setshowVideo] = useState(false)
    const [showImage, setshowImage] = useState(false)
    useEffect(()=>{
        setshowVideo(props.showVideo)
        setshowImage(props.showImage)
        if(!showVideo)
            setshowImage(true)    
    },[])
    function openLink(link){
        window.open(link)
    }    
    function clickedImage(i){
        if(props.hasVideo){
            setshowVideo(true)
            setshowImage(false)
        }
    }
    var x = 0
    return (
        <div className={'projectCardOuter '+(props.animate && ' animate ') + props.classes}>
            <div className='projectCard'>
                <div className='projectCardSection'>
                    <div className='projectCardInfo'>
                        <div className='projectCardTitle animate'>
                            {props.title}
                        </div>
                        <div className='projectCardText animate'>
                            {props.text}                            
                        </div>  
                        {
                            props.twoButtons && 
                            <div className="buttonOuter buttonHalf animate">
                                <div className="buttonInner">
                                    Code
                                </div>
                            </div>
                        }                  
                        {
                            props.hasButton && 
                            <div className={"buttonOuter" +(props.twoButtons ? " buttonHalf " : " buttonWhole ") + "animate"}>
                                <div className="buttonInner" onClick={()=>openLink(props.button1Link)}>
                                    {props.button1Text}
                                </div>
                            </div>
                        }                                                                              
                    </div>
                </div>                
                <div className="projectCardSection animate videoFrame">
                    {showVideo && <iframe loading="lazy" width="100%" height="100%" src={props.videoURL} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}
                    {showImage &&<img src={props.imageURL} onClick={()=>clickedImage(props.videoURL)}></img>}                    
                </div>
            </div>
        </div>
    )
}
ProjectCard.defaultProps={
    animate:true,
    showVideo:false,
    hasVideo:true,
    showImage: false,
    text:"add text",
    title:"Title", 
    hasButton:true,
    twoButtons:false,
    button1Text:"Live Demo",
    button2Text:"code",
    button1Link:"https://joegiusti.github.io/react-unity-editor/",
    videoURL:"https://www.youtube.com/embed/vr8BZ3gGZv4",
    imageURL:"./images/lines.png"
}

export default ProjectCard
