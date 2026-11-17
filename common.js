// Dùng chung cho mọi trang: bầu trời sao, sáng/tối, hiệu ứng, tiến độ học
(function () {
  const sky = document.getElementById("sky");
  if (sky) for (let i = 0; i < 90; i++) {
    const s = document.createElement("span");
    s.style.left = Math.random() * 100 + "%";
    s.style.top = Math.random() * 100 + "%";
    s.style.animationDelay = Math.random() * 3 + "s";
    s.style.opacity = Math.random() * .8 + .2;
    sky.appendChild(s);
  }
  const root = document.documentElement, btn = document.getElementById("toggle");
  const saved = localStorage.getItem("theme");
  if (saved) root.dataset.theme = saved;
  const sync = () => { if (btn) btn.textContent = root.dataset.theme === "dark" ? "☀️" : "🌙"; };
  sync();
  if (btn) btn.onclick = () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", root.dataset.theme); sync();
  };
  window.observeReveal = () => {
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && e.target.classList.add("in")), { threshold: .1 });
    document.querySelectorAll(".reveal:not(.in)").forEach(el => io.observe(el));
  };
})();

// Tiến độ học lưu trong trình duyệt
const Progress = {
  key: "cz-done",
  all() { try { return JSON.parse(localStorage.getItem(this.key)) || []; } catch { return []; } },
  has(i) { return this.all().includes(i); },
  toggle(i) {
    const a = this.all(), k = a.indexOf(i);
    k >= 0 ? a.splice(k, 1) : a.push(i);
    localStorage.setItem(this.key, JSON.stringify(a));
    return k < 0;
  }
};
