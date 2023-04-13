import React, { useEffect, memo, useMemo, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { toggleSidePanel } from "./redux/slices/appSlice";
import { fetchProducts } from "./redux/slices/productsSlice";
import { emptyCart } from "./redux/slices/cartSlice";

import TopBar from "./components/TopBar";
import Spacer from "./components/construction/Spacer";
import Button from "./components/construction/Button";
import ProductElement from "./components/ProductElement";
import SidePanel from "./components/construction/SidePanel";
import ShoppingBagElement from "./components/ShoppingBagElement";

const ShoppingBarSidePanel = React.memo(function ShoppingBarSidePanel() {
  const dispatch = useDispatch();
  const productsInCart = useSelector((state) => state.cartData.cartContent);
  const buttonStyle = useMemo(
    () => ({
      marginLeft: "10px",
    }),
    []
  );
  const onEmptyBagButtonClick = useCallback(() => dispatch(emptyCart()), []);
  const onContinueShoppingClick = useCallback(
    () => dispatch(toggleSidePanel({ id: "shoppingBag", action: false })),
    []
  );

  const EmptyState = useMemo(() => {
    return (
      <>
        <p className="normalText taCenter fsItalic">Nothing in the bag yet</p>
        <Button
          text="Continue shopping"
          center={true}
          onClick={onContinueShoppingClick}
        />
      </>
    );
  }, [onContinueShoppingClick]);

  return (
    <SidePanel id="shoppingBag" backgroundDark>
      <h1 className="mainText">Shopping bag</h1>

      {productsInCart.length > 0 ? (
        <>
          {productsInCart.map((element, index) => {
            return <ShoppingBagElement elementData={element} key={index} />;
          })}
          <Spacer height={20} />
          <Button
            text="Empty bag"
            version="secondary"
            style={buttonStyle}
            onClick={onEmptyBagButtonClick}
          />
        </>
      ) : (
        EmptyState
      )}
    </SidePanel>
  );
});

function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productsData.items);

  //* Initial loading of the products
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  //* Return
  return (
    <>
      <TopBar />
      <Spacer height={20} />

      <h1 className="mainText">New Products</h1>

      <div className="normalGrid">
        {products?.map((product) => (
          <ProductElement productData={product} key={product.id} />
        ))}
        <ShoppingBarSidePanel />
      </div>
    </>
  );
}

export default App;

