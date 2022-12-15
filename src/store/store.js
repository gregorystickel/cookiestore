import  { createStore } from "redux";


let initialState = {
    cart: []
}

const reducer = (state = initialState, action ) => {
    switch (action.type) {
        case "INCREASE":
            return {...state, count: state.count + 5}
        case "DECREASE":
            return {...state, count: state.count - 1}
        case "REMOVECARTITEM":
            return  {cart: state.cart.filter((item) => item.id !== action.payload.id)}
            console.log(action.payload)
            //{...state, cart: [...state.filter(item => item !== action.payload)]}
        case "ADDCART":
            return {...state, cart: [...state.cart, action.payload]}
        default:
            return state
    }
}

const store = createStore(reducer)

export default store;