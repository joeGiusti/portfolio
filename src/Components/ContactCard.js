import React from 'react'

function ContactCard() {
    return (
        <div className='projectCardOuter'>            
            <div className='contactCard'>
                <div className='contactCardImgDiv'>
                    <img className='contactCardImg' src='./images/contactCircle.png'></img>
                </div>
                <div className='contactCardTextDiv animate'>
                    <div className='contactCardText'>
                        Contact Me<br></br>
                        (979) Five Zero Two 5620<br></br>
                        JMarkle (@) protonmail.com<br></br>
                    </div>
                </div>
                <div className='contactCardImgDiv'>
                    <img className="contactCardImg" src='./images/weddingCircle.png'></img>
                </div>
            </div>            
        </div>
    )
}

export default ContactCard
