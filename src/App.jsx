import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Preloader from './components/Preloader';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import ProductDetails from './components/Pages/ProductDetails';
import ProductList from './components/Pages/ProductList';
import Cart from './components/Pages/Cart';
import Checkout from './components/Pages/Checkout';
import StoreList from './components/Pages/StoreList';
import ShopProductList from './components/Pages/ShopProductList';
import DoctorsDetails from './components/Pages/DoctorsDetails';
import DoctorList from './components/Pages/DoctorList';
import BlogDetails from './components/Pages/BlogDetails';
import BlogsList from './components/Pages/BlogsList';
import AnimalList from './components/Pages/AnimalList';

const App = () => {
  return (
    <Router>
      <Preloader />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productDetails" element={<ProductDetails />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/storeList" element={<StoreList />} />
        <Route path="/shopProductList" element={<ShopProductList />} />
        <Route path="/doctorsDetails" element={<DoctorsDetails />} />
        <Route path="/doctorList" element={<DoctorList />} />
        <Route path="/blogDetails" element={<BlogDetails />} />
        <Route path="/blogsList" element={<BlogsList />} />
        <Route path="/animalList" element={<AnimalList />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
