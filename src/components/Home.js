import React from 'react';
import NavBar from './Nav-bar';

class Home extends React.Component{

    render(){

        return(
            <div>
            <NavBar/>
                <p>Soy el home</p>
            </div>
        )
    }
}

export default Home;
