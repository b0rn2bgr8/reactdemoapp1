import React, {Component} from 'react'; 
import {BrowserRouter, Route} from 'react-router-dom'; 

import Header from './Header'; 
import Home from './Home'; 
import Footer from './Footer'; 
import About from './About'; 



class App extends Component{
    render(){
        return(
           <BrowserRouter> 
                <div> 
                    <Header />
                        <Route exact path="/" component={Home} /> 
                        <Route path="/about" component={About} /> 
                    <Footer /> 
                </div> 
           </BrowserRouter> 
        )
    }
}


export default App; 
