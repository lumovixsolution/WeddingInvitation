import React, { useState, useEffect } from 'react';
import { Send, CheckCircle, Gift } from 'lucide-react';

const RSVP = ({ defaultGuestName, wishes, setWishes }) => {
  const [form, setForm] = useState({
    name: defaultGuestName || '',
    attendance: 'attending', // attending or decline
    guests: '1',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // Update name if url param loaded later
  useEffect(() => {
    if (defaultGuestName) {
      setForm((prev) => ({ ...prev, name: defaultGuestName }));
    }
  }, [defaultGuestName]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectAttendance = (status) => {
    setForm((prev) => ({ 
      ...prev, 
      attendance: status,
      // If declining, guests count defaults to 0
      guests: status === 'decline' ? '0' : prev.guests === '0' ? '1' : prev.guests
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) return;

    const newWish = {
      name: form.name,
      attendance: form.attendance,
      guests: form.attendance === 'decline' ? '0' : form.guests,
      message: form.message,
      date: new Date().toISOString()
    };

    const updated = [newWish, ...wishes];
    setWishes(updated);
    localStorage.setItem('wedding_wishes', JSON.stringify(updated));
    
    setSubmitted(true);
    setForm((prev) => ({
      ...prev,
      message: ''
    }));

    // Reset submission state after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  const formatDate = (isoStr) => {
    try {
      const date = new Date(isoStr);
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
    } catch (e) {
      return '';
    }
  };

  return (
    <section id="rsvp-section" className="section" style={{ backgroundColor: 'var(--color-sage-green-light)' }}>
      <span className="section-subtitle">Confirm Presence</span>
      <h2 className="section-title">RSVP & Guestbook</h2>

      <div style={{ maxWidth: '380px', margin: '0 auto' }}>
        
        {/* RSVP Card Form */}
        <div className="card" style={{ textAlign: 'left' }}>
          <h3 className="font-serif" style={{ fontSize: '1.25rem', color: 'var(--color-text-dark)', marginBottom: '15px' }}>
            RSVP Form
          </h3>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Attendance Status</label>
              <div className="radio-group">
                <div 
                  className={`radio-card ${form.attendance === 'attending' ? 'selected' : ''}`}
                  onClick={() => handleSelectAttendance('attending')}
                >
                  I Will Attend
                </div>
                <div 
                  className={`radio-card ${form.attendance === 'decline' ? 'selected' : ''}`}
                  onClick={() => handleSelectAttendance('decline')}
                >
                  Regretfully Decline
                </div>
              </div>
            </div>

            {form.attendance === 'attending' && (
              <div className="form-group">
                <label className="form-label" htmlFor="guests">Number of Guests</label>
                <select
                  id="guests"
                  name="guests"
                  className="form-input"
                  value={form.guests}
                  onChange={handleChange}
                >
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                </select>
              </div>
            )}

            <div className="form-group">
              <label className="form-label" htmlFor="message">Wishes & Blessings</label>
              <textarea
                id="message"
                name="message"
                className="form-input"
                style={{ minHeight: '100px', resize: 'vertical' }}
                value={form.message}
                onChange={handleChange}
                placeholder="Write your prayers and warm wishes for Maya & Alexander..."
                required
              />
            </div>

            <button type="submit" className="submit-btn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <Send className="w-4 h-4" />
              Send Wishes
            </button>

            {submitted && (
              <div style={{ 
                marginTop: '15px', 
                backgroundColor: 'rgba(143, 168, 155, 0.2)', 
                border: '1px solid var(--color-sage-green)', 
                padding: '10px', 
                borderRadius: '8px', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px', 
                color: 'var(--color-sage-green-dark)',
                fontSize: '0.8rem'
              }}>
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Thank you! Your response and wishes have been submitted.</span>
              </div>
            )}
          </form>
        </div>

      </div>
    </section>
  );
};

export default RSVP;
