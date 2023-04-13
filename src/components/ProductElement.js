import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/slices/cartSlice";

import { faMinus, faShoppingBag } from "@fortawesome/free-solid-svg-icons";

import Button from "./construction/Button";

function ProductElement({ productData }) {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cartData);

  const { id, name, color, price, category, brand, imageURL } = productData;

  return (
    <div className="gridElement">
      <div className="gridElementImage">
        <img src={imageURL} alt="Product" />
      </div>
      {cartData.cartContent.find((element) => element.id === id) && (
        <p
          className="normalText"
          style={{ position: "absolute", marginTop: "5px" }}
        >
          x
          {cartData.cartContent.reduce((prevValue, currentValue) => {
            if (currentValue.id === id) prevValue += currentValue.count;
            return prevValue;
          }, 0)}
        </p>
      )}
      <h3 className="mainText">{name}</h3>
      <p className="normalText weUnder">color: {color}</p>
      <p className="normalText weUnder">category: {category}</p>
      <p className="normalText">brand: {brand}</p>

      <div className="normalFlex weUnder">
        <h3 className="mainText total">${(price / 100).toFixed(2)}</h3>
        {cartData.cartContent.find((element) => element.id === id) && (
          <Button
            icon={faMinus}
            circle={true}
            total={true}
            onClick={(event) => dispatch(removeFromCart(id))}
          />
        )}
        <Button
          icon={faShoppingBag}
          circle={true}
          total={true}
          onClick={(event) => dispatch(addToCart(productData))}
        />
      </div>
    </div>
  );
}

export default memo(ProductElement);

