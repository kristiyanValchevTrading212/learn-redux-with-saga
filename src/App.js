import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { toggleSidePanel } from "./redux/slices/appSlice";
import { loadProductsData } from "./redux/slices/productsSlice";
import { emptyCart } from "./redux/slices/cartSlice";

import TopBar from "./components/TopBar";
import Spacer from "./components/construction/Spacer";
import Button from "./components/construction/Button";
import ProductElement from "./components/ProductElement";
import SidePanel from "./components/construction/SidePanel";
import ShoppingBagElement from "./components/ShoppingBagElement";

function App() {
   const dispatch = useDispatch();
   const result = useSelector(state => state);

   //* Initial loading of the products
   // useEffect(() => {
   //    dispatch(loadProductsData());
   // }, []);

   //* Return
   return (
      <>
         <TopBar />
         <Spacer height={20} />

         <h1 className="mainText">New Products</h1>
         <div className="normalGrid">
            {
               result?.productsData?.items?.map((element, index) => {
                  return (
                     <ProductElement productData={element} key={index} />
                  );
               })
            }
         </div>

         <SidePanel backgroundDark={true} id="shoppingBag">
            <h1 className="mainText">Shopping bag</h1>

            {
               result?.cartData?.cartContent?.length === 0 &&
               <>
                  <p className="normalText taCenter fsItalic">Nothing in the bag yet</p>
                  <Button text="Continue shopping" center={true} onClick={event => dispatch(toggleSidePanel({ id: "shoppingBag", action: false }))} />
               </>
            }
            {
               result?.cartData?.cartContent?.length !== 0 &&
               <>
                  {
                     result?.cartData?.cartContent?.map((element, index) => {
                        return (
                           <ShoppingBagElement elementData={element} key={index} />
                        );
                     })
                  }
                  <Spacer height={20} />
                  <Button text="Empty bag" version="secondary" style={{ marginLeft: "10px" }} onClick={event => dispatch(emptyCart())} />
               </>
            }
         </SidePanel>
      </>
   );
}

export default App;