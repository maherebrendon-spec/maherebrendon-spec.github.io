(function () {
  const canvas = document.createElement("canvas");
  canvas.id = "constellation-bg";
  Object.assign(canvas.style, {
    position: "fixed", top: "0", left: "0",
    width: "100%", height: "100%",
    zIndex: "-1", pointerEvents: "none"
  });
  document.body.prepend(canvas);
  const ctx = canvas.getContext("2d");

  let w, h, points;
  const COUNT = 55;      // fewer = calmer. Try 40 for even sparser.
  const MAX_DIST = 130;  // link distance in px
  const SPEED = 0.25;    // drift speed

  function color() {
    // follows dark/light mode automatically
    return document.documentElement.getAttribute("data-theme") === "light"
      ? "20, 20, 20" : "255, 255, 255";
  }

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

  function init() {
    resize();
    points = Array.from({ length: COUNT }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * SPEED,
      vy: (Math.random() - 0.5) * SPEED
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    const c = color();
    for (let i = 0; i < points.length; i++) {
      const p = points[i];
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 1.4, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${c}, 0.5)`;
      ctx.fill();
      for (let j = i + 1; j < points.length; j++) {
        const q = points[j];
        const dist = Math.hypot(p.x - q.x, p.y - q.y);
        if (dist < MAX_DIST) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = `rgba(${c}, ${0.12 * (1 - dist / MAX_DIST)})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }

  window.addEventListener("resize", init);
  init();
  draw();
})();
