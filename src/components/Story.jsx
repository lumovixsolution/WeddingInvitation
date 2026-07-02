import React from 'react';
import { Sparkles, MessageCircle, Heart, Award } from 'lucide-react';

const Story = () => {
  const milestones = [
    {
      title: 'Our First Meeting',
      date: 'September 2021',
      desc: 'We crossed paths at a local coffee workshop in Bali. An accidental spill of coffee beans started a spark and an hour-long conversation.',
      icon: MessageCircle,
      iconColor: 'var(--color-sage-green)'
    },
    {
      title: 'Our First Date',
      date: 'November 2021',
      desc: 'A quiet sunset dinner by the beach in Jimbaran. We talked about our dreams, under the stars, until the restaurant closed.',
      icon: Sparkles,
      iconColor: 'var(--color-accent-gold)'
    },
    {
      title: 'The Proposal',
      date: 'October 2025',
      desc: 'Alexander popped the question during a surprise sunset walk in Ubud, surrounded by floating lotuses and glowing lanterns. Maya said YES!',
      icon: Heart,
      iconColor: 'var(--color-primary-pink)'
    }
  ];

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-bg-white)' }}>
      <h2 className="section-title">Love Story</h2>

      <div style={{
        position: 'relative',
        maxWidth: '380px',
        margin: '30px auto 0',
        paddingLeft: '30px',
        textAlign: 'left'
      }}>
        {/* Timeline Center Line */}
        <div style={{
          position: 'absolute',
          top: '8px',
          bottom: '8px',
          left: '11px',
          width: '2px',
          backgroundColor: 'var(--color-sage-green-light)',
          zIndex: 1
        }}></div>

        {milestones.map((milestone, index) => {
          const Icon = milestone.icon;
          return (
            <div key={index} style={{ position: 'relative', marginBottom: '35px' }}>
              {/* Timeline Bullet Node */}
              <div style={{
                position: 'absolute',
                left: '-30px',
                top: '4px',
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-bg-white)',
                border: `2px solid ${milestone.iconColor}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'var(--shadow-soft)',
                zIndex: 2
              }}>
                <Icon style={{ width: '11px', height: '11px', color: milestone.iconColor }} />
              </div>

              {/* Content Box */}
              <div>
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  color: 'var(--color-accent-gold)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  {milestone.date}
                </span>
                <h3 className="font-serif" style={{
                  fontSize: '1.15rem',
                  color: 'var(--color-text-dark)',
                  marginTop: '2px',
                  marginBottom: '8px'
                }}>
                  {milestone.title}
                </h3>
                <p style={{
                  fontSize: '0.85rem',
                  color: 'var(--color-text-medium)',
                  lineHeight: '1.6'
                }}>
                  {milestone.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Story;
