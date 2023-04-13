import { useDispatch, useSelector } from "react-redux";

import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

import Button from "./construction/Button";
import { toggleSidePanel } from "../redux/actions/appActions";

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
               onClick={event => dispatch(toggleSidePanel("shoppingBag"))}
            />
         </div>
         <div className="underTopBar"></div>
      </>
   );
}

export default TopBar;