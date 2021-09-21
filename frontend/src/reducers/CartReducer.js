const initialState = {
    products: [],
    address: [],
    discount: 0,
    delivery: 0,
};

export default (state = initialState, action) => {
   switch(action.type) {
        case 'ADD_PRODUCT':
            let products = [...state.products];
            let id = action.payload.data.id;


            let index = products.findIndex(item => item.id === id);
            if(index > -1) {
                products[index].qt += action.payload.qt;
            } else {
                products.push({
                    ...action.payload.data,
                    qt: action.payload.qt
                });
            }
            
            console.log(products);
            return{...state, products: products};
            break;
    
      /* case 'SET_TOKEN':
           return{... state, token: action.payload.token};
       break;
       case 'SET_NAME':
           return {...state, name: action.payload.name};
       break; */
   }

   return state;
}