const products = {
  productList : []
}

export default function productReducer(state = products, action){
  switch(action.type){
    case 'ADD_TO_CART':
      return {...state, productList: [...state.productList, action.product] };
    default:
      return state;
  }
}
