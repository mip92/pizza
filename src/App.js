import React from "react"
import {Header} from "./components";
import {Home, Cart} from "./pages";
import {Route} from "react-router-dom";


function App() {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route exact path='/'component={Home}/>
                <Route path='/cart' component={Cart}/>
            </div>
        </div>
    );
}

export default App;
