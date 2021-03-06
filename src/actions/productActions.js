import { FETCH_PRODUCTS } from "../types";
//import { ORDER_PRODUCTS_BY_PRICE } from "../types";

export const fetchProducts = () => async (dispatch) => {
    const res = await fetch("/api/products");
    const data = await res.json();
    console.log(data);
    dispatch({
      type: FETCH_PRODUCTS,
      payload: data,
    });
};
