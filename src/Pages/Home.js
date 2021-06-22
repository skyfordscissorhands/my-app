import React, { Component } from 'react';
import Header from "../Components/Header";



// allow us to pass props in the render body
// setState and set props
// render components to the page
//when we do pages we need a render before the return
class Home extends Component {
    render() {
        return(
           < >

           <Header />
           <h1>This is my Home Page</h1>
           
           </> 
        )
    }

}


export default Home;