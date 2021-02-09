import {Categories, SortPopup, PizzaBlock} from "../components";
import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import {fetchPizzas} from "../redux/actions/pizzasAC";


let categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
let sort = ['популярности', 'цене', 'алфавиту',];

const Home = React.memo(() => {
        const dispatch = useDispatch();

        const selectors = useSelector((state) => ({
            pizzas: state.pizzasReducer.items,
            sortBy: state.filtersReducer.sortBy,
            category: state.filtersReducer.category,
            pizzasInCart: state.cartReducer.items,
        }))
        useEffect(() => {
            dispatch(fetchPizzas(selectors.category, selectors.sortBy))

        }, [selectors.category, selectors.sortBy]);

        return (
            <div className="container">
                <div className="content__top">
                    <Categories items={categories} pizzas={selectors.pizzas}/>
                    <SortPopup items={sort}/>
                </div>
                <h2 className="content__title">{categories[selectors.category]}</h2>
                <div className="content__items">
                    {selectors.pizzas && selectors.pizzas.map((obj, index) => {
                        return <PizzaBlock key={`${index}_123`} obj={obj}
                                           pizzasInCart={selectors.pizzasInCart[`p${obj.id}`].length}/>
                    })}
                </div>
            </div>
        )
    }
)

export default Home
