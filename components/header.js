/* components/header.js
   Usage: <script src="/components/header.js"></script>
   Add data-page="toolkit" etc. on <body> to highlight active nav link
*/

(function () {
  const currentPath = window.location.pathname;

  const navLinks = [
    { href: '/toolkit/', label: 'Agency Toolkit', key: 'toolkit' },
  ];

  const headerHTML = `
<header class="site-header" id="site-header">
  <div class="site-header__inner">

    <!-- Logo -->
    <a href="/" class="site-header__logo" aria-label="tools.thenepal.io home">
      <span class="site-header__logo-main">tools.<span>thenepal</span>.io</span>
      <span class="site-header__logo-sub">Nepal Travel Agent Toolkit</span>
    </a>

    <!-- Desktop Nav -->
    <nav class="site-header__nav" aria-label="Main navigation">
      ${navLinks.map(l => {
        const isActive = currentPath.startsWith(l.href) || (l.href === '/' && currentPath === '/');
        return `<a href="${l.href}" class="nav-link${isActive ? ' active' : ''}">${l.label}</a>`;
      }).join('')}
      <a href="https://thenepal.io" class="nav-link" target="_blank" rel="noopener">thenepal.io ↗</a>
      <button class="dark-toggle" id="darkToggle" aria-label="Toggle dark mode" title="Toggle dark mode">🌙</button>
    </nav>

    <!-- Mobile controls -->
    <div style="display:flex;align-items:center;gap:8px;">
      <button class="dark-toggle" id="darkToggleMobile" aria-label="Toggle dark mode" title="Toggle dark mode" style="display:none">🌙</button>
      <button class="menu-toggle" id="menuToggle" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>

  </div>
</header>

<!-- Mobile Nav Drawer -->
<nav class="mobile-nav" id="mobileNav" aria-label="Mobile navigation">
  ${navLinks.map(l => `<a href="${l.href}" class="nav-link">${l.label}</a>`).join('')}
  <a href="https://thenepal.io" class="nav-link" target="_blank" rel="noopener">thenepal.io ↗</a>
</nav>
`;

  // Inject header before page body
  document.body.insertAdjacentHTML('afterbegin', headerHTML);

  // ── Dark mode ──────────────────────────────────────────
  const STORAGE_KEY = 'tnio-theme';
  const root = document.documentElement;

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    const icon = theme === 'dark' ? '☀️' : '🌙';
    const dt = document.getElementById('darkToggle');
    const dtm = document.getElementById('darkToggleMobile');
    if (dt) dt.textContent = icon;
    if (dtm) dtm.textContent = icon;
    localStorage.setItem(STORAGE_KEY, theme);
  }

  function toggleTheme() {
    const current = root.getAttribute('data-theme') || 'light';
    applyTheme(current === 'dark' ? 'light' : 'dark');
  }

  // Load saved preference
  const saved = localStorage.getItem(STORAGE_KEY);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(saved || (prefersDark ? 'dark' : 'light'));

  // Bind toggles
  document.getElementById('darkToggle')?.addEventListener('click', toggleTheme);
  document.getElementById('darkToggleMobile')?.addEventListener('click', toggleTheme);

  // ── Mobile menu ────────────────────────────────────────
  const menuBtn = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');

  menuBtn?.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', isOpen);
  });

  // Close menu on outside click
  document.addEventListener('click', (e) => {
    if (!menuBtn?.contains(e.target) && !mobileNav?.contains(e.target)) {
      mobileNav?.classList.remove('open');
    }
  });

  // ── Show mobile dark toggle on small screens ───────────
  function handleResize() {
    const dtm = document.getElementById('darkToggleMobile');
    if (dtm) dtm.style.display = window.innerWidth <= 768 ? 'flex' : 'none';
  }
  handleResize();
  window.addEventListener('resize', handleResize);

  // ── Scroll shadow ──────────────────────────────────────
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    header?.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });

})();
