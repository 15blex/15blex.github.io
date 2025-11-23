<section id="about">
  <div class="content">
    <div class="bio-container">
      <p class="lead">
        Hi! I'm a developer who loves digging into how things work.
      </p>
      <p class="text">
        My comfort zone is in the <span class="highlight">JavaScript</span> and <span class="highlight">TypeScript</span> ecosystem (both frontend and backend), 
        but I'm currently diving deep into systems programming with <span class="highlight">Go</span> and <span class="highlight">Rust</span>.
      </p>
      <p class="text">
        I'm also fascinated by the intersection of the digital and physical worlds through <span class="highlight">AR/VR</span>, <span class="highlight">IoT</span>, and <span class="highlight">Robotics</span>.
        I love meeting new people and swapping ideas, so don't hesitate to reach out!
      </p>
    </div>
    
    <div class="highlights">
        <div class="card">
            <span class="icon">🌐</span>
            <h3>Full Stack</h3>
            <p>Building scalable web applications with modern JS/TS stacks.</p>
        </div>
        <div class="card">
            <span class="icon">⚡</span>
            <h3>Systems</h3>
            <p>Exploring high-performance computing with Go and Rust.</p>
        </div>
        <div class="card">
            <span class="icon">🤖</span>
            <h3>Future Tech</h3>
            <p>Bridging digital and physical realms via IoT and Robotics.</p>
        </div>
    </div>
  </div>
</section>

<style>
  section {
    padding: var(--space-6) var(--space-4);
    color: var(--color-primary);
  }

  .content {
    max-width: 1000px;
    margin: 0 auto;
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: var(--space-6);
    text-align: center;
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  .bio-container {
    max-width: 800px;
    margin: 0 auto var(--space-6);
    text-align: center;
  }

  .lead {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: var(--space-4);
    line-height: 1.4;
    color: light-dark(#111, #fff);
  }

  .text {
    margin-inline: auto;
    font-size: 1.1rem;
    line-height: 1.7;
    margin-bottom: var(--space-3);
    color: light-dark(#444, #ccc);
  }

  .highlight {
    color: light-dark(#0056b3, #64ffda);
    font-weight: 600;
  }

  .highlights {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--space-4);
    margin-top: var(--space-6);
  }

  .card {
    background: light-dark(rgba(0, 0, 0, 0.03), rgba(255, 255, 255, 0.05));
    border: 1px solid light-dark(rgba(0, 0, 0, 0.1), rgba(255, 255, 255, 0.1));
    border-radius: 16px;
    padding: var(--space-5);
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px -12px rgba(0, 0, 0, 0.1);
    border-color: light-dark(rgba(0, 0, 0, 0.2), rgba(255, 255, 255, 0.2));
  }

  .icon {
    font-size: 2.5rem;
    display: block;
    margin-bottom: var(--space-3);
  }

  .card h3 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: var(--space-2);
    color: light-dark(#222, #eee);
  }

  .card p {
    font-size: 0.95rem;
    color: light-dark(#666, #aaa);
    line-height: 1.5;
  }
</style>
