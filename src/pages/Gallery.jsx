import { motion } from 'framer-motion';
import './Gallery.css';

const Gallery = () => {
  // Placeholder images for the gallery
  const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Cocktail on bar' },
    { id: 2, src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Restaurant interior' },
    { id: 3, src: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Plated food' },
    { id: 4, src: 'https://images.unsplash.com/photo-1574966739987-65e386c750b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Lounge area' },
    { id: 5, src: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Bartender pouring drink' },
    { id: 6, src: 'https://images.unsplash.com/photo-1563514757134-2e99d14690d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Appetizers' },
    { id: 7, src: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Steak dish' },
    { id: 8, src: 'https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Group cheering with drinks' },
    { id: 9, src: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Steak sandwich' },
  ];

  return (
    <div className="page-container gallery-page">
      <div className="container">
        <h1 className="section-title">Photo Gallery</h1>
        <p className="gallery-desc">Take a glimpse into the atmosphere and culinary delights at Nick's Lounge.</p>
        
        <div className="gallery-grid">
          {images.map((img, index) => (
            <motion.div 
              key={img.id} 
              className="gallery-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={img.src} alt={img.alt} className="gallery-image" loading="lazy" />
              <div className="gallery-overlay">
                <span>{img.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
