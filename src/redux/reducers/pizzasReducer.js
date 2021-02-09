const initialState = {
    items: [],
    isLoading: false
}

function pizzas(state = initialState, action) {
    switch (action.type) {
        case "SET_PIZZAS":
            return {
                ...state,
                items: action.payload,
                isLoading: action.isLoading,
            }
        case "SET_LOADING":
            return {
                ...state,
                isLoading: action.isLoading,
            }
        default:
            return state
    }
}

export default pizzas