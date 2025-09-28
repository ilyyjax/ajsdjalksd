(() => {
  const bills = document.querySelectorAll('.bill');
  bills.forEach((b) => {
    const base = 550; // matches transform-origin
    const jitter = (Math.random() - 0.5) * 60; // small variation
    b.style.transformOrigin = `${base + jitter}px center`;
    b.style.animationDuration = `${9 + Math.random()*2}s`;
  });

  // Ensure X link uses community URL
  const xLink = document.getElementById('x-link');
  if (xLink) xLink.href = 'https://x.com/i/communities/1972087756521123954';
})();
