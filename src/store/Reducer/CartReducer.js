const iniState = {
    cartItems:[
        // {2:{name:'Valeed Khan',price:56,proid:2,proimg:'images/home/product1.jpg',quantity:1,totoal:56}},
        // {1:{name:'Valeed Khan 1',price:565,proid:1,proimg:'images/home/product2.jpg',quantity:1,totoal:565}}
    ],
    cartItemsKeys:[],
    total:0
}

export const CartReducer = (state = iniState,action) => {
    let cartItemsCopy = [...state.cartItems];
    let itemToUpdate;
    let total = 0;
    let cartItemsKeyIndex = null;
    const calculateTotal = () => {
        let t = 0;
        cartItemsCopy.forEach(item => {
            let key = Object.keys(item);
            t += item[key[0]].totoal;
        });
        return t;
    }
    switch (action.type) {
        case 'AddToCart':
            cartItemsCopy.push(action.payload);
            let keyArray = Object.keys(action.payload);
            let key = keyArray[0];
            const cartItemsKeysCopy = [...state.cartItemsKeys];
            if(cartItemsKeysCopy.indexOf(Number(key)) === -1){
                cartItemsKeysCopy.push(Number(key));
            }
            total = calculateTotal();
            return {...state,cartItems:cartItemsCopy,cartItemsKeys:cartItemsKeysCopy,total:total};
        case 'IncrementItemQuantity':
            const {idforincrement,indexforincrement} = action.payload;
            itemToUpdate = {...state.cartItems[indexforincrement]};
            itemToUpdate[idforincrement].quantity = Number(itemToUpdate[idforincrement].quantity)+1;
            itemToUpdate[idforincrement].totoal = itemToUpdate[idforincrement].quantity*itemToUpdate[idforincrement].price;
            cartItemsCopy[indexforincrement] = itemToUpdate;
            total = calculateTotal();
            return {...state,cartItems:cartItemsCopy,total:total};
        case 'DecrementItemQuantity':
                const {idfordecrement,indexfordecrement} = action.payload;
                itemToUpdate = {...state.cartItems[indexfordecrement]};
                if(itemToUpdate[idfordecrement].quantity === 1) {
                    let itemId = Number(Object.keys(itemToUpdate));
                    let cartItemsKeysCopy2 = [...state.cartItemsKeys];
                    cartItemsKeyIndex = cartItemsKeysCopy2.indexOf(itemId);
                    cartItemsKeysCopy2.splice(cartItemsKeyIndex,1);
                    cartItemsCopy.splice(indexfordecrement,1);
                    total = calculateTotal();
                    return {...state,cartItems:cartItemsCopy,cartItemsKeys:cartItemsKeysCopy2,total:total};
                };
                itemToUpdate[idfordecrement].quantity =  Number(itemToUpdate[idfordecrement].quantity)-1;
                itemToUpdate[idfordecrement].totoal = itemToUpdate[idfordecrement].quantity*itemToUpdate[idfordecrement].price;
                cartItemsCopy[indexfordecrement] = itemToUpdate;
                total = calculateTotal();
                return {...state,cartItems:cartItemsCopy,total:total};
        case 'DeleteItem':
            const {indexfordelete} = action.payload;
            const itemId = Number(Object.keys(cartItemsCopy[indexfordelete]));
            const cartItemsKeysCopy2 = [...state.cartItemsKeys];
            cartItemsKeyIndex = cartItemsKeysCopy2.indexOf(itemId);
            cartItemsKeysCopy2.splice(cartItemsKeyIndex,1);
            cartItemsCopy.splice(indexfordelete,1);
            total = calculateTotal();
            return {...state,cartItems:cartItemsCopy,cartItemsKeys:cartItemsKeysCopy2,total:total};
        default:
            return state;
    }
}