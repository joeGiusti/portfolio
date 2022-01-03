import React from 'react'
import ProjectCard from './ProjectCard'

function Projects() {
    return (
        <div>
            {/*<ProjectCard animate={false}></ProjectCard>*/}      
            <div className='projectCardOuter'>
                <div className='contactCard'>
                    <div className='projectCardTitle mainTitle'>
                        Project Portfolio
                    </div>
                </div>
            </div>      
            <ProjectCard 
                animate={false}
                showVideo={true}
                text="
                    A webGL version of the unity editor capable of dynamically loading obj 
                    files from the browser or from cloud storage. The front end uses react and 
                    the back end uses google firebase. The daily cloud storage bandwith is maxed 
                    out at 1GB. 
                "
                title="WebGL Unity Editor"
                button1Link="https://joegiusti.github.io/react-unity-editor/"
                videoURL="https://www.youtube.com/embed/vr8BZ3gGZv4"
                showImage={false}
            ></ProjectCard>
            <ProjectCard classes="half"
                title="Neural Net Camera"
                text="A camera controlled by a neural net. The machine learning model was trained with TensorFlow using Unity's MLAgents framework."                
                button1Link="https://joegiusti.github.io//NeuralNet/"     
                videoURL="https://www.youtube.com/embed/vP1K1khK6Cw"   
                imageURL="./images/neuralNet.jpg"    
            ></ProjectCard>            
            <ProjectCard classes="half"
                title="Atomic Simulation"
                text=" 
                    The idea is to gain a more intuitive understanding of chemistry by creating and playing with atoms.                 
                    (Disclaimer: the forces are not accurate molecular dynamics)
                "    
                button1Link="https://joegiusti.github.io/atom-simulation/"    
                showImage={true}   
                hasVideo={true}  
                videoURL="https://www.youtube.com/embed/SBDFgbJtk0E"   
                imageURL="./images/atomicSimulation.jpg"  
            ></ProjectCard>
            <ProjectCard 
                title="VR Bubble Pop"                
                text="
                    A casual VR game that gives the same feeling as popping bubble wrap. It uses custom interaction scripts and supports local multiplayer.
                "                
                button1Link="https://joegiusti.github.io/react-unity-editor/"
                videoURL="https://www.youtube.com/embed/5wS59xIK2xU"
                imageURL="./images/bubblePop.jpg"  
                hasButton={false}
            ></ProjectCard>
            <ProjectCard classes="half"
                title="Augmented Reality Microscope"
                text="
                    Integrating the Vuforia API in Unity 3D this mobile application allows students to view a virtual microscope on their desk.                     
                "
                videoURL="https://www.youtube.com/embed/okqKq4wIZ_U"   
                imageURL="./images/augmentedReality.jpg"     
                hasButton={false}          
            ></ProjectCard>            
            <ProjectCard classes="half"
                title="Memory garden"
                text="An anniversary gift forged in C#"       
                videoURL="https://www.youtube.com/embed/FGzMRh8yCn4"    
                imageURL="./images/memoryGarden.jpg"   
                hasButton={false} 
            ></ProjectCard>
            <ProjectCard 
                title="Virtual University"                
                text="
                    A virtual university that can be visited from anywhere and does not require any software to be downloaded. 
                    There can be virtual lectures, labs, libraries, and social games that reinforce academic concepts. 
                    Web VR can be used to make it fully immersive.
                "
                button1Link="https://joegiusti.github.io/react-unity-editor/"
                videoURL="https://www.youtube.com/embed/wHGVLKZqoMA"
                showImage={true}
                imageURL="./images/virtualUniversity.jpg"
            ></ProjectCard>
            <ProjectCard classes="half"
                title="Speak Notes App"
                text="
                    This native Android Java app loads notes from google's firebase database and reads them with a text to speech API.                     
                "
                videoURL="https://www.youtube.com/embed/b7Edi3MomGU"
                imageURL="./images/speaknotes.jpg"    
                hasButton={false}
            ></ProjectCard>   
            <ProjectCard classes="half"
                title="Simple Adder Circuit"
                text="An adder circuit created with logic gates using the Falstad circuit simulator." 
                imageURL="./images/adderCircuit.jpg"
                hasVideo={false}              
                hasButton={false}
            ></ProjectCard>                                  
        </div>
    )
}

export default Projects
