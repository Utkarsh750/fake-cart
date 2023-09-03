import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './modules/Home';
import Footer from './components/Footer/footer';
import { Routes, Route } from 'react-router-dom'
import Product from './modules/Product/product';
import Products from './modules/Products/products';
import CategoryProducts from './modules/CategoryProducts/categoryproducts';
import Cart from './modules/Cart/cart';

function App() {
  return (
    <div >
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products/:id" element={<Product/>} />
        <Route path="/products" element={<Products/>} />
        <Route path='/categories/:name' element={<CategoryProducts />} />
        <Route path='cart' element={<Cart/>} />
        <Route path='*' element={<div>404</div>} />
        
      </Routes>
     
      <Footer />
    </div>
  );
}

export default App;
