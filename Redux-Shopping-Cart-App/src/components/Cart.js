import React from "react";
import "./Cart.css";
import { useSelector,useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
const Cart = () => {
  const dispatch=useDispatch();
  const showCart=()=>{
    dispatch(cartActions.setShowCart());
  }
  const v = useSelector(state=>state.cart.totalQuantity);
  // console.log(v);
  return (
    <div className="cartIcon" onClick={showCart}>
      <h3>Cart: {v} Items</h3>
    </div>
  );
};

export default Cart;
