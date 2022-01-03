import React from 'react'
import Gist from "react-gist";

function Code() {
    return (
        <div >     
            <div className='projectCardOuter'>            
                <div className='contactCard'>
                    <div className='codeTitle'>Conways Game of Life in C++  </div>                    
                </div>
            </div>
            <div className='gistHolder'>
                <Gist id="d1653e23454987701a61990393da68c2"></Gist>
            </div>       
            <div className='projectCardOuter'>            
                <div className='contactCard'>
                    <div className='codeTitle'>VR controller Input Scripts in C#</div>
                </div>
            </div>
            
            <div className='gistHolder'>
                <Gist id='ea9a40565945191529a2d2259ebd2324'></Gist>
            </div>
        </div>
    )
}

export default Code
