import React, { useState } from 'react';

function Dashboard({ categories, onAddItem }) {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemImageUrl, setItemImageUrl] = useState('');
  const [itemDetails, setItemDetails] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      name: itemName,
      price: parseFloat(itemPrice),
      imgUrl: itemImageUrl,
      details: itemDetails,
    };

    onAddItem(newItem, selectedCategory);

    
    setItemName('');
    setItemPrice('');
    setItemImageUrl('');
    setItemDetails('');
    setSelectedCategory('');
  };

  return (
    <div>
      <h2>Add Item to Dashboard</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Item Name:
          <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} required />
        </label>
        <label>
          Item Price:
          <input type="number" value={itemPrice} onChange={(e) => setItemPrice(e.target.value)} required />
        </label>
        <label>
          Item Image URL:
          <input type="url" value={itemImageUrl} onChange={(e) => setItemImageUrl(e.target.value)} required />
        </label>
        <label>
          Item Details:
          <textarea value={itemDetails} onChange={(e) => setItemDetails(e.target.value)} required />
        </label>
        <label>
          Category:
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} required>
            <option value="" disabled>Select a category</option>
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </label>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default Dashboard;
