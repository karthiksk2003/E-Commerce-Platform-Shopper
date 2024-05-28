import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Shop from './pages/shop';

import Product from './pages/product';
import Cart from './pages/cart';
import Loginsignup from './pages/Loginsignup';
import Footer from './components/Footer/Footer';
import men_banner from './components/Assets/banner_mens.png'
import women_banner from './components/Assets/banner_women.png'
import kids_banner from './components/Assets/banner_kids.png'
import ShopCategory from './pages/ShopCategory'; 
import ShopContextProvider from './Context/ShopContext';


export function App() {
  return (
    <div>
     <BrowserRouter>
        <Navbar />
        <ShopContextProvider>
     
       <Routes>
       
       <Route exact path='/' element={<Shop/>}/>
       <Route path='/mens' element={<ShopCategory  banner={men_banner} category="men"/>}/>
       <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
       <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid"/>}/>
       <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
       </Route>
       <Route path='/cart' element={<Cart/>}/>
       <Route path='/login' element={<Loginsignup/>}/>

       </Routes>
      
       </ShopContextProvider>
       <Footer/>
       
    </BrowserRouter>
    </div>
  );
}
export default App;
