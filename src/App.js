import React, { useState,useEffect } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {

  const [menuItems, setMenuItems] = useState(items);
  const [changeItems] = useState(items);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const allCategories = ['all', ...new Set(items.map((item) => item.category))];
    setCategories(allCategories);
    setMenuItems(items);
    setSelectedCategory('all')
  },[changeItems])

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      setSelectedCategory('all');
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
    setSelectedCategory(category)
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} selectedCategory={selectedCategory} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;