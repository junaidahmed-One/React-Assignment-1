import React from 'react';
import allp from './images/allp.png';

function Home(){
    return (
        <div>
            
            <h1>Home</h1>
            <div className="rightpara">
            <h2 className="homeh2">Perman</h2>
            
            <p className="homepara">
            Perman (Japanese: パーマン, Hepburn: Pāman) is a Japanese manga series written and illustrated by<br/> the manga artist duo Fujiko Fujio about a clumsy boy, 
            Mitsuo Suwa, who is chosen to apprentice to a powerful superhero<br/> to save the world along with other superheroes.<br/> 
            The manga series was serialized in Weekly Shōnen Sunday on 1967.
            The first anime series was first produced in black and white in 1967.<br/> 
            The second anime series was made in color in 1983 and films were released in 1983, 1984, 1985, 2003 and 2004.
            </p>
            </div>
            <div className="leftimage"><img src={allp} alt="group perman"/></div>
        </div>
    )
}
export default Home;