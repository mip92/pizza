const initialState = {
    totalPrice: 0,
    totalCount: 0,
    items: {
        'p0': [],
        'p1': [],
        'p2': [],
        'p3': [],
        'p4': [],
        'p5': [],
        'p6': [],
        'p7': [],
        'p8': [],
        'p9': [],
    },
}


function cartReducer(state = initialState, action) {
    switch (action.type) {
        /*case "SET_TOTAL_PRICE":
            return {
                state.items.map.get(key)
            }*/
       case "DELL_ALL_CART":
            return {
                ...state,
                totalPrice: 0,
                totalCount: 0,
                items: {
                    'p0': [],
                    'p1': [],
                    'p2': [],
                    'p3': [],
                    'p4': [],
                    'p5': [],
                    'p6': [],
                    'p7': [],
                    'p8': [],
                    'p9': [],
                },
            }
        case "SET_TOTAL_COUNT":
            return {
                ...state,
                totalCount: state.totalCount + action.payload
            }
        case "ADD_PIZZA_TO_CART":
            return {
                ...state,
                totalPrice:state.totalPrice+action.payload.price,
                totalCount:state.totalCount+1,
                items: {
                    ...state.items,
                    [action.payload.id]:
                        [...state.items[action.payload.id],
                            action.payload
                        ]
                }
                /*items: {
                    ...state.items,
                    [action.payload.id]:
                        state.items[action.payload.id].indexOf( action.payload.id ) !== -1 ? [...state.items[action.payload.id],
                            action.payload]:[...state.items[action.payload.id],
                            action.payload]


                }*/

            }

        default:
            return state
    }
}

export default cartReducer