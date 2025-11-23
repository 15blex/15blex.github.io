<script>
  const education = [
    {
      school: 'ITIS "E. Fermi" - Fuscaldo',
      degree: "High School, Information Technology",
      date: "2004 - 2009",
      grade: "100/100",
      description: "Comprehensive study of computer science fundamentals, programming, and electronics."
    }
  ];
</script>

<section id="education">
  <h2>Education</h2>
  <div class="education-grid">
    {#each education as edu}
      <article class="education-card">
        <div class="icon-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
        </div>
        <div class="content">
          <div class="header">
            <h3>{edu.school}</h3>
            <span class="date">{edu.date}</span>
          </div>
          <p class="degree">{edu.degree}</p>
          {#if edu.grade}
            <div class="grade-badge">
              <span>Grade:</span>
              <strong>{edu.grade}</strong>
            </div>
          {/if}
          {#if edu.description}
            <p class="description">{edu.description}</p>
          {/if}
        </div>
      </article>
    {/each}
  </div>
</section>

<style>
  section {
    padding: var(--space-6) var(--space-4);
    max-width: 800px;
    margin: 0 auto;
    color: var(--color-primary);
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: var(--space-6);
    text-align: center;
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  .education-grid {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
  }

  .education-card {
    display: flex;
    gap: var(--space-4);
    background: light-dark(rgba(0, 0, 0, 0.03), rgba(255, 255, 255, 0.05));
    border: 1px solid light-dark(rgba(0, 0, 0, 0.1), rgba(255, 255, 255, 0.1));
    border-radius: 16px;
    padding: var(--space-5);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    align-items: flex-start;
  }

  .education-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.1);
    border-color: light-dark(rgba(0, 0, 0, 0.2), rgba(255, 255, 255, 0.2));
  }

  .icon-wrapper {
    background: light-dark(#fff, rgba(255, 255, 255, 0.1));
    border: 1px solid light-dark(#e0e0e0, rgba(255, 255, 255, 0.1));
    padding: 12px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: light-dark(#000, #fff);
  }

  .content {
    flex: 1;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    flex-wrap: wrap;
    gap: var(--space-2);
    margin-bottom: var(--space-1);
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0;
    color: light-dark(#111, #fff);
  }

  .date {
    font-family: monospace;
    font-size: 0.9rem;
    opacity: 0.6;
  }

  .degree {
    font-size: 1.1rem;
    color: light-dark(#444, #ccc);
    margin-bottom: var(--space-3);
    font-weight: 500;
  }

  .grade-badge {
    display: inline-flex;
    gap: var(--space-1);
    background: light-dark(rgba(0,0,0,0.05), rgba(255,255,255,0.1));
    padding: 4px 12px;
    border-radius: 100px;
    font-size: 0.9rem;
    margin-bottom: var(--space-3);
  }

  .description {
    font-size: 0.95rem;
    line-height: 1.6;
    color: light-dark(#666, #aaa);
  }

  @media (max-width: 600px) {
    .education-card {
      flex-direction: column;
    }
  }
</style>
