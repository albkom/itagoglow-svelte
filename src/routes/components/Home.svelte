<script lang="ts">
	import { versionItagoglow } from '$lib/versions';
	import Logo from './Logo.svelte';
</script>

<section id="home">
	<div class="flx center relative">
		<div id="logo-background" class="h-10vh absolute glow--l glow-dark animate-color-highlight">
			<Logo />
		</div>
		<hr class="h-2vh" />
		<h1 class="font-header highlight glow glow-highlight mt-10vh">ItAgoGlow</h1>
	</div>
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
	<code class="badge back-darker pad mt-7vh mb-2vh glow--l glow-action"
		>&gt; npm i itagoglow@{versionItagoglow}</code
	>
	<a href="https://www.npmjs.com/package/itagoglow" target="_blank" rel="noopener" class="mb-5vh"
		>View on npm</a
	>
	<div class="flx-x txt--left">
		<span>
			<code class="badge back-dark pad-s">itagoglow.css</code> is a minimal CSS utility library designed
			for rapid development of visually appealing user interfaces. Use it to build responsive, modern web layouts with clean, semantic classes and minimal
			overhead.
		</span>
	</div>
</section>
