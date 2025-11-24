<script>
  const projects = [
    {
      title: "Domotron",
      description: "A smart home proof of concept made from scratch Using Arduino + freeRTOS (multitasking on Arduino),",
      tags: ["Arduino", "freeRTOS", "Express.js", "Socket.io", "Angular 2"],
      link: "#",
      github: "https://bitbucket.org/alexi90/domotron"
    },
    {
      title: "Your (hidden) personal assistant",
      description: "Using IBM Watson we'we built a proof of concept service that allowed us to show off better products to our customers. Mocked data analysis were made on guest and logged user to provide more personal results in item reserch page.",
      tags: ["Watson", "JS", ".NET",],
      link: "#",
      github: "#"
    },
    {
      title: "Portfolio Website",
      description: "A modern, high-performance personal portfolio website built with SvelteKit. Features a premium design system, dark mode support, and perfect Lighthouse scores.",
      tags: ["Svelte", "Vite"],
      link: "https://15blex.github.io/",
      github: "https://github.com/15blex/15blex.github.io"
    }
  ];
</script>

<section id="projects">
  <h2>Featured Projects</h2>
  <div class="grid">
    {#each projects as project}
      <article class="project-card">
        <div class="card-content">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div class="tags">
            {#each project.tags as tag}
              <span class="tag">{tag}</span>
            {/each}
          </div>
          <div class="links">
            <a href={project.link} class="btn primary">View Project</a>
            <a href={project.github} class="btn secondary" aria-label="GitHub Repo">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
          </div>
        </div>
      </article>
    {/each}
  </div>
</section>

<style>
  section {
    padding: var(--space-6) var(--space-4);
    max-width: 1200px;
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
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: var(--space-5);
  }

  .project-card {
    background: light-dark(rgba(0, 0, 0, 0.03), rgba(255, 255, 255, 0.05));
    border: 1px solid light-dark(rgba(0, 0, 0, 0.1), rgba(255, 255, 255, 0.1));
    border-radius: 16px;
    padding: var(--space-5);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
  }

  .project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.15);
    border-color: light-dark(rgba(0, 0, 0, 0.2), rgba(255, 255, 255, 0.2));
  }

  .card-content {
    display: flex;
    flex-direction: column;
      flex-grow: 1;

    p {
      flex-grow: 1;
    }
  }

  .project-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, light-dark(#000, #fff), light-dark(#666, #aaa));
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .project-card:hover::before {
    opacity: 1;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0 0 var(--space-3);
    color: light-dark(#111, #fff);
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: light-dark(#555, #bbb);
    margin-bottom: var(--space-4);
    flex-grow: 1;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
    margin-bottom: var(--space-5);
  }

  .tag {
    font-size: 0.8rem;
    padding: 4px 10px;
    border-radius: 100px;
    background: light-dark(rgba(0,0,0,0.05), rgba(255,255,255,0.1));
    color: light-dark(#444, #ccc);
    font-weight: 500;
  }

  .links {
    display: flex;
    gap: var(--space-3);
    align-items: center;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.95rem;
    transition: all 0.2s ease;
  }

  .btn.primary {
    background: light-dark(#111, #fff);
    color: light-dark(#fff, #000);
  }

  .btn.primary:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  .btn.secondary {
    background: transparent;
    border: 1px solid light-dark(rgba(0,0,0,0.2), rgba(255,255,255,0.2));
    color: var(--color-primary);
    padding: 10px;
  }

  .btn.secondary:hover {
    background: light-dark(rgba(0,0,0,0.05), rgba(255,255,255,0.1));
    border-color: light-dark(rgba(0,0,0,0.4), rgba(255,255,255,0.4));
  }
</style>
