<script>
  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript (ES6+)", "TypeScript", "Go", "Rust", "HTML5", "CSS3", "SQL"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["Svelte", "SvelteKit", "React", "Next.js", "Node.js", "Express", "TailwindCSS"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "Docker", "Linux", "AWS", "CI/CD", "Webpack", "Vite"]
    },
    {
      title: "Interests & Focus",
      skills: ["UI/UX Design", "AR/VR", "IoT", "Robotics", "Performance Optimization", "Accessibility"]
    }
  ];
</script>

<section id="skills">
  <h2>Technical Skills</h2>
  <div class="grid">
    {#each skillCategories as category}
      <article class="category-card">
        <h3>{category.title}</h3>
        <div class="skills-list">
          {#each category.skills as skill}
            <span class="skill-tag">{skill}</span>
          {/each}
        </div>
      </article>
    {/each}
  </div>
</section>

<style>
  section {
    padding: var(--space-6) var(--space-4);
    max-width: 1000px;
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

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--space-5);
  }

  .category-card {
    background: light-dark(rgba(0, 0, 0, 0.03), rgba(255, 255, 255, 0.05));
    border: 1px solid light-dark(rgba(0, 0, 0, 0.1), rgba(255, 255, 255, 0.1));
    border-radius: 16px;
    padding: var(--space-5);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
  }

  .category-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px -12px rgba(0, 0, 0, 0.15);
    border-color: light-dark(rgba(0, 0, 0, 0.2), rgba(255, 255, 255, 0.2));
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0;
    color: light-dark(#222, #eee);
    border-bottom: 2px solid light-dark(rgba(0,0,0,0.05), rgba(255,255,255,0.05));
    padding-bottom: var(--space-2);
  }

  .skills-list {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
  }

  .skill-tag {
    font-size: 0.9rem;
    padding: 6px 12px;
    border-radius: 20px;
    background: light-dark(#fff, rgba(255, 255, 255, 0.1));
    border: 1px solid light-dark(#e0e0e0, rgba(255, 255, 255, 0.1));
    color: light-dark(#333, #ddd);
    font-weight: 500;
    transition: all 0.2s ease;
    cursor: default;
  }

  .skill-tag:hover {
    background: light-dark(#000, #fff);
    color: light-dark(#fff, #000);
    border-color: light-dark(#000, #fff);
    transform: scale(1.05);
  }
</style>