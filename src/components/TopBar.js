import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

import Button from "./construction/Button";
import { toggleSidePanel } from "../redux/slices/appSlice";

function TopBar() {
   const dispatch = useDispatch();
   const cartData = useSelector(state => state.cartData);

   return (
      <>
         <div className="topBar">
            <h1 className="mainText free nUnder short">Shop</h1>
            <Button
               icon={faShoppingBag}
               circle={true}
               notificationNumber={cartData.cartContent.length}
               style={{ marginLeft: "auto" }}
               onClick={event => dispatch(toggleSidePanel({ id: "shoppingBag" }))}
            />
         </div>
         <div className="underTopBar"></div>
      </>
   );
}

export default memo(TopBar);