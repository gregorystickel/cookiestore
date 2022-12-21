import  { createStore } from "redux";


let initialState = {
    isAuthenticated: false,
    cart: [],
    order: []
}

const reducer = (state = initialState, action ) => {
    switch (action.type) {
        case "REMOVECARTITEM":
            return {...state, cart: state.cart.filter((item) => item.id !== action.payload.id)}            
        case "ADDCART":
            return {...state, cart: [...state.cart, action.payload]}
        case "LOGIN":
            return {...state, isAuthenticated:  action.payload}
            
        case "LOGOUT":
            return {...state, isAuthenticated: action.payload}
        case "ADDORDER":
            return {...state, order: action.payload}
        default:
            return state
    }
}

const store = createStore(reducer)

export default store;