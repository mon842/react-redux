import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useDispatch, useSelector } from "react-redux";
import Notification from "./components/Notification";
import { uiActions } from "./store/ui-slice";

let isFirstRender=true;
function App() {
  const dispatch= useDispatch();
  const n= useSelector(state=>state.ui);
  console.log(n);
  const notification= useSelector(state=>state.ui.notification);
  const cart=useSelector(state=>state.cart);
  const isloggedin=useSelector(state=>state.auth.isLoggedin);
  
  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }
    const sendRequest = async()=>{
      console.log('ji');
      dispatch(uiActions.showNotification({
        open:true,
        message: 'data is sending to db',
        type: 'warning'
      }))

      const res= await fetch('https://redux-http-d2268-default-rtdb.firebaseio.com/cartItems.json',{
        method: 'PUT',
        body: JSON.stringify(cart)
      });
      
      const data=await res.json();

      dispatch(uiActions.showNotification({
        open:true,
        message: 'data is stored to db',
        type: 'success'
      }))
    }

    sendRequest().catch((err)=>{
      dispatch(uiActions.showNotification({
        open:true,
        message: 'failed error',
        type: 'error'
      }))
    });
  }, [cart])
  

  return (
    <div >
      {notification && <Notification type={notification.type} message={notification.message}/>}
      
      {!isloggedin ? <Auth /> : <Layout />}
      
    </div>
  );
}

export default App;
