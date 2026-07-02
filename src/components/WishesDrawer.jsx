import React from 'react';
import { X, MessageSquare, Heart } from 'lucide-react';

const WishesDrawer = ({ isOpen, onClose, wishes, onNavigateToRSVP }) => {
  const formatDate = (isoStr) => {
    try {
      const date = new Date(isoStr);
      return date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit' 
      });
    } catch (e) {
      return '';
    }
  };

  return (
    <>
      {/* Drawer Backdrop Overlay */}
      <div 
        className={`drawer-backdrop ${isOpen ? 'active' : ''}`} 
        onClick={onClose}
      />

      {/* Slide-out Sidebar Drawer */}
      <div className={`wishes-drawer ${isOpen ? 'active' : ''}`}>
        
        {/* Header */}
        <div className="wishes-drawer-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <MessageSquare className="w-5 h-5 text-rose-400" style={{ color: 'var(--color-primary-pink)' }} />
            <h3 className="font-serif" style={{ fontSize: '1.25rem', color: 'var(--color-text-dark)' }}>
              Wishes Wall
            </h3>
          </div>
          <button onClick={onClose} className="wishes-drawer-close" aria-label="Close Drawer">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Wishes List Container */}
        <div className="wishes-drawer-list">
          {wishes.length === 0 ? (
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-light)', textAlign: 'center', padding: '40px 0' }}>
              No wishes yet. Be the first to leave a blessing!
            </p>
          ) : (
            wishes.map((wish, index) => (
              <div 
                key={index} 
                className="wish-item" 
                style={{ 
                  borderBottom: '1px solid var(--color-sage-green-light)',
                  padding: '12px 0',
                  animation: 'fadeInUp 0.3s ease-out'
                }}
              >
                <div className="wish-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                  <span className="wish-name" style={{ fontWeight: '600', color: 'var(--color-text-dark)', fontSize: '0.85rem' }}>
                    {wish.name}
                  </span>
                  <span className={`wish-badge ${wish.attendance === 'attending' ? 'attending' : 'decline'}`}>
                    {wish.attendance === 'attending' ? `Attending` : 'Decline'}
                  </span>
                </div>
                <p className="wish-message" style={{ fontSize: '0.8rem', color: 'var(--color-text-medium)', lineHeight: '1.4' }}>
                  {wish.message}
                </p>
                <span style={{ fontSize: '0.65rem', color: 'var(--color-text-light)', marginTop: '4px', display: 'block' }}>
                  {formatDate(wish.date)}
                </span>
              </div>
            ))
          )}
        </div>

        {/* Call to Action Button */}
        <button 
          onClick={onNavigateToRSVP}
          className="wishes-drawer-action-btn"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
        >
          <Heart className="w-4 h-4 fill-current" />
          Write a Blessing
        </button>
      </div>
    </>
  );
};

export default WishesDrawer;
