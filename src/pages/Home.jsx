import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Utensils, GlassWater, Clock, Star, Calendar } from 'lucide-react';
import { menuData } from '../data/menuData';
import './Home.css';

const Home = () => {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const yParallaxSlow = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const [selectedDealDay, setSelectedDealDay] = useState(menuData.dailyDeals[0].id);

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const currentDeal = menuData.dailyDeals.find(d => d.id === selectedDealDay);

  return (
    <div className="home-dark">
      {/* 1. Immersive Hero Section */}
      <section className="hero-immersive">
        <motion.div 
          className="hero-bg"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          style={{ backgroundImage: `url('/media/hero-dark.jpg')`, y: yParallaxSlow }}
        />
        <div className="hero-gradient"></div>
        <div className="container hero-content-immersive">
          <motion.div variants={staggerContainer} initial="hidden" animate="show">
            <motion.h1 className="hero-title-massive" variants={fadeInUp}>
              Nick's <br/><span className="text-gold">Lounge</span>
            </motion.h1>
            <motion.p className="hero-subtitle-elegant" variants={fadeInUp}>
              Where luxury meets local comfort. An unforgettable nightlife experience.
            </motion.p>
            <motion.div className="hero-buttons" variants={fadeInUp}>
              <Link to="/reservation" className="btn btn-primary btn-lg magnetic-btn">Book Your Table</Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. The Experience (Asymmetric Parallax) */}
      <section className="section experience-section">
        <div className="container">
          <div className="experience-grid">
            <motion.div 
              className="experience-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="section-title-left">Crafted to <br/>Perfection</h2>
              <p className="editorial-text">
                Immerse yourself in an atmosphere designed for those who appreciate the finer things. From our hand-mixed signature cocktails to our curated music selection, every detail at Nick's Lounge is crafted to elevate your evening.
              </p>
              <div className="feature-list">
                <div className="feature-item">
                  <GlassWater className="text-gold" size={24} />
                  <span>Artisan Cocktails</span>
                </div>
                <div className="feature-item">
                  <Star className="text-gold" size={24} />
                  <span>VIP Bottle Service</span>
                </div>
              </div>
              <Link to="/menu" className="btn btn-outline btn-lg mt-4">Explore the Menu</Link>
            </motion.div>
            
            <motion.div 
              className="experience-image-wrapper"
              style={{ y: yParallax }}
            >
              <img src="/media/feature-drink.jpg" alt="Signature Cocktail" className="experience-image" />
              <div className="image-accent-border"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. The Menu Teaser (Asymmetric) */}
      <section className="section menu-teaser-section">
        <div className="container">
          <div className="experience-grid reverse">
            <motion.div 
              className="experience-text"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="section-title-left">Culinary <br/>Excellence</h2>
              <p className="editorial-text">
                Our kitchen serves up a mouth-watering array of premium dishes. Whether you're craving our famous wings or a decadent steak, our menu is designed to satisfy the most discerning palates.
              </p>
              <Link to="/gallery" className="btn btn-primary btn-lg mt-4">View Gallery</Link>
            </motion.div>
            
            <motion.div 
              className="experience-image-wrapper"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <img src="/media/feature-food.jpg" alt="Premium Food" className="experience-image" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Interactive Deals Accordion */}
      <section className="section deals-immersive">
        <div className="deals-bg" style={{ backgroundImage: `url('/media/atmosphere.jpg')` }}></div>
        <div className="deals-overlay"></div>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-5"
            style={{ position: 'relative', zIndex: 2 }}
          >
            <h2 className="section-title-light">The <span className="text-gold">Week's</span> Lineup</h2>
          </motion.div>

          <div className="accordion-deals">
            {menuData.dailyDeals.map(deal => (
              <motion.div 
                key={deal.id}
                className={`accordion-item ${selectedDealDay === deal.id ? 'active' : ''}`}
                onClick={() => setSelectedDealDay(deal.id)}
                layout
              >
                <div className="accordion-header">
                  <h3>{deal.day}</h3>
                  <span className="accordion-name">{deal.name}</span>
                </div>
                <AnimatePresence>
                  {selectedDealDay === deal.id && (
                    <motion.div 
                      className="accordion-body"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <p>Join us for our exclusive {deal.name} event. Great atmosphere, fantastic drinks, and the best crowd in town!</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
