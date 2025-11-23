<script>
  const experiences = [
    {
      role: "Frontend Engineer",
      company: "eDreams ODIGEO",
      type: "Full-time",
      date: "Aug 2019 - Present",
      location: "Barcelona Area, Spain",
      description: ""
    },
    {
      role: "Full Stack Developer",
      company: "Hyperting",
      type: "Full-time",
      date: "Oct 2018 - Jul 2019",
      location: "Bologna Area, Italy",
      description: ""
    },
    {
      role: "Analyst Developer",
      company: "Imola Informatica",
      type: "",
      date: "Jul 2018 - Sep 2018",
      location: "Imola",
      description: ""
    },
    {
      role: "Full Stack Developer",
      company: "Cubbit",
      type: "",
      date: "Nov 2017 - Jul 2018",
      location: "Bologna Area, Italy",
      description: ""
    },
    {
      role: "Full Stack Developer",
      company: "Remoria VR",
      type: "",
      date: "Sep 2017 - Nov 2017",
      location: "Bologna Area, Italy",
      description: ""
    },
    {
      role: "Interface Developer for SCAI Consulting",
      company: "YOOX NET-A-PORTER GROUP",
      type: "",
      date: "Jul 2016 - Sep 2017",
      location: "Bologna Area, Italy",
      description: ""
    },
    {
      role: "Web Developer",
      company: "Fdm Consulting",
      type: "",
      date: "Jun 2015 - Jul 2016",
      location: "Bologna Area, Italy",
      description: "Dynamic and static website development, SEO"
    },
    {
      role: "Substitute Teacher",
      company: "IIS Belluzzi-Fioravanti",
      type: "",
      date: "Dec 2015 - Jun 2016",
      location: "Bologna Area, Italy",
      description: "Teaching in Electronic Laboratory"
    },
    {
      role: "Substitute Teacher",
      company: "Fondazione Aldini Valeriani",
      type: "",
      date: "Oct 2015 - Dec 2015",
      location: "Bologna Area, Italy",
      description: "TOP teaching"
    },
    {
      role: "Substitute Teacher",
      company: "Fondazione Aldini Valeriani",
      type: "",
      date: "Feb 2015 - Jun 2015",
      location: "Bologna Area, Italy",
      description: "Electronics laboratory teacher"
    },
    {
      role: "Web Developer",
      company: "haba communication",
      type: "",
      date: "Jan 2014 - Apr 2015",
      location: "Bologna Area, Italy",
      description: "Static website development and basic SEO"
    },
    {
      role: "Web Developer",
      company: "Freelancer",
      type: "",
      date: "2009 - 2014",
      location: "Bologna Area, Italy",
      description: "Web design and static website development"
    }
  ];
</script>

<section id="experience">
  <h2>Experience</h2>
  <div class="timeline">
    {#each experiences as job}
      <article class="experience-card">
        <div class="header">
            <h3>{job.role}</h3>
            <span class="date">{job.date}</span>
        </div>
        <div class="company-info">
            <span class="company">{job.company}</span>
            {#if job.type}
                <span class="separator">•</span>
                <span class="type">{job.type}</span>
            {/if}
        </div>
        <p class="location">{job.location}</p>
        {#if job.description}
            <p class="description">{job.description}</p>
        {/if}
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

  .timeline {
    display: flex;
    flex-direction: column;
    gap: var(--space-5);
  }

  .experience-card {
    background: light-dark(rgba(0, 0, 0, 0.03), rgba(255, 255, 255, 0.05));
    border: 1px solid light-dark(rgba(0, 0, 0, 0.1), rgba(255, 255, 255, 0.1));
    border-radius: 12px;
    padding: var(--space-4);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .experience-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.1);
    border-color: light-dark(rgba(0, 0, 0, 0.2), rgba(255, 255, 255, 0.2));
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
    color: inherit;
  }

  .date {
    font-size: 0.9rem;
    opacity: 0.7;
    font-family: monospace;
  }

  .company-info {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    margin-bottom: var(--space-1);
    font-weight: 500;
  }

  .company {
    color: light-dark(#0056b3, #64ffda);
  }

  .separator {
    opacity: 0.5;
  }

  .location {
    font-size: 0.9rem;
    opacity: 0.6;
    margin-bottom: var(--space-2);
    font-style: italic;
  }

  .description {
    font-size: 0.95rem;
    line-height: 1.6;
    opacity: 0.9;
    margin-top: var(--space-2);
  }
</style>