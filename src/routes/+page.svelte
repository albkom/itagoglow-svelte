<script lang="ts">
	import Buttons from './components/Buttons.svelte';
	import Cards from './components/Cards.svelte';
	import Colors from './components/Colors.svelte';
	import Flexing from './components/Flexing.svelte';
	import Spacings from './components/Spacings.svelte';
	import Tables from './components/Tables.svelte';
	import Typography from './components/Typography.svelte';

	import { onMount } from 'svelte';
</script>

<h1 class="font-header highlight glow--l glow-action">ItAgoGlow</h1>
<hr class="h-10vh" />
<h2 class="font-header txt--left" style="margin-top: 0.5rem">
	<span class="highlight glow glow-highlight">&gt;</span> Arrange Quickly <br />
	<span class="highlight glow glow-highlight">&gt;</span> Style Fast <br />
	<span class="highlight glow glow-highlight">&gt;</span> Make It
	<span class="glow glow-text">Glow</span>
</h2>
<hr class="h-5vh" />
<h3 class="font-main txt--center">
	A lightweight flexbox-based CSS library for glowing interfaces.
</h3>
<code class="badge back-darker pad mt-7vh mb-2vh glow--l glow-action">&gt; npm i itagoglow@latest</code>
<a href="https://www.npmjs.com/package/itagoglow" target="_blank" rel="noopener" class="mb-5vh"
	>View on npm</a
>
<div class="flx-x txt--left">
	<span>
		<code class="badge back-dark pad-s">itagoglow.css</code> is a minimal CSS utility library designed
		for rapid development of visually appealing, glowing user interfaces.
	</span>
	<span>
		Use it to build responsive, modern web layouts with clean, semantic classes and minimal
		overhead.</span
	>
</div>
<Colors />
<Flexing />
<Typography />
<Spacings />
<Buttons />
<Cards />
<Tables />
