/* components/footer.js
   Usage: <script src="/components/footer.js"></script>
   Place this script tag just before </body>
*/

(function () {
  const year = new Date().getFullYear();

  const footerHTML = `
<footer class="site-footer">
  <div class="site-footer__inner">

    <!-- Brand col -->
    <div class="footer-brand">
      <div class="footer-brand__logo">tools.<span>thenepal</span>.io</div>
      <p class="footer-brand__tagline">
        Free professional calculators for Nepal travel agents and trekking operators. Built by thenepal.io.
      </p>
      <div class="footer-brand__badge">
        <span>🇳🇵</span> Made for Nepal Agents
      </div>
    </div>

    <!-- Tools col -->
    <div class="footer-col">
      <div class="footer-col__title">Tools</div>
      <ul class="footer-col__links">
        <li><a href="/toolkit/">Agency Toolkit</a></li>
        <li><a href="/toolkit/#permits">Permit & TIMS Calculator</a></li>
        <li><a href="/toolkit/#visa">Visa Fee Calculator</a></li>
        <li><a href="/toolkit/#luggage">Luggage Estimator</a></li>
        <li><a href="/toolkit/#tips">Tip Planner</a></li>
      </ul>
    </div>

    <!-- Links col -->
    <div class="footer-col">
      <div class="footer-col__title">Links</div>
      <ul class="footer-col__links">
        <li><a href="https://thenepal.io" target="_blank" rel="noopener">thenepal.io ↗</a></li>
        <li><a href="https://thenepal.io/privacy-policy" target="_blank" rel="noopener">Privacy Policy</a></li>
        <li><a href="mailto:hello@thenepal.io">Contact Us</a></li>
      </ul>
    </div>

  </div>

  <div class="site-footer__bottom">
    <span class="footer-bottom__copy">
      © ${year} thenepal.io · Permit fees per Nepal Government fiscal year 2024/25 · Always verify RAP fees with Nepal Immigration
    </span>
    <div class="footer-bottom__links">
      <a href="https://thenepal.io/privacy-policy" target="_blank" rel="noopener">Privacy Policy</a>
      <a href="https://thenepal.io" target="_blank" rel="noopener">thenepal.io</a>
    </div>
  </div>
</footer>
`;

  document.body.insertAdjacentHTML('beforeend', footerHTML);
})();
