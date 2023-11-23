import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Category from './Category';
import Cart from './Cart';
import data from './data';
import HomePage from './Homepage';
import Dashboard from './Dashboard';
import Login from './Login';

function App() {
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState(data);
  const [user, setUser] = useState(null);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const addNewItem = (newItem, category) => {
    setItems((prevItems) => {
      const newCategoryItems = { ...prevItems[category], [newItem.name]: { ...newItem, id: Date.now() } };
      return { ...prevItems, [category]: newCategoryItems };
    });
  };

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <div>
        <Navbar user={user} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/dashboard"
            element={user ? <Dashboard categories={Object.keys(items)} onAddItem={addNewItem} /> : <Navigate to="/login" />}
          />
          <Route
            path="/electronic"
            element={<Category category="electronic" data={items.electronic} addToCart={addToCart} />}
          />
          <Route
            path="/fashion"
            element={<Category category="fashion" data={items.fashion} addToCart={addToCart} />}
          />
          <Route
            path="/gaming"
            element={<Category category="gaming" data={items.gaming} addToCart={addToCart} />}
          />
          <Route
            path="/sports"
            element={<Category category="sports" data={items.sports} addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} removeFromCart={removeFromCart} />}
          />
          <Route
            path="/login"
            element={<Login onLogin={handleLogin} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
