import React from 'react';
import Filters from './Filters';
import PreliminarCard from './Preliminar-card';
import NavBar from './Nav-bar';

class Home extends React.Component{

    render(){

        return(

            <div>
            <NavBar/>
                <p>Soy el home</p>
            </div>

        <div>   
       
        <NavBar/>
        <Filters/>
        <PreliminarCard/>
        </div>

           

        )
    }
}

export default Home;
