import React, { useState, useEffect } from 'react';
import { ChevronDown, Calendar, MapPin } from 'lucide-react';

const Hero = () => {
  const targetDate = new Date('September 23, 2026 09:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="section" style={{ padding: '80px 24px 60px', minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundImage: 'radial-gradient(rgba(143, 168, 155, 0.1) 1px, transparent 1px)', backgroundSize: '15px 15px' }}>

      {/* Decorative Top Leaf Corner Graphic */}
      <div style={{ position: 'absolute', top: '10px', left: '10px', opacity: 0.15 }}>
        <svg width="80" height="80" viewBox="0 0 100 100" fill="var(--color-sage-green-dark)">
          <path d="M0,0 C30,0 70,30 100,100 C100,70 70,30 0,0" />
          <path d="M0,0 C10,30 40,70 100,100 C70,100 30,70 0,0" />
        </svg>
      </div>
      <div style={{ position: 'absolute', top: '10px', right: '10px', transform: 'scaleX(-1)', opacity: 0.15 }}>
        <svg width="80" height="80" viewBox="0 0 100 100" fill="var(--color-sage-green-dark)">
          <path d="M0,0 C30,0 70,30 100,100 C100,70 70,30 0,0" />
          <path d="M0,0 C10,30 40,70 100,100 C70,100 30,70 0,0" />
        </svg>
      </div>

      <div style={{ marginTop: '20px' }}>
        <span className="section-subtitle">Save The Date</span>
        <h1 className="font-serif" style={{ fontSize: '2.5rem', color: 'var(--color-text-dark)', fontWeight: 'normal', margin: '15px 0 5px' }}>
          Maya & Alexander
        </h1>
        <div style={{ fontStyle: 'italic', fontSize: '1.2rem', fontFamily: 'var(--font-script)', color: 'var(--color-accent-gold)', margin: '10px 0' }}>
          Are getting married
        </div>
      </div>

      {/* Elegant Vector Lotus Flower Illustration */}
      <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <svg width="180" height="120" viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Green Lotus Leaves */}
          <path d="M20 110C40 85 90 95 100 120C110 95 160 85 180 110C160 130 40 130 20 110Z" fill="var(--color-sage-green)" opacity="0.6" />
          <path d="M50 115C70 100 130 100 150 115C130 128 70 128 50 115Z" fill="var(--color-sage-green-dark)" opacity="0.4" />

          {/* Pink Lotus Blossom petals (Back Layer) */}
          <path d="M100 10C80 50 40 65 20 85C50 85 80 70 100 45C120 70 150 85 180 85C160 65 120 50 100 10Z" fill="#f4c2c9" opacity="0.8" />

          {/* Main Blossom petals (Front Layer) */}
          <path d="M100 25C85 60 55 75 35 95C60 95 85 80 100 55C115 80 140 95 165 95C145 75 115 60 100 25Z" fill="#e28a99" />

          {/* Center Details */}
          <path d="M100 40C92 65 72 80 60 95C80 95 95 85 100 70C105 85 120 95 140 95C128 80 108 65 100 40Z" fill="#fbebee" />
          <circle cx="100" cy="85" r="10" fill="#d4af37" opacity="0.8" />
          <circle cx="100" cy="85" r="5" fill="#fbebee" />
        </svg>
      </div>

      {/* Countdown Clock Widget */}
      <div>
        <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--color-text-medium)', marginBottom: '15px' }}>
          Count Down to Celebration
        </h4>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', maxWidth: '340px', margin: '0 auto' }}>
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Min', value: timeLeft.minutes },
            { label: 'Sec', value: timeLeft.seconds }
          ].map((item, idx) => (
            <div key={idx} style={{
              background: 'var(--color-bg-white)',
              border: '1.5px solid var(--color-accent-gold-light)',
              borderRadius: '10px',
              padding: '10px 4px',
              boxShadow: 'var(--shadow-soft)',
              position: 'relative'
            }}>
              <div className="font-serif" style={{ fontSize: '1.6rem', fontWeight: 'bold', color: 'var(--color-sage-green-dark)' }}>
                {String(item.value).padStart(2, '0')}
              </div>
              <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--color-text-light)', marginTop: '4px' }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', color: 'var(--color-text-medium)', fontSize: '0.85rem' }}>
          <Calendar className="w-4 h-4 text-amber-600" style={{ color: 'var(--color-accent-gold)' }} />
          <span>Saturday, 23 September 2026</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', color: 'var(--color-text-medium)', fontSize: '0.85rem', marginTop: '6px' }}>
          <MapPin className="w-4 h-4 text-emerald-600" style={{ color: 'var(--color-sage-green)' }} />
          <span>Lover’s Land hotel</span>
        </div>
      </div>

      <div style={{ marginTop: '20px', animation: 'bounce 2s infinite' }}>
        <span style={{ fontSize: '0.7rem', color: 'var(--color-text-light)', textTransform: 'uppercase', letterSpacing: '2px' }}>
          Scroll down
        </span>
        <ChevronDown className="w-5 h-5 mx-auto mt-1" style={{ color: 'var(--color-accent-gold)' }} />
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-8px); }
          60% { transform: translateY(-4px); }
        }
      `}} />
    </section>
  );
};

export default Hero;
