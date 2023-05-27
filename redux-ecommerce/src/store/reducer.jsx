const initialState = {
  products: [
    { name: 'Apple', price: 10 },
    { name: 'Orange', price: 15 },
    { name: 'Mango', price: 30 },
    { name: 'Grapes', price: 20 },
  ],
  cart: [],
  total: 0,
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PURCHASE':
      return {
        ...state,
        cart: [...state.cart, action.payload],
        total: state.total + action.payload.price,
      }
    case 'REMOVE':
      return {
        ...state,
        cart: state.cart.filter((i, index) => index !== action.payload.index),
        total: state.total - action.payload.price,
      }
    default:
      return state
  }
}

export default cartReducer
