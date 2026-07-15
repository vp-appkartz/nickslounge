import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { menuData } from '../data/menuData';
import { Clock } from 'lucide-react';
import './Offers.css';

const Offers = () => {
  const { happyHourSpecials } = menuData;
  const heroRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="offers-page">
      {/* 1. Parallax Hero Section */}
      <section className="offers-hero" ref={heroRef}>
        <motion.div 
          className="offers-hero-bg"
          style={{ y: heroY, opacity: heroOpacity }}
        />
        <div className="offers-hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Exclusive Specials
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Elevate your evenings at Nick's Lounge
          </motion.p>
        </div>
      </section>

      {/* 2. Immersive Happy Hour Section */}
      <section className="happy-hour-immersive">
        <div className="container">
          <motion.div 
            className="hh-header"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <Clock className="hh-icon" />
            <h2 className="hh-title">Happy Hour</h2>
            <p className="hh-time">{happyHourSpecials.time}</p>
          </motion.div>
          
          <div className="hh-items-grid">
            {happyHourSpecials.foodAndDrink.map((item, index) => (
              <motion.div 
                key={index} 
                className="hh-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="hh-item-header">
                  <h3 className="hh-item-name">{item.name}</h3>
                  <div className="hh-item-dots"></div>
                  <span className="hh-item-price">${item.price.toFixed(2)}</span>
                </div>
                {item.addons && <p className="hh-item-addon">{item.addons}</p>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Editorial Z-Pattern Daily Deals */}
      <section className="editorial-deals">
        <div className="container">
          <div className="section-header text-center mb-5">
            <h2 className="section-title">The Week's Lineup</h2>
          </div>
          
          <div className="editorial-grid">
            {menuData.dailyDeals.map((deal, index) => (
              <motion.div 
                key={deal.id}
                className={`editorial-row ${index % 2 !== 0 ? 'reversed' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <div className="editorial-image-wrapper">
                  <div className="editorial-image-inner">
                    <img src={deal.image} alt={deal.name} />
                  </div>
                </div>
                <div className="editorial-content">
                  <h3 className="editorial-day">{deal.day}</h3>
                  <h4 className="editorial-name">{deal.name}</h4>
                  <p className="editorial-desc">
                    Immerse yourself in {deal.name}. Enjoy our specially curated atmosphere, premium drinks, and the signature Nick's Lounge experience.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offers;
