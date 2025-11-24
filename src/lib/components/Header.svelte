<script lang="ts">
  import { onMount } from 'svelte';
  import { loadLocale } from 'wuchale/load-utils';

  let theme = $state<string>('system');
  let language = $state<string>('en');
  let popover: HTMLDivElement | null = null;

  const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'ca', label: 'Català', flag: '🇪🇸 🇨🇦' }, // Using black flag as placeholder or fallback if ES flag is confusing, but let's stick to text mainly.
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'it', label: 'Italiano', flag: '🇮🇹' },
    { code: 'pt', label: 'Português', flag: '🇵🇹' },
  ];

  // Helper to get current language object
  const getCurrentLang = (code: string) => languages.find(l => l.code === code) || languages[0];

  onMount(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    const savedLanguage = localStorage.getItem('language');

    if (savedTheme) {
      theme = savedTheme;
    } else {
      theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    
    // Apply theme immediately to ensure sync
    document.documentElement.style.colorScheme = theme;

    if (savedLanguage) {
      if (document.startViewTransition) {
        document.startViewTransition(() => {
          language = savedLanguage;
          loadLocale(language)
        });
      } else {
        language = savedLanguage;
        loadLocale(language)
      }
    }
  });

  const selectLanguage = (lang: string) => {
    if(document.startViewTransition) {
      document.startViewTransition(() => {
        language = lang;
        popover?.hidePopover();
        localStorage.setItem('language', lang);
      });
    } else {
      language = lang;
      popover?.hidePopover();
      localStorage.setItem('language', lang);
    }
  }

  const toggleTheme = () => {
   if (theme === 'light') {
      theme = 'dark';
    } else {
      theme = 'light';
    }
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        document.documentElement.style.colorScheme = theme;
      });
    } else {
      document.documentElement.style.colorScheme = theme; 
    }
    localStorage.setItem('theme', theme);
  }

  $effect(() => {
    loadLocale(language);
  })
</script>

