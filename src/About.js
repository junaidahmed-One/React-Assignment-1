import React from 'react';
import perman from './images/perman.png';
function About(){
    return (
        <div>
            <h1>About</h1>
           <div className="rightpara">
               <p className="homepara">
               The story follows a boy named Mitsuo Suwa who meets an alien named Superman, later renamed Birdman.<br/>
               The alien is part of a group that maintains peace in the galaxy and recruits Mitsuo to become a Perman.<br/> 
               Mitsuo is given three items, a helmet which multiplies the wearer's physical strength and serves as a mask, <br/>
               a cape that allows the wearer to fly and run with great speed, and a badge which enables the wearer to breathe underwater and to communicate <br/>
               with Permans that he later meets. The alien instructs Mitsuo that if a Perman's identity becomes known to others, <br/>
               his brain will be destroyed—which is reduced to being turned into an animal in later chapters. To help keep Mitsuo's secret identity, <br/>
               the alien gives Mitsuo a doppelganger robot called a copy-robot who takes Mitsuo's place when he is Perman.<br/>
               </p>
           </div>
           <div className="abimage"><img src={perman} alt="perman"/></div>
        </div>
        
    )
}
export default About;