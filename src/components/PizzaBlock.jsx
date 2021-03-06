import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import Loader from "./Loader";
import Button from "./Button";
import {addPizzaToCart} from "../redux/actions/cartAC";

function PizzaBlock(props) {
    const selectors = useSelector((state) => ({
        isLoading: state.pizzasReducer.isLoading,
        pizzasInCart: state.cartReducer.items,
    }))
    const dispatch = useDispatch();
    let {imageUrl, name, price, sizes, types, id} = props.obj;
    const [activeType, setActiveType] = useState(0)
    const [activeSize, setActiveSize] = useState(0)
    const onSelectType = (index) => {
        setActiveType(index)
    }
    const onSelectSize = (index) => {
        setActiveSize(index)
    }
    const onAddPizza =()=>{
        let cartObj={
            id: `p${id}`,
            size:activeSize,
            type:activeType,
            price
        }
        dispatch(addPizzaToCart(cartObj))
    }

    return (!!selectors.isLoading ?
            <Loader/>
            :
            <div className="pizza-block">
                <img
                    className="pizza-block__image"
                    src={imageUrl}
                    alt="Pizza"
                />
                <h4 className="pizza-block__title">{name}</h4>
                <div className="pizza-block__selector">
                    <ul>
                        {types.map((type, index) => <li key={`${type}_${index}`}
                                                        onClick={() => onSelectType(index)}
                                                        className={activeType === index ? "active" : ''}
                        >{type === 0 ? "тонкое" : "традиционное"}</li>)}
                    </ul>
                    <ul>
                        {sizes.map((sizes, index) => <li key={`${sizes}_${index}`}
                                                         onClick={() => onSelectSize(index)}
                                                         className={activeSize === index ? "active" : ''}
                        >{`${sizes} см`}</li>)}
                    </ul>
                </div>
                <div className="pizza-block__bottom">
                    <div className="pizza-block__price">от {price} грн</div>
                    <Button buttonOnClick={onAddPizza} className="button--add">
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                fill="white"
                            />
                        </svg>
                        <span>Добавить</span>
                        <i>{props.pizzasInCart}</i>
                    </Button>
                </div>
            </div>
    )
}

/*

PizzaBlock.propTypes = {
    name: PropTypes.string.isRequired,
    category: PropTypes.string,
    id: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.string,
    rating: PropTypes.string,
    sizes: PropTypes.string,
    types: PropTypes.string,
}
*/

export default PizzaBlock;
