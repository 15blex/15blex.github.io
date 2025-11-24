<script>
  import About from "$lib/components/About.svelte";
  import Education from "$lib/components/Education.svelte";
  import Experience from "$lib/components/Experience.svelte";
  import Skills from "$lib/components/Skills.svelte";
  import Projects from "$lib/components/Projects.svelte";
  import Languages from "$lib/components/Languages.svelte";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<svelte:head>
  <title>Alessandro Bonanno - 15blex</title>
  <meta name="description" content="Personal portfolio of Alessandro Bonanno" />
  <meta name="keywords" content="Alessandro Bonanno, 15blex, portfolio, Alessandro Bonanno portfolio" />
  <meta name="author" content="Alessandro Bonanno" />
</svelte:head>

<Header />

<main>  
  <About />
  
  <Experience />
  
  <Education />
  
  <Skills />
  
  <Languages />
  
  <Projects />
</main>

<Footer />

<style>
  main {
    min-height: max-content;
  }
</style>
