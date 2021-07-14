import React from 'react';
import badge from './images/badge.png';
function Contact(){
    return (
        <div>
        
            <h1>Contact</h1>
            <div className="contactpara">
                <p>
                    Name : Junaid Ahmed<br/>

                    ID : 20181COM0065<br/>

                    Section : 6COM1<br/>

                    School : School of Engineering<br/>
                </p>
            </div>
            <div className="leftimage"><img src={badge} alt="badge"/></div>
        </div>
    )
}
export default Contact;