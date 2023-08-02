const initialData = {
    cartCount: 0
}

const cartReducer = (state = initialData, action) => {
    // return state
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                // ...state,
                cartCount: ++state.cartCount
            }
            break;
        case 'REMOVE_FROM_CART':
                return {
                    // ...state,
                    cartCount: Math.max(0, --state.cartCount)
                }
            break;
        default:
            return state
            break;
    }
}

export default cartReducer