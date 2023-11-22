import React, { useState } from "react";

function Category ({ category, data, addToCart }) {

    const [ likes, setLikes] = useState({});

    const handleLike = (itemId) => {
        setLikes((prevLikes) => ({
            ...prevLikes,
            [itemId] : (prevLikes[itemId] || 0) + 1,
        }));
    };

    return (
        <div>
            
        </div>
    )
}