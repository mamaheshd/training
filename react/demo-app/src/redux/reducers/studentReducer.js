// import cartReducer from "./cartReducer"

const initialData = {
    name:'Rajendra'
}

const studentReducer = (state = initialData, action) => {
    switch (action.type) {
        case'CHANGE_NAME':
        return{
            ...state,
            name:action.payload
        }
        default:
            return state
    }
}
export default studentReducer