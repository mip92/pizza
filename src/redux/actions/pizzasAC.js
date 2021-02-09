import axios from "axios";
export const fetchPizzas=(category,sortBy)=>(dispatch)=> {
    dispatch(setLoading(true))
    axios.get(`http://localhost:3001/pizzas?${category === 0 ? '' : `category=${category}`}${sortBy === 0 ? '&_sort=rating&_order=desc' : ''}${sortBy === 1 ? '&_sort=price&_order=asc' : ''}${sortBy === 2 ? '&_sort=name&_order=asc' : ''}`).then(resp => {
        dispatch(setPizzas(resp.data))
    })
}

export const setPizzas = (items) => {
    return {
        type: "SET_PIZZAS",
        payload: items,
        isLoading: false,
    }
}
export const setLoading = (isLoading) => {
    return {
        type: "SET_LOADING",
        isLoading,
    }
}