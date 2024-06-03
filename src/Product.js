import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id,name, image, price, vendor,category }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        name: name,
        image: image,
        price: price,
        vendor: vendor,
        category: category,
        
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{name}</p>
        <p className="product__price">
          <small>Rs </small>
          <strong>{price}</strong>
        </p>
        <p><p>{category}</p></p>
        <p><p>{vendor}</p></p>
        
      </div>

      <img src={image} alt=""/>

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
