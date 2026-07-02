import React from 'react';
import { Calendar, Clock, MapPin, Map, Share2, PhoneCall, Gift } from 'lucide-react';

const EventInfo = () => {
  // Calendar dates for September 2026
  const daysInMonth = 30;
  const startDayOffset = 2; // Sept 1, 2026 is a Tuesday
  const calendarDays = [];

  for (let i = 0; i < startDayOffset; i++) {
    calendarDays.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  const highlightDate = 23; // Saturday, Sept 23

  const calendarUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=The+Wedding+of+Maya+%26+Alexander&dates=20260923T010000Z/20260923T070000Z&details=You+are+cordially+invited+to+celebrate+the+holy+matrimony+and+wedding+reception+of+Maya+Anindita+Prasetyo+and+Alexander+Vincent+Hartono+at+Ayana+Resort+%26+Spa,+Bali.&location=Ayana+Resort+%26+Spa,+Jimbaran,+Bali,+Indonesia";
  const mapsUrl = "https://maps.google.com/?q=Ayana+Resort+and+Spa+Bali";

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-sage-green-light)', padding: '60px 16px' }}>
      {/*<span className="section-subtitle">Invitation Details</span>*/}
      <h2 className="section-title">The Wedding Card</h2>

      {/* Tri-Fold Card Wrapper */}
      <div className="trifold-container" style={{ marginBottom: '45px' }}>

        {/* PANEL 1: LEFT PANEL (RSVP & Bride's Parents) */}
        <div className="trifold-panel" style={{ borderRadius: '8px 8px 0 0' }}>
          {/* Double Gold Line Arch Decorative SVG */}
          <div style={{ position: 'absolute', top: '15px', left: '15px', right: '15px', bottom: '15px', border: '1px solid rgba(197, 160, 89, 0.3)', pointerEvents: 'none' }}></div>

          <div style={{ position: 'relative', zIndex: 2 }}>
            {/* Soft pink floral details at top */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
              <svg width="40" height="25" viewBox="0 0 100 60" fill="none">
                <path d="M50 5C45 25 25 35 15 45C30 45 42 35 50 20C58 35 70 45 85 45C75 35 55 25 50 5Z" fill="#e28a99" opacity="0.6" />
              </svg>
            </div>

            <h4 className="font-serif-sc" style={{ fontSize: '0.9rem', color: 'var(--color-primary-pink)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>
              Kindly RSVP
            </h4>
            <p style={{ fontSize: '0.8rem', color: 'var(--color-text-medium)', fontWeight: '600', marginBottom: '10px' }}>
              by 15 August 2026
            </p>
            <p style={{ fontSize: '0.75rem', color: 'var(--color-text-light)', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Contact Person
            </p>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-medium)', fontWeight: 'bold', margin: '4px 0 25px' }}>
              077 2323 567
            </p>

            <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-accent-gold-light)', margin: '15px auto' }}></div>

            <p style={{ fontSize: '0.7rem', color: 'var(--color-text-light)', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
              Parents of the Bride
            </p>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-dark)', fontWeight: '600', marginTop: '2px' }}>
              Mr. & Mrs. Farmiloe
            </p>
          </div>
        </div>

        {/* PANEL 2: CENTER PANEL (Main Ceremony/Reception Invite) */}
        <div className="trifold-panel" style={{ borderTop: 'none', borderRadius: '0 0 8px 8px', backgroundColor: '#faf8f5' }}>
          <div style={{ position: 'absolute', top: '15px', left: '15px', right: '15px', bottom: '15px', border: '1.5px solid rgba(197, 160, 89, 0.4)', pointerEvents: 'none' }}></div>

          {/* Double Arch top frame style */}
          <div style={{
            position: 'absolute',
            top: '25px',
            left: '25px',
            right: '25px',
            height: '60px',
            borderTop: '2.5px double rgba(143, 168, 155, 0.4)',
            borderLeft: '2.5px double rgba(143, 168, 155, 0.4)',
            borderRight: '2.5px double rgba(143, 168, 155, 0.4)',
            borderRadius: '40px 40px 0 0',
            pointerEvents: 'none'
          }}></div>

          <div style={{ position: 'relative', zIndex: 2, paddingTop: '30px' }}>
            <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--color-text-light)' }}>
              together with their families
            </span>

            <h3 className="font-serif" style={{ fontSize: '1.25rem', color: 'var(--color-text-dark)', margin: '15px 0 5px', fontWeight: 'normal' }}>
              Maya Farmiloe
            </h3>
            <span className="font-script" style={{ fontSize: '1.6rem', color: 'var(--color-accent-gold)' }}>&</span>
            <h3 className="font-serif" style={{ fontSize: '1.25rem', color: 'var(--color-text-dark)', margin: '5px 0 15px', fontWeight: 'normal' }}>
              Alexander Laverton
            </h3>

            <p style={{ fontSize: '0.75rem', color: 'var(--color-text-medium)', maxWidth: '280px', margin: '0 auto 20px', lineHeight: '1.6' }}>
              Request the pleasure of your presence at their wedding celebration
            </p>

            <div style={{ margin: '20px 0' }}>
              <span className="font-serif-sc" style={{ fontSize: '0.9rem', color: 'var(--color-primary-pink)', letterSpacing: '1px' }}>
                Saturday
              </span>
              <h4 style={{ fontSize: '1rem', fontWeight: 'bold', color: 'var(--color-text-dark)', margin: '4px 0' }}>
                23 September 2026
              </h4>
            </div>

            <div style={{ margin: '20px 0 30px' }}>
              <p style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--color-sage-green-dark)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Grand Lotus Pavilion
              </p>
              <p style={{ fontSize: '0.75rem', color: 'var(--color-text-medium)', margin: '4px 0' }}>
                Lover’s Land hotel
              </p>

            </div>

            <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--color-accent-gold)', fontWeight: '600' }}>
              Reception to follow
            </span>
          </div>

          {/* Lotus vectors at bottom corners */}
          <div style={{ position: 'absolute', bottom: '15px', left: '15px', opacity: 0.8 }}>
            <svg width="30" height="20" viewBox="0 0 100 60" fill="none">
              <path d="M50 5C45 25 25 35 15 45C30 45 42 35 50 20Z" fill="#e28a99" />
            </svg>
          </div>
          <div style={{ position: 'absolute', bottom: '15px', right: '15px', transform: 'scaleX(-1)', opacity: 0.8 }}>
            <svg width="30" height="20" viewBox="0 0 100 60" fill="none">
              <path d="M50 5C45 25 25 35 15 45C30 45 42 35 50 20Z" fill="#e28a99" />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EventInfo;
