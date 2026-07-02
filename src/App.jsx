import React, { useState, useEffect } from 'react';
import Envelope from './components/Envelope';
import Petals from './components/Petals';
import Hero from './components/Hero';
import Couple from './components/Couple';
import EventInfo from './components/EventInfo';
import Story from './components/Story';
import RSVP from './components/RSVP';
import ScrollAnimate from './components/ScrollAnimate';
import WishesDrawer from './components/WishesDrawer';
import { Heart } from 'lucide-react';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isOpened, setIsOpened] = useState(false);
  const [guestName, setGuestName] = useState('');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [wishes, setWishes] = useState([]);

  // Seed default wishes
  const seedWishes = [
    {
      name: 'Budi Prasetyo & Family',
      attendance: 'attending',
      guests: '2',
      message: 'So incredibly happy and proud of you both, Maya and Alexander! May your journey be filled with absolute joy, compromise, and mutual growth. We love you.',
      date: '2026-06-28T10:30:00Z'
    },
    {
      name: 'Sarah Kurniawan',
      attendance: 'attending',
      guests: '1',
      message: 'Congratulations Maya and Alex! Can\'t wait to fly to Bali and celebrate your big day. You two are made for each other!',
      date: '2026-07-01T15:45:00Z'
    },
    {
      name: 'Uncle David & Aunt Jessica',
      attendance: 'decline',
      guests: '0',
      message: 'Sending our warmest blessings from Vancouver. We are sorry we cannot attend in person, but we will be celebrating in spirit. Wishing you both a lifetime of happiness.',
      date: '2026-07-02T09:12:00Z'
    }
  ];

  useEffect(() => {
    // Load from localStorage or set seed
    const stored = localStorage.getItem('wedding_wishes');
    if (stored) {
      try {
        setWishes(JSON.parse(stored));
      } catch (e) {
        setWishes(seedWishes);
      }
    } else {
      localStorage.setItem('wedding_wishes', JSON.stringify(seedWishes));
      setWishes(seedWishes);
    }
  }, []);

  // Extract Guest Name from URL Parameter (?to=Name)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const toParam = params.get('to');
    if (toParam) {
      setGuestName(decodeURIComponent(toParam));
    }
  }, []);

  // Loading Screen Timer Progression
  useEffect(() => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 15) + 5;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        setTimeout(() => {
          setIsLoading(false);
        }, 500); // visual pause when progress hits 100%
      }
      setProgress(currentProgress);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleOpenInvitation = () => {
    setIsOpened(true);
  };

  const handleNavigateToRSVP = () => {
    setIsDrawerOpen(false);
    setTimeout(() => {
      const rsvpSection = document.getElementById('rsvp-section');
      if (rsvpSection) {
        rsvpSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  return (
    <>
      {/* 1. Loading Progress Screen */}
      {isLoading && (
        <div className="loading-screen">
          <div className="loading-logo">Maya & Alexander</div>
          <div style={{ margin: '15px 0' }}>
            <svg width="70" height="70" viewBox="0 0 100 100" fill="none">
              <path d="M50 15C45 35 25 45 15 55C30 55 42 45 50 30C58 45 70 55 85 55C75 45 55 35 50 15Z" fill="#e28a99" />
              <circle cx="50" cy="55" r="5" fill="#c5a059" />
            </svg>
          </div>
          <div className="loading-bar-wrapper">
            <div className="loading-bar-progress" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="loading-text">Loading Invitation {progress}%</div>
        </div>
      )}

      {/* 2. Closed 3D Envelope Overlay */}
      {!isLoading && !isOpened && (
        <Envelope onOpen={handleOpenInvitation} guestName={guestName} />
      )}

      {/* 3. Main Scrollable Content */}
      {!isLoading && (
        <div
          className="invitation-wrapper"
          style={{
            opacity: isOpened ? 1 : 0,
            height: isOpened ? 'auto' : '100vh',
            overflow: isOpened ? 'visible' : 'hidden',
            pointerEvents: isOpened ? 'auto' : 'none'
          }}
        >
          {/* Falling Lotus Petals canvas animation */}
          {isOpened && <Petals />}


          {/* Hero Main Screen */}
          <Hero />

          {/* Bride & Groom Couple section */}
          <ScrollAnimate>
            <Couple />
          </ScrollAnimate>

          {/* Event Tri-fold details & Calendar */}
          <ScrollAnimate>
            <EventInfo />
          </ScrollAnimate>

          {/* Relationship timeline story */}
          <ScrollAnimate>
            <Story />
          </ScrollAnimate>

          {/* RSVP Guestbook Wall */}
          <ScrollAnimate>
            <RSVP defaultGuestName={guestName} wishes={wishes} setWishes={setWishes} />
          </ScrollAnimate>

          {/* Page Footer */}
          <footer style={{
            backgroundColor: 'var(--color-sage-green-dark)',
            color: 'var(--color-bg-cream)',
            padding: '40px 24px',
            textAlign: 'center',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <h2 className="font-script" style={{ fontSize: '2.5rem', fontWeight: 'normal', color: 'var(--color-accent-gold-light)', margin: '0 0 10px' }}>
              Thank You
            </h2>
            <p style={{ fontSize: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--color-primary-pink-light)' }}>
              We look forward to celebrating with you
            </p>
            <div style={{ margin: '20px 0', height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.2)', width: '60px', marginLeft: 'auto', marginRight: 'auto' }}></div>
            <p className="font-serif" style={{ fontSize: '1.1rem', fontStyle: 'italic' }}>
              Maya & Alexander
            </p>
            <p style={{ fontSize: '0.65rem', color: 'var(--color-sage-green)', marginTop: '20px' }}>
              © 2026 Lumovix Solution • All rights reserved.
            </p>
          </footer>

          {/* Wishes Drawer and FAB trigger */}
          {isOpened && (
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="wishes-fab"
              title="View Wishes Wall"
              aria-label="View Wishes Wall"
            >
              <Heart size={20} strokeWidth={1.8} />
            </button>
          )}

          <WishesDrawer
            isOpen={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
            wishes={wishes}
            onNavigateToRSVP={handleNavigateToRSVP}
          />
        </div>
      )}
    </>
  );
}

export default App;
