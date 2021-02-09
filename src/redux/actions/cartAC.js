export const setTotalPrice = (value) => {
    return {
        type: "SET_TOTAL_PRICE",
        payload: value,
    }
}
export const setTotalCount= (value) => {
    return {
        type: "SET_TOTAL_COUNT",
        payload: value,
    }
}

export const addPizzaToCart=(pizzaObj)=>{
    return{
        type: "ADD_PIZZA_TO_CART",
        payload: pizzaObj,
    }
}
export const dellAllCart=()=>{
    return{
        type: "DELL_ALL_CART",
    }
}