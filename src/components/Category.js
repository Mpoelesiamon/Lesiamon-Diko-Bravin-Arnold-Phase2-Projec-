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
                    <li key={itemId}>
                        <div>
                            <img src={item.imgUrl} alt={item.name} />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Category;
