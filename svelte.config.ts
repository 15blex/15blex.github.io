import adapter from '@sveltejs/adapter-static';

export default {
  compileOptions: {
    minify: true
  },
  kit: {
    adapter: adapter(),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/15blex.github.io' : ''
    }
  }
};
