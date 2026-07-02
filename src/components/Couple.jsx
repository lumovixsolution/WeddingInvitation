import React from 'react';
import { Heart } from 'lucide-react';

const Couple = () => {
  return (
    <section className="section" style={{ backgroundColor: 'var(--color-bg-white)' }}>
      {/* Decorative leaf overlays */}
      <div style={{ position: 'absolute', bottom: '0', left: '0', opacity: 0.08, transform: 'rotate(90deg)' }}>
        <svg width="120" height="120" viewBox="0 0 100 100" fill="var(--color-sage-green-dark)">
          <path d="M0,0 C30,0 70,30 100,100 C100,70 70,30 0,0" />
        </svg>
      </div>

      <h2 className="section-title">Bride & Groom</h2>

      <p style={{
        fontSize: '0.85rem',
        color: 'var(--color-text-medium)',
        maxWidth: '320px',
        margin: '0 auto 40px',
        lineHeight: '1.7',
        fontStyle: 'italic'
      }}>
        "Together with our families, we request the pleasure of your presence to witness and celebrate the joining of our lives in holy matrimony."
      </p>

      {/* Bride Card */}
      <div className="card" style={{ maxWidth: '360px', margin: '0 auto 30px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '4px', backgroundColor: 'var(--color-primary-pink)' }}></div>

        {/* Bride Vector Avatar */}
        <div style={{ display: 'flex', justifyContent: 'center', margin: '10px 0 20px' }}>
          <img
            src="/bride_photo.png"
            alt="Maya Anindita Prasetyo"
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '2px solid var(--color-accent-gold)',
              boxShadow: 'var(--shadow-soft)'
            }}
          />
        </div>

        <h3 className="font-serif" style={{ fontSize: '1.4rem', color: 'var(--color-text-dark)', fontWeight: '600' }}>
          Maya Farmiloe
        </h3>
        <p className="font-script" style={{ fontSize: '1.6rem', color: 'var(--color-accent-gold)', margin: '4px 0 12px' }}>
          Maya
        </p>

        <div style={{ height: '1px', backgroundColor: 'var(--color-sage-green-light)', margin: '15px auto', width: '80%' }}></div>

        <p style={{ fontSize: '0.8rem', color: 'var(--color-text-light)', textTransform: 'uppercase', letterSpacing: '1px' }}>
          Beloved Daughter of
        </p>
        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-medium)', fontWeight: '600', marginTop: '4px' }}>
          Mr. & Mrs. Farmiloe
        </p>
      </div>

      {/* Script Separator & Heart */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', margin: '20px 0' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-accent-gold)', width: '60px' }}></div>
        <div style={{
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          backgroundColor: 'var(--color-primary-pink-light)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Heart className="w-4 h-4" style={{ color: 'var(--color-primary-pink)', fill: 'var(--color-primary-pink)' }} />
        </div>
        <div style={{ height: '1px', backgroundColor: 'var(--color-accent-gold)', width: '60px' }}></div>
      </div>

      {/* Groom Card */}
      <div className="card" style={{ maxWidth: '360px', margin: '0 auto', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '4px', backgroundColor: 'var(--color-sage-green)' }}></div>

        {/* Groom Vector Avatar */}
        <div style={{ display: 'flex', justifyContent: 'center', margin: '10px 0 20px' }}>
          <img
            src="/groom_photo.png"
            alt="Alexander Vincent Hartono"
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '2px solid var(--color-accent-gold)',
              boxShadow: 'var(--shadow-soft)'
            }}
          />
        </div>

        <h3 className="font-serif" style={{ fontSize: '1.4rem', color: 'var(--color-text-dark)', fontWeight: '600' }}>
          Alexander Laverton
        </h3>
        <p className="font-script" style={{ fontSize: '1.6rem', color: 'var(--color-accent-gold)', margin: '4px 0 12px' }}>
          Alexander
        </p>

        <div style={{ height: '1px', backgroundColor: 'var(--color-sage-green-light)', margin: '15px auto', width: '80%' }}></div>

        <p style={{ fontSize: '0.8rem', color: 'var(--color-text-light)', textTransform: 'uppercase', letterSpacing: '1px' }}>
          Beloved Son of
        </p>
        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-medium)', fontWeight: '600', marginTop: '4px' }}>
          Mr. & Mrs. Laverton
        </p>
      </div>
    </section>
  );
};

export default Couple;
