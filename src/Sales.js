import React from 'react';
import './index.css';
import data from "./data.json";
import Products from "./components/Products";
import Filter from './components/Filter';
import Cart from './components/Cart';
import store from "./store";
import { Provider } from "react-redux";
class Sales extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
      //  size: "",
      sort: "",
    };
  }
  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: cartItems.filter((x) => x._id !== product._id),
    });
    localStorage.setItem("cartItems",
      JSON.stringify(cartItems.filter((x) => x._id !== product._id))
    );

  };
  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach(item => {
      if (item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 });

    }
    this.setState({ cartItems });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };


  sortProducts = (event) => {
    const sort = event.target.value;
    console.log(event.target.value);
    this.setState((state) => ({
      sort: sort,
      products: this.state.products.slice().sort((a, b) => (
        sort === "lowest"
          ? ((a.price > b.price) ? 1 : -1) :
          sort === "highest" ?
            ((a.price < b.price) ? 1 : -1) :
            ((a._id < b._id) ? 1 : -1)
      ))
    }));
  };


  // filterProducts(size){}
  render() {
    return (

      <Provider store={store}>
        <>
          <div className="grid-container">

            <main>  <div className="content">
              <div className="main">
                <Filter 
                count={this.state.products.length}
                  size={this.state.size}
                  sort={this.state.sort}
                  filterProducts={this.filterProducts}
                  sortProducts={this.sortProducts}
                > </Filter>
                <Products
                products={this.state.products}
                  addToCart={this.addToCart}></Products>
              </div>
              <div className="sidebar">
                <Cart cartItems={this.state.cartItems}
                  removeFromCart={this.removeFromCart}
                />
              </div>
            </div>  
            </main>
          </div>
        </>
      </Provider>
    );
  }
}


export default Sales;
