import React from 'react';

const Categories = ({ categories, filterItems,selectedCategory }) => {
  return (
    <div className="btn-container">

      {categories.map((category, index) => {

        return (
          <button
            type="button"
            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );

      })}
      
    </div>
  );
};

export default Categories;