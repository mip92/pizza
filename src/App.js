import React from "react"
import {Header} from "./components";
import {Home, Cart} from "./pages";
import {Route} from "react-router-dom";


function App() {
    return (
        <div className="wrapper">
            <Header/>
            {/*{selectors.pizzas[0] == null ? <Preloader/> :*/}
            <div className="content">
                <Route exact path='/' render={() => <Home/>}/>
                <Route path='/cart' component={Cart} exact/>
            </div>
        </div>
    );
}

export default App

