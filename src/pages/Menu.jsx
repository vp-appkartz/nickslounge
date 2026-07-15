import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuData } from '../data/menuData';
import './Menu.css';

const Menu = () => {
  const [activeTab, setActiveTab] = useState('appetizers');

  const categories = [
    { id: 'appetizers', label: 'Appetizers' },
    { id: 'salads', label: 'Salads' },
    { id: 'flatbreads', label: 'Flatbreads' },
    { id: 'mains', label: 'Mains' },
    { id: 'burgersWrapsSandwiches', label: 'Burgers & Wraps' },
    { id: 'pastas', label: 'Pastas' },
    { id: 'desserts', label: 'Desserts' }
  ];

  const drinkCategories = [
    { id: 'bulldogs', label: 'Bulldogs' },
    { id: 'margaritas', label: 'Margaritas' },
    { id: 'mojitos', label: 'Mojitos' },
    { id: 'mules', label: 'Mules' },
    { id: 'longIslandIcedTeas', label: 'Long Island Iced Teas' },
    { id: 'sangria', label: 'Sangria' }
  ];

  const [isDrinksMode, setIsDrinksMode] = useState(false);

  const currentCategories = isDrinksMode ? drinkCategories : categories;
  // Fallback if changing modes and activeTab doesn't exist
  const currentTab = currentCategories.find(c => c.id === activeTab) ? activeTab : currentCategories[0].id;
  
  const currentItems = isDrinksMode ? menuData.drinks[currentTab] : menuData[currentTab];

  const toggleMode = (mode) => {
    setIsDrinksMode(mode);
    setActiveTab(mode ? drinkCategories[0].id : categories[0].id);
  };

  return (
    <div className="page-container menu-page">
      <div className="menu-header">
        <h1 className="section-title">Our Menu</h1>
        <div className="mode-toggle">
          <button 
            className={`mode-btn ${!isDrinksMode ? 'active' : ''}`}
            onClick={() => toggleMode(false)}
          >
            Food
          </button>
          <button 
            className={`mode-btn ${isDrinksMode ? 'active' : ''}`}
            onClick={() => toggleMode(true)}
          >
            Drinks
          </button>
        </div>
      </div>

      <div className="container">
        {/* Categories Navigation */}
        <div className="categories-wrapper">
          <ul className="categories-list">
            {currentCategories.map((category) => (
              <li key={category.id}>
                <button
                  className={`category-btn ${currentTab === category.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(category.id)}
                >
                  {category.label}
                  {currentTab === category.id && (
                    <motion.div layoutId="category-underline" className="category-underline" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Menu Items */}
        <div className="menu-grid">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="menu-items-container"
            >
              {currentItems && currentItems.map((item, index) => (
                <motion.div 
                  key={item.name} 
                  className="menu-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="menu-item-header">
                    <h3 className="menu-item-name">{item.name}</h3>
                    <div className="menu-item-dots"></div>
                    <span className="menu-item-price">
                      {typeof item.price === 'string' ? item.price : item.prices ? 
                        Object.entries(item.prices).map(([size, price]) => `${size}: ${price}`).join(' | ') : 
                        item.price}
                    </span>
                  </div>
                  {item.description && (
                    <p className="menu-item-desc">{item.description}</p>
                  )}
                  {item.addons && (
                    <p className="menu-item-addons"><i>{item.addons}</i></p>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Menu;
