import React from 'react';
import '../Styles/Header.css';

// prop styling foes above the function
// store the styles in a variable and call wherever we want
// prop use single curly brackets

const styles= {
    headerStyles: {
        // styling here
        backgroundColor: 'transparent',
        fontSize: '10px'
    },

    headingStyle: {
        position: 'absolute'
    },

    head: {
        fontFamily: 'cursive'
    }
}
// to use call the variable and object in dot notation

function Header () {
    return(
        // seamntic HTML
        // JSX allows us to use HTML syntax
        // Can only pass one element at a time
        // ti fix this nest everything in a div
        // imported styles
        // next inline styling will pverwrite any imported css
        //  prop styling
<div className ="header">
    <h1 style= {{color: "pink", fontSize: "20px", fontFamily: "cursive"}}>Welcome</h1>
    <h2 style= {styles.headerStyles} >Welcome to my first react app</h2>

</div>
    )
}



export default Header;