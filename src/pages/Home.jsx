import {Categories, SortPopup, PizzaBlock} from "../components";
import React from "react"

function Home(props) {
    return (<div className="container">
            <div className="content__top">
                <Categories clickOnCatefories={(name) => console.log(name)}
                            items={['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}/>
                <SortPopup items={['популярности', 'цене', 'алфавиту',]}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {props.pizzas.map((obj)=>{return <PizzaBlock obj={obj}/>})}
            </div>
        </div>
    )
}
export default Home
