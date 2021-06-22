import React from 'react';
import '../Styles/Navbar.css';

function Navbar () {
 return(
// in react a class is className; id is still id
<div>
<h3>Check me out</h3>
<nav className="navbar">
    <a href= "/">Welcome</a>
    <a href= "/">About Me</a>
    <a href= "/">Details</a>
</nav>
</div>  
    

    )
}



export default Navbar;