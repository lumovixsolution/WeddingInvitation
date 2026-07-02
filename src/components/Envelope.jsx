import React, { useState } from 'react';
import { MailOpen, Heart, Calendar } from 'lucide-react';

const Envelope = ({ onOpen, guestName }) => {
  const [isOpening, setIsOpening] = useState(false);
  const [flapOpen, setFlapOpen] = useState(false);
  const [cardSlid, setCardSlid] = useState(false);

  const triggerOpenAnimation = () => {
    if (isOpening) return;
    setIsOpening(true);
    
    // 1. Fold open the top flap (3D rotateX)
    setFlapOpen(true);
    
    // 2. Slide the invitation card up out of the envelope
    setTimeout(() => {
      setCardSlid(true);
    }, 600);

    // 3. Complete transition to main invitation content
    setTimeout(() => {
      onOpen();
    }, 2400);
  };

  return (
    <div className="envelope-container">
      {/* 3D Envelope Physics Wrapper */}
      <div className="envelope-wrapper-3d" onClick={triggerOpenAnimation}>
        
        {/* Top Flap (folds open 180 degrees upwards) */}
        <div className={`envelope-flap-3d ${flapOpen ? 'open' : ''}`}></div>

        {/* Pulsing Gold Wax Seal (fades out as it opens) */}
        <div className={`wax-seal ${flapOpen ? 'hide' : ''}`}>
          <span className="wax-seal-monogram">M&A</span>
          <div className="seal-pulse-ring"></div>
        </div>

        {/* Sliding Invitation Card (Reveals itself) */}
        <div className={`envelope-card-3d ${cardSlid ? 'slide-up' : ''}`}>
          {/* Double Gold Line Borders */}
          <div style={{ 
            position: 'absolute', 
            top: '5px', 
            left: '5px', 
            right: '5px', 
            bottom: '5px', 
            border: '1.5px solid var(--color-accent-gold-light)', 
            borderRadius: '4px',
            pointerEvents: 'none'
          }}></div>
          
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', padding: '10px 5px', zIndex: 6 }}>
            <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--color-accent-gold)' }}>
              Save Our Date
            </span>

            <div>
              <h3 className="font-script" style={{ fontSize: '1.85rem', color: 'var(--color-primary-pink)', fontWeight: 'normal', margin: '4px 0' }}>
                Maya & Alexander
              </h3>
              <p style={{ fontSize: '0.6rem', color: 'var(--color-text-medium)', letterSpacing: '1px', textTransform: 'uppercase' }}>
                September 23, 2026
              </p>
              <p style={{ fontSize: '0.65rem', color: 'var(--color-text-light)', fontStyle: 'italic', marginTop: '2px' }}>
                Bali, Indonesia
              </p>
            </div>

            <div style={{ borderTop: '1px dashed var(--color-accent-gold-light)', paddingTop: '6px' }}>
              <span style={{ fontSize: '0.6rem', color: 'var(--color-text-light)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Formal invitation to follow
              </span>
            </div>
          </div>
        </div>

        {/* Front Folds (overlays covering the card inside) */}
        <div className="envelope-front-3d"></div>
        <div className="envelope-bottom-fold"></div>
      </div>

      {/* Guest Name Card display (Personalization) */}
      <div style={{ marginTop: '20px', zIndex: 10, textAlign: 'center' }}>
        {guestName && (
          <div className="guest-card animate-fade-in-up">
            <span>Dear Honorable Guest</span>
            <h3>{guestName}</h3>
          </div>
        )}
        
        <p style={{ 
          color: 'var(--color-bg-cream)', 
          fontSize: '0.75rem', 
          marginTop: '15px', 
          letterSpacing: '2px', 
          textTransform: 'uppercase',
          opacity: 0.8
        }}>
          {isOpening ? 'Opening invitation...' : 'Tap the wax seal to open'}
        </p>
      </div>
    </div>
  );
};

export default Envelope;
