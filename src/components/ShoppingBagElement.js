import { useDispatch } from "react-redux";
import InputFieldIterator from "./construction/InputFieldIterator";
import { addToCart, removeFromCart } from "../redux/actions/cartActions";

function ShoppingBagElement({ elementData }) {
   const dispatch = useDispatch();

   const { id, imageURL, name, count, price } = elementData;

   return (
      <div className="shoppingBagElement">
         <div className="normalFlex total">
            <img src={imageURL} alt="Product" />
            <p className="mainText total short">{name}</p>
         </div>
         <InputFieldIterator
            className="total"
            selfState={true}
            initialNumber={count}
            onNumberUp={number => {
               dispatch(addToCart(elementData));
            }}
            onNumberDown={number => {
               dispatch(removeFromCart(id));
            }}
         />
         <h3 className="mainText total short" style={{ marginLeft: "10px" }}>${(price / 100).toFixed(2)}</h3>
      </div>
   );
}

export default ShoppingBagElement;