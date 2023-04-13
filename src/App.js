import { useDispatch, useSelector } from "react-redux";

import { toggleSidePanel } from "./redux/actions/appActions";
import { productsList } from "./redux/actions/productActions";
import { emptyCart } from "./redux/actions/cartActions";

import { faArrowRotateLeft } from "@fortawesome/free-solid-svg-icons";

import TopBar from "./components/TopBar";
import Spacer from "./components/construction/Spacer";
import Button from "./components/construction/Button";
import ProductElement from "./components/ProductElement";
import SidePanel from "./components/construction/SidePanel";
import ShoppingBagElement from "./components/ShoppingBagElement";

function App() {
   const dispatch = useDispatch();
   const result = useSelector(state => state);

   return (
      <>
         <TopBar />
         <Spacer height={20} />


         <h1 className="mainText">New Products</h1>
         {
            result?.productsData?.items?.length === 0 &&
            <Button circle={true} icon={faArrowRotateLeft} onClick={event => {
               dispatch(productsList());
            }} />
         }
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
                  <Button text="Continue shopping" center={true} onClick={event => dispatch(toggleSidePanel("shoppingBag", false))} />
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