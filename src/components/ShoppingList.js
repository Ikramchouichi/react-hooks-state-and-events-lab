
import React, { useState } from 'react';
import Item from './Item';

function ShoppingList({ items }) {
  // State variable to keep track of the selected category
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Event handler for updating the selected category
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Filter items based on the selected category
  const filteredItems = selectedCategory !== 'All' ? items.filter(item => item.category === selectedCategory) : items;

  return (
    <div className="ShoppingList">
      <div className="Filter">
        {/* Use the state variable and event handler */}
        <select name="filter" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {/* Display filtered items */}
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
