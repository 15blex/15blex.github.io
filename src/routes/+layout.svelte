<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import inter from '$lib/assets/fonts/inter-latin-ext.woff2';
	import outfit from '$lib/assets/fonts/outfit-latin-ext.woff2';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preload" href={inter} as="font" type="font/woff2" crossorigin="anonymous" />
	<link rel="preload" href={outfit} as="font" type="font/woff2" crossorigin="anonymous" />
</svelte:head>

{@render children()}