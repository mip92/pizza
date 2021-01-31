import React,{ useState, useEffect } from "react"
import {Header} from "./components";
import {Home, Cart, Preloader} from "./pages";
import {Route} from "react-router-dom";


function App() {
    const [pizzas, setPizzas]=useState([null])

    useEffect(()=>{
        fetch('http://localhost:3000/db.json')
            .then((res)=>res.json())
            .then(json=>{
                setPizzas(json.pizzas);
            })
    },[]);

    return (
        <div className="wrapper">
            <Header/>
            {pizzas[0]==null ? <Preloader/>:
            <div className="content">
                <Route exact path='/'render={ ()=><Home pizzas={pizzas}/>}/>
                <Route path='/cart' render={()=><Cart/>}/>
            </div>}
        </div>
    );
}

export default App;
