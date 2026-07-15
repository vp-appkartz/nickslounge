import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, User, Phone, Mail } from 'lucide-react';
import './Reservation.css';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, send data to backend here
    setTimeout(() => {
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <div className="page-container reservation-page">
      <div className="container">
        <h1 className="section-title">Book a Table</h1>
        
        <div className="reservation-wrapper">
          <motion.div 
            className="reservation-info"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Join Us for an <span className="text-primary">Unforgettable</span> Experience</h2>
            <p>
              Whether it's a romantic dinner, a family gathering, or drinks with friends, 
              we'll make sure your time at Nick's Lounge is exceptional.
            </p>
            <div className="info-cards">
              <div className="info-card">
                <h3>Private Events</h3>
                <p>Looking to host a party? Contact us directly for private event bookings and special menus.</p>
              </div>
              <div className="info-card">
                <h3>Large Groups</h3>
                <p>For parties of 8 or more, please call us to ensure we can accommodate your group comfortably.</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="reservation-form-container"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {isSubmitted ? (
              <motion.div 
                className="success-message"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="success-icon">✓</div>
                <h2>Reservation Confirmed!</h2>
                <p>Thank you, {formData.name}. We look forward to hosting you on {formData.date} at {formData.time}.</p>
                <button className="btn btn-outline mt-4" onClick={() => setIsSubmitted(false)}>Make Another Booking</button>
              </motion.div>
            ) : (
              <form className="reservation-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label><User size={16}/> Full Name</label>
                    <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="John Doe" />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label><Mail size={16}/> Email Address</label>
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="john@example.com" />
                  </div>
                  <div className="form-group">
                    <label><Phone size={16}/> Phone Number</label>
                    <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="(555) 123-4567" />
                  </div>
                </div>

                <div className="form-row triple">
                  <div className="form-group">
                    <label><Calendar size={16}/> Date</label>
                    <input type="date" name="date" required value={formData.date} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label><Clock size={16}/> Time</label>
                    <select name="time" required value={formData.time} onChange={handleChange}>
                      <option value="" disabled>Select Time</option>
                      <option value="17:00">5:00 PM</option>
                      <option value="17:30">5:30 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="18:30">6:30 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="19:30">7:30 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="20:30">8:30 PM</option>
                      <option value="21:00">9:00 PM</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label><Users size={16}/> Guests</label>
                    <select name="guests" required value={formData.guests} onChange={handleChange}>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Special Requests (Optional)</label>
                  <textarea name="specialRequests" rows="3" value={formData.specialRequests} onChange={handleChange} placeholder="Allergies, seating preferences, etc."></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-full submit-btn">Confirm Reservation</button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
