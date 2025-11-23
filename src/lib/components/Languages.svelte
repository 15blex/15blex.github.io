<script>
  const languages = [
    { name: 'Italian', level: 'Native', proficiency: 100, code: 'IT' },
    { name: 'English', level: 'Fluent', proficiency: 95, code: 'EN' },
    { name: 'Spanish', level: 'Fluent', proficiency: 90, code: 'ES' },
    { name: 'Catalan', level: 'Basic', proficiency: 40, code: 'CA' },
    { name: 'French', level: 'Learning', proficiency: 25, code: 'FR' },
    { name: 'Portuguese', level: 'Learning', proficiency: 20, code: 'PT' }
  ];
</script>

<section id="languages-section">
  <div class="content-wrapper">
    <h2>Languages</h2>
    <div class="language-grid">
      {#each languages as lang}
        <div class="language-card">
          <div class="card-header">
            <span class="lang-code">{lang.code}</span>
            <div class="lang-info">
              <h3>{lang.name}</h3>
              <span class="level">{lang.level}</span>
            </div>
          </div>
          <div class="progress-container">
            <div class="progress-bar" style="width: {lang.proficiency}%"></div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  section {
    padding: var(--space-9) var(--space-4);
    background: linear-gradient(to bottom, transparent, var(--color-bg-2));
  }

  .content-wrapper {
    max-width: 1200px;
    margin: 0 auto;
  }

  h2 {
    font-family: var(--font-display);
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: var(--space-7);
    background: linear-gradient(135deg, var(--color-text-1), var(--color-text-3));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: -0.02em;
    text-align: center;
  }

  .language-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--space-5);
  }

  .language-card {
    background: var(--color-bg-1);
    border: 1px solid var(--color-border);
    border-radius: 16px;
    padding: var(--space-5);
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    box-shadow: var(--shadow-sm);
  }

  .language-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
    border-color: var(--color-text-3);
    background: var(--color-bg-2);
  }

  .card-header {
    display: flex;
    align-items: center;
    gap: var(--space-4);
    margin-bottom: var(--space-4);
  }

  .lang-code {
    font-size: 1.2rem;
    font-weight: 800;
    color: var(--color-text-1);
    opacity: 0.5;
    background: var(--color-bg-3);
    padding: 8px 12px;
    border-radius: 8px;
    font-family: monospace;
  }

  .lang-info {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  h3 {
    font-family: var(--font-display);
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0;
    color: var(--color-text-1);
  }

  .level {
    font-size: 0.875rem;
    color: var(--color-text-2);
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .progress-container {
    height: 6px;
    background: var(--color-bg-3);
    border-radius: 3px;
    overflow: hidden;
  }

  .progress-bar {
    height: 100%;
    background: var(--color-text-1);
    border-radius: 3px;
    transition: width 1s ease-out;
    opacity: 0.9;
  }
</style>