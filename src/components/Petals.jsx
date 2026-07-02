import React, { useEffect, useRef } from 'react';

const Petals = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Resize canvas
    const handleResize = () => {
      canvas.width = canvas.parentElement.offsetWidth || window.innerWidth;
      canvas.height = canvas.parentElement.offsetHeight || window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // Petal configuration
    const petalCount = 25;
    const petals = [];

    // Create petals
    for (let i = 0; i < petalCount; i++) {
      petals.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        r: Math.random() * 6 + 4, // petal size
        d: Math.random() * petalCount, // density
        speed: Math.random() * 1 + 0.5, // speed
        swaySpeed: Math.random() * 0.02 + 0.01,
        swayAngle: Math.random() * Math.PI,
        opacity: Math.random() * 0.5 + 0.2,
        rotation: Math.random() * 360,
        rotationSpeed: Math.random() * 1 - 0.5
      });
    }

    // Draw petals
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      petals.forEach((petal) => {
        ctx.save();
        ctx.translate(petal.x, petal.y);
        ctx.rotate((petal.rotation * Math.PI) / 180);
        ctx.globalAlpha = petal.opacity;

        // Draw lotus petal path (an elegant leaf/oval shape)
        ctx.beginPath();
        ctx.moveTo(0, -petal.r);
        // Bezier curve to create petal shape
        ctx.bezierCurveTo(petal.r * 1.5, -petal.r * 0.5, petal.r * 1.5, petal.r * 0.5, 0, petal.r);
        ctx.bezierCurveTo(-petal.r * 1.5, petal.r * 0.5, -petal.r * 1.5, -petal.r * 0.5, 0, -petal.r);
        
        // Gradient fill for soft pink look
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, petal.r);
        gradient.addColorStop(0, '#fbebee'); // light center
        gradient.addColorStop(0.6, '#f4c2c9'); // blush pink
        gradient.addColorStop(1, '#e28a99'); // rose pink edge
        
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.restore();

        // Update position
        petal.y += petal.speed;
        petal.rotation += petal.rotationSpeed;
        petal.swayAngle += petal.swaySpeed;
        petal.x += Math.sin(petal.swayAngle) * 0.5;

        // If petal goes off screen, reset to top
        if (petal.y > canvas.height + 20) {
          petal.y = -20;
          petal.x = Math.random() * canvas.width;
          petal.speed = Math.random() * 1 + 0.5;
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="petals-canvas" />;
};

export default Petals;
