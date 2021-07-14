import React from 'react';
import { Link } from 'react-router-dom';
function Nav(){
    return (
        <nav>
            <div className="hoverOver">
            <Link to='/' className='link'>
                <h3 className='menu'><i>Home</i></h3>
            </Link>
            </div>
            <div className="hoverOver">
            <Link to='/about' className='link'>
                <h3 className='menu'><i>About</i></h3>
            </Link>
            </div>
            <div className="hoverOver">
            <Link to='/contact' className='link'>
                <h3 className='menu'><i>Contact</i></h3>
            </Link>
            </div>
        </nav>
    )
}

export default Nav;