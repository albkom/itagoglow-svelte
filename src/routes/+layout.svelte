<script lang="ts">
	import 'itagoglow/itagoglow.min.css';
	import './customize.css';

	// // If you're using a fallback (i.e. SPA mode) you don't need to prerender all
	// // pages by setting this here, but should prerender as many as possible to
	// // avoid large performance and SEO impacts
	// export const prerender = true;

	let { children } = $props();

	import { goto } from '$app/navigation';

	let menuOpen = $state(false);
	let menuHeaderVisible = $state(false);
	let navLinksVisible = $state(false);

	function toggleMenu() {
		menuOpen = !menuOpen;

		if (menuOpen) {
			setTimeout(() => {
				menuHeaderVisible = true;
				setTimeout(() => {
					navLinksVisible = true;
				}, 100);
			}, 100);
		} else {
			menuHeaderVisible = false;
			navLinksVisible = false;
		}
	}

	function closeMenu() {
		menuOpen = false;
		menuHeaderVisible = false;
		navLinksVisible = false;
	}

	function handleNavClick(e: Event) {
		e.preventDefault();
		const target = e.currentTarget as HTMLAnchorElement;
		const href = target.getAttribute('href');
		if (!href) return;

		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
			closeMenu();
		}
	}

	// import { onMount } from 'svelte';
	// let svgContent = '';

	// onMount(async () => {
	// 	const response = await fetch('/assets/logo.svg');
	// 	if (response.ok) {
	// 		svgContent = await response.text();
	// 	}
	// });
</script>

<svelte:head>
	<title>ItAgoGlow - CSS Utilities</title>
	<meta
		name="description"
		content="A lightweight flexbox-based CSS library for glowing interfaces"
	/>
</svelte:head>

<!-- Header with Navigation -->
<header class="flx-x pad-m">
	<nav class="flx row between">
		<button class="circle" aria-label="Home" onclick={() => goto('/')}>
			<svg width="24" height="24" viewBox="0 0 24 24">
				<path
					d="M12 2L2 7v10c0 5.55 3.84 10 9 11 1.16.21 2.31.21 3.47 0 5.16-1 9-5.45 9-11V7l-10-5z"
				/>
			</svg>
		</button>
		<button class="circle" disabled aria-label="Open navigation menu" onclick={toggleMenu}>
			<svg width="24" height="24" viewBox="0 0 24 24">
				<path d="M3 12h18M3 6h18M3 18h18" />
			</svg>
		</button>
	</nav>
</header>

<!-- Menu Overlay -->
<div id="menu" class="flx-xy" style:transform={menuOpen ? 'translateY(0%)' : 'translateY(-100%)'}>
	<div id="menu-header" class="flx" style:opacity={menuHeaderVisible ? '1' : '0'}>
		<h2 class="font-header">Navigation</h2>
	</div>
	<nav class="flx">
		<ul class="flx">
			<li class="nav-link" style:opacity={navLinksVisible ? '1' : '0'}>
				<a href="#colors" onclick={handleNavClick}>Colors</a>
			</li>
			<li class="nav-link" style:opacity={navLinksVisible ? '1' : '0'}>
				<a href="#typography" onclick={handleNavClick}>Typography</a>
			</li>
			<li class="nav-link" style:opacity={navLinksVisible ? '1' : '0'}>
				<a href="#buttons" onclick={handleNavClick}>Buttons</a>
			</li>
			<li class="nav-link" style:opacity={navLinksVisible ? '1' : '0'}>
				<a href="#cards" onclick={handleNavClick}>Cards</a>
			</li>
			<li class="nav-link" style:opacity={navLinksVisible ? '1' : '0'}>
				<a href="/flexing">flexing</a>
			</li>
			<li class="nav-link" style:opacity={navLinksVisible ? '1' : '0'}>
				<a href="/spaces">spaces</a>
			</li>
			<li class="nav-link" style:opacity={navLinksVisible ? '1' : '0'}>
				<a href="#tables" onclick={handleNavClick}>Tables</a>
			</li>
		</ul>
	</nav>
</div>

<div class="relative flx-xy">
	<!-- Main Content -->
	<main class="flx-xy pad-m compensate-header">
		{@render children?.()}
	</main>

	<!-- Footer -->
	<footer class="flx-x col top right pad">
		<hr class="h-10vh" />
		<div class="flx-x right">
			<small class="txt--s">current version 1.0.2</small>
			<small
				><a href="https://github.com/albkom/itagoglow" target="_blank" rel="noopener"
					>github.com/albkom/itagoglow</a
				>
			</small>
			<!-- <a href="mailto:alb.kom.dev@gmail.com">alb.kom.dev@gmail.com</a> -->
		</div>
		<hr />
		<div class="flx-x right gap-m">
			<small class="txt--s"
				>Site developed by <a href="https://itagoglow.web.app" target="_blank" rel="noopener"
					>LOGO</a
				>
			</small>
			<small class="txt--s">
				Made with <a href="https://svelte.dev" target="_blank" rel="noopener">Svelte(Kit)</a>
			</small>
		</div>
		<hr class="h-10vh" />
	</footer>
</div>
