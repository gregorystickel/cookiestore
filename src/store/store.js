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
            const { payload } = action
            const item = state.cart.find(
                product => product.id === payload.id
            ); 
            console.log(item)
            if (item) {
                return {
                    ...state,
                    cart: state.cart.map(item => item.id === payload.id
                      ? {
                        ...item,
                        quantity: item.quantity + payload.quantity,
                      }
                      : item
                    ),
                    totalPrice: state.totalPrice + payload.price,
                  };
            }    



            return {...state, cart: [...state.cart, action.payload]}
        case "UPDATEQUANTITY":
            //const { payload } = action
            console.log("Payload Update Quantiy", action.payload)
            const item2 = state.cart.find(product => product.id === action.payload.id);
            console.log(item2);
                return {
                    ...state,
                    cart: state.cart.map(item => item.id === action.payload.id
                      ? {
                        ...item,
                        quantity: action.payload.quantity,
                      }
                      : item
                    ),
                    totalPrice: state.totalPrice + action.payload.price,
                  };    
                  
        case "LOGIN":
            return {...state, isAuthenticated:  action.payload}
            
        case "LOGOUT":
            return {...state, isAuthenticated: action.payload}
        case "ADDORDER":
            return {...state, order: action.payload}
        case "RESETCART":
            return {...state, cart: []}    
        default:
            return state
    }
}

const store = createStore(reducer)

export default store;