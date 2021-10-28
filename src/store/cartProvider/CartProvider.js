import { useReducer } from "react";
import CartContext from "../cartContext/cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0,
}
const cartReducer =(state,action)=>{
    switch(action.type){
        case "ADD":
             
             const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
             const existingItemIndex = state.items.findIndex(item => item.id === action.item.id)
             const existingCartItem = state.items[existingItemIndex];
            
             let updatedItems;
             if(existingCartItem){
               const updatedItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount + action.item.amount
                }
                updatedItems = [...state.items];
                updatedItems[existingItemIndex] = updatedItem
             }else{
                 updatedItems = state.items.concat(action.item)
             }
            
             return {
                 items: updatedItems,
                 totalAmount: updatedTotalAmount
             };
             

        case "REMOVE":
            const itemIndex  = state.items.findIndex(item => item.id === action.id);
            
            const existingItem = state.items[itemIndex];
            const currentTotalAmount = state.totalAmount -  existingItem.price
            let currentItems= state.items;
            if(existingItem.amount === 1){
                currentItems = state.items.filter(item => item.id !== action.id)
            }else {
                const updatedItem = {...existingItem, amount: existingItem.amount -1 }
                currentItems = [...state.items];
                currentItems[itemIndex] = updatedItem;
            }
            return {
              items: currentItems,
              totalAmount: currentTotalAmount,
            }   
        default:
            return defaultCartState

    }
}

const CartProvider = props => {
    const [cartState, dispatchCartAction]=useReducer(cartReducer, defaultCartState)
    const addItemToCartHandler = item => {
        dispatchCartAction({
            type: "ADD",
            item: item
        })

    }

    const removeItemHandler =(id)=>{
        dispatchCartAction({type: "REMOVE", id:id})

    }
    const cartContext = {
        items:cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemHandler,
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider