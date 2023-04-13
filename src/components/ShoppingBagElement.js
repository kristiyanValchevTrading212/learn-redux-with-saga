import { memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import InputFieldIterator from "./construction/InputFieldIterator";
import { addToCart, removeFromCart } from "../redux/slices/cartSlice";

function ShoppingBagElement({ elementData }) {
  const dispatch = useDispatch();
  const { id, imageURL, name, count, price } = elementData;

  const onCountIncreased = useCallback(() => {
    dispatch(addToCart(elementData));
  }, [elementData]);

  const onCountDecreased = useCallback(() => {
    dispatch(removeFromCart(id));
  }, [id]);

  return (
    <div className="shoppingBagElement">
      <div className="normalFlex total">
        <img src={imageURL} alt="Product" />
        <p className="mainText total short">{name}</p>
      </div>
      <InputFieldIterator
        className="total"
        count={count}
        onNumberUp={onCountIncreased}
        onNumberDown={onCountDecreased}
      />

      <h3 className="mainText total short" style={{ marginLeft: "10px" }}>
        ${(price / 100).toFixed(2)}
      </h3>
    </div>
  );
}

export default memo(ShoppingBagElement);