<header>
  <nav>
    <div class="logo">AB</div>
    <ul class="nav-links">
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#languages-section">Languages</a></li>
      <li><a href="#projects">Projects</a></li>
    </ul>
    
    <div class="actions">
      <button class="theme-toggle" onclick={toggleTheme} aria-label="Toggle theme">
        {#if theme === 'light'}
          <!-- Sun Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
        {:else}
          <!-- Moon Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
        {/if}
      </button>

      <div id="language-selector">
        <button class="lang-trigger" popovertarget="languages" aria-label="Select language">
          <span class="lang-code">{getCurrentLang(language).label.toUpperCase()}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="chevron"><path d="m6 9 6 6 6-6"/></svg>
        </button>
        
        <div popover id="languages" bind:this={popover}>
          <div class="popover-header">
            <h3>Select Language</h3>
          </div>
          <ul class="lang-list">
            {#each languages as lang}
              <li>
                <button 
                  class="lang-option {language === lang.code ? 'active' : ''}" 
                  onclick={() => selectLanguage(lang.code)}
                >
                  <span class="lang-flag">{lang.flag}</span>
                  <span class="lang-label">{lang.label}</span>
                  {#if language === lang.code}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="check"><path d="M20 6 9 17l-5-5"/></svg>
                  {/if}
                </button>
              </li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
  </nav>

  <div class="hero-content">
    <div class="profile-info">
      <h1>Alessandro Bonanno</h1>
      <h2 class="role">Frontend Engineer</h2>
      <p class="tagline">Crafting pixel-perfect, performant, and accessible web experiences.</p>
      
      <div class="contact-links">
        <a href="mailto:15blex@gmail.com" class="contact-pill" aria-label="Email">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          <span>15blex@gmail.com</span>
        </a>
        <a href="https://www.linkedin.com/in/alessandrobonanno/" target="_blank" rel="noopener noreferrer" class="contact-pill" aria-label="LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          <span>LinkedIn</span>
        </a>
        <div class="contact-pill location">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          <span>Barcelona, ES</span>
        </div>
      </div>
    </div>
  </div>
</header>

<style>
  header {
    background: radial-gradient(circle at top right, var(--color-bg-2) 0%, transparent 40%),
                radial-gradient(circle at bottom left, var(--color-bg-2) 0%, transparent 40%);
    padding-bottom: var(--space-6);
    border-bottom: 1px solid var(--color-border);
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--space-4) var(--space-6);
    max-width: 1200px;
    margin: 0 auto;
  }

  .logo {
    font-family: var(--font-display);
    font-weight: 800;
    font-size: 1.5rem;
    letter-spacing: -0.02em;
    color: var(--color-text-1);
  }

  .nav-links {
    display: flex;
    gap: var(--space-4);
    list-style: none;
    margin: 0;
    padding: 0;
    align-items: center;
  }

  .nav-links a {
    text-decoration: none;
    color: var(--color-text-2);
    font-weight: 500;
    font-size: 0.95rem;
    transition: color 0.2s;
  }

  .nav-links a:hover {
    color: var(--color-text-1);
  }

  .actions {
    display: flex;
    align-items: center;
    gap: var(--space-3);
  }

  .theme-toggle {
    background: transparent;
    border: 1px solid var(--color-border);
    color: var(--color-text-2);
    cursor: pointer;
    padding: 8px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
  }

  .theme-toggle:hover {
    background: var(--color-bg-2);
    color: var(--color-text-1);
  }

  .hero-content {
    max-width: 1000px;
    margin: var(--space-6) auto 0;
    padding: 0 var(--space-4);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-4);
  }

  h1 {
    font-size: clamp(2.5rem, 5vw, 4.5rem);
    font-weight: 800;
    line-height: 1.1;
    margin: 0;
    letter-spacing: -0.03em;
    background: linear-gradient(135deg, var(--color-text-1) 0%, var(--color-text-3) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .role {
    font-size: clamp(1.2rem, 3vw, 1.8rem);
    font-weight: 600;
    margin: var(--space-2) 0;
    color: var(--color-text-2);
  }

  .tagline {
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto var(--space-4);
    color: var(--color-text-2);
    line-height: 1.6;
  }

  .contact-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--space-3);
    margin-top: var(--space-2);
  }

  .contact-pill {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    padding: 8px 16px;
    border-radius: 100px;
    background: var(--color-bg-2);
    color: var(--color-text-1);
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
    transition: all 0.2s ease;
    border: 1px solid var(--color-border);
  }

  .contact-pill:hover {
    background: var(--color-bg-3);
    transform: translateY(-1px);
    border-color: var(--color-text-3);
  }

  .contact-pill.location {
    cursor: default;
  }

  .contact-pill.location:hover {
    background: var(--color-bg-2);
    transform: none;
    border-color: var(--color-border);
  }

  /* Language Selector Styles */
  #language-selector {
    position: relative;
    isolation: isolate;
    button {      
      anchor-name: --languages;
    }

  }

  .lang-trigger {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    padding: 6px 12px;
    background: transparent;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-full);
    color: var(--color-text-2);
    cursor: pointer;
    font-family: var(--font-sans);
    font-size: 0.9rem;
    font-weight: 500;
    transition: all 0.2s ease;
  }

  .lang-trigger:hover {
    background: var(--color-bg-2);
    color: var(--color-text-1);
    border-color: var(--color-text-3);
  }

  .lang-code {
    font-weight: 600;
  }

  .chevron {
    opacity: 0.5;
  }

  #languages {
    inset: auto;
    position: absolute;
    position-anchor: --languages;
    position-try-fallbacks: --left;
    top: anchor(bottom);
    right: anchor(right);
    margin: var(--space-2) 0 0 0;
    padding: 0;
    background: var(--color-bg-1);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
    width: max-content;
    opacity: 0;
    transform: translateY(-10px);
    transition: block-size 0.2s ease, opacity 0.2s ease, transform 0.2s ease, display 0.2s allow-discrete;
    z-index: 100;
  }

  #languages:popover-open {
    display: block;
    opacity: 1;
    block-size: auto;
    transform: translateY(0);
    
    @starting-style {
      block-size: 0;
      opacity: 0;
      transform: translateY(-10px);
    }
  }

  .popover-header {
    padding: var(--space-3);
    border-bottom: 1px solid var(--color-border);
  }

  .popover-header h3 {
    margin: 0;
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--color-text-2);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .lang-list {
    list-style: none;
    padding: var(--space-1);
    margin: 0;
  }

  .lang-option {
    width: 100%;
    display: flex;
    align-items: center;
    gap: var(--space-3);
    padding: var(--space-2) var(--space-3);
    border: none;
    background: transparent;
    color: var(--color-text-1);
    cursor: pointer;
    text-align: left;
    border-radius: var(--radius-md);
    transition: background-color 0.15s ease;
    font-family: var(--font-sans);
    font-size: 0.95rem;
  }

  .lang-option:hover {
    background: var(--color-bg-2);
  }

  .lang-option.active {
    background: var(--color-bg-2);
    font-weight: 600;
  }

  .lang-flag {
    font-size: 1.2rem;
    line-height: 1;
  }

  .lang-label {
    flex: 1;
  }

  .check {
    color: var(--color-accent, #3b82f6);
  }

  @media (max-width: 768px) {
    .nav-links {
      display: none;
    }
    
    header {
      padding-bottom: var(--space-5);
    }

    nav {
      justify-content: space-between;
    }
  }
</style>