import { createSlice } from "@reduxjs/toolkit";

export const cartSlice=createSlice({
    name: 'cart',
    initialState: {
        itemsList: [],
        totalQuantity: 0,
        showCart:false
    },
    reducers:{
        addToCart(state,action){
            const newItem=action.payload;

            const existingItem=state.itemsList.find(item=>item.id===newItem.id);
            if(existingItem) {
                existingItem.quantity+=1;
                existingItem.totalPrice+=existingItem.price;
            }
            else{
                state.itemsList.push({
                    name: newItem.name,
                    price: newItem.price,
                    id: newItem.id,
                    quantity: 1,
                    totalPrice: newItem.price,
                })
                state.totalQuantity+=1;
            }
            
        },
        removeFromCart(state,action){
            const Id=action.payload;

            const deleteItem=state.itemsList.find(item=>item.id===Id);
            if(deleteItem.quantity===1) {
                state.itemsList=state.itemsList.filter(item=>item.id!==Id);
                state.totalQuantity-=1;
            }
            else if(deleteItem) {
                deleteItem.quantity-=1;
                deleteItem.totalPrice-=deleteItem.price;
            }
        },
        setShowCart(state){
            state.showCart=!state.showCart;
        }
    }
});

export const cartActions=cartSlice.actions;