import React, { useState } from 'react';

function Category({ category, data, addToCart }) {

  const [likes, setLikes] = useState({});

  const handleLike = (itemId) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [itemId]: (prevLikes[itemId] || 0) + 1,
    }));
  };

  return (
    <div>
      <h2>{category}</h2>
      <ul>
        {Object.entries(data).map(([itemId, item]) => (
          <li id= 'item'key={itemId}>
            <div>
              <img id='item-img' src={item.imgUrl} alt={item.name} />
            </div>
            <div>
              <p>Name: {item.name}</p>
              <p>Price: Ksh{item.price}</p>
              <p>Details: {item.details}</p>
              <button onClick={() => addToCart({ id: itemId, ...item })}>Add to Cart</button>
              <button onClick={() => handleLike(itemId)}>Like</button>
              <p>Likes: {likes[itemId] || 0}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
