const initialData={
    cartCount:0
}

const cartReducer=(state=initialData,action)=>{
    // return state
    switch (action.type) {
        case 'ADD_TO_CART':
            return{
                cartCount:state.cartCount++
            }
            break;
    
        default:
            return state
            break;
    }
}

export default cartReducer