<script>
  const currentYear = new Date().getFullYear();
  
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
</script>

<footer>
  <div class="footer-content">
    <div class="footer-section">
      <h3>Alessandro Bonanno</h3>
      <p>Frontend Engineer focused on building accessible, pixel-perfect web experiences.</p>
    </div>

    <div class="footer-section">
      <h4>Navigation</h4>
      <nav>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#languages-section">Languages</a>
        <a href="#projects">Projects</a>
      </nav>
    </div>

    <div class="footer-section">
      <h4>Connect</h4>
      <div class="social-links">
        <a href="https://github.com/15blex" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
        </a>
        <a href="https://www.linkedin.com/in/alessandrobonanno/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
        </a>
        <a href="mailto:15blex@gmail.com" aria-label="Email">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
        </a>
      </div>
    </div>
  </div>

  <div class="footer-bottom">
    <p>&copy; {currentYear} Alessandro Bonanno. Built with SvelteKit.</p>
    <button class="back-to-top" onclick={scrollToTop} aria-label="Back to top">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>
    </button>
  </div>
</footer>

<style>
  footer {
    margin-top: var(--space-6);
    padding: var(--space-6) var(--space-4) var(--space-4);
    background: var(--color-bg-2);
    border-top: 1px solid var(--color-border);
    color: var(--color-text-1);
  }

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--space-6);
    margin-bottom: var(--space-6);
  }

  .footer-section h3 {
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: var(--space-3);
    color: var(--color-text-1);
    font-family: var(--font-display);
  }

  .footer-section h4 {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: var(--space-3);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-text-2);
  }

  .footer-section p {
    line-height: 1.6;
    color: var(--color-text-2);
    max-width: 300px;
  }

  nav {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }

  nav a {
    color: var(--color-text-2);
    text-decoration: none;
    transition: color 0.2s;
  }

  nav a:hover {
    color: var(--color-text-1);
  }

  .social-links {
    display: flex;
    gap: var(--space-3);
  }

  .social-links a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--color-bg-3);
    color: var(--color-text-1);
    transition: all 0.2s ease;
    border: 1px solid var(--color-border);
  }

  .social-links a:hover {
    background: var(--color-text-1);
    color: var(--color-bg-1);
    transform: translateY(-2px);
    border-color: var(--color-text-1);
  }

  .footer-bottom {
    max-width: 1200px;
    margin: 0 auto;
    padding-top: var(--space-4);
    border-top: 1px solid var(--color-border);
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.9rem;
    color: var(--color-text-2);
  }

  .back-to-top {
    background: var(--color-bg-3);
    border: 1px solid var(--color-border);
    width: 40px;
    height: 40px;
    border-radius: 8px;
    color: var(--color-text-1);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
  }

  .back-to-top:hover {
    background: var(--color-text-1);
    color: var(--color-bg-1);
    border-color: var(--color-text-1);
  }

  @media (max-width: 600px) {
    .footer-bottom {
      flex-direction: column;
      gap: var(--space-3);
    }
  }
</style>