<script lang="ts">
	import 'itagoglow/itagoglow.min.css';
	import './customize.css';
	import Logo from './components/Logo.svelte';
	import { versionItagoglow, versionLocal } from '$lib/versions';

	let { children } = $props();

	import { goto } from '$app/navigation';
	import Progress from './components/Progress.svelte';
	import ChaosWheel from './components/ChaosWheel.svelte';

	let menuOpen = $state(false);
	let menuHeaderVisible = $state(false);
	let navLinksVisible = $state(false);

	function toggleMenu() {
		menuOpen = !menuOpen;
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

	function randomColor(saturation = '70%', lightness = '50%') {
		const hue = Math.floor(Math.random() * 360);
		return `hsl(${hue}, ${saturation}, ${lightness})`;
	}

	function setRandomColors() {
		// Generate base colors
		const baseHue = Math.floor(Math.random() * 360);
		const secondaryHue = (baseHue + 180) % 360; // Complementary color
		const tertiaryHue = (baseHue + 90) % 360;
		const quaternaryHue = (baseHue + 270) % 360;

		document.documentElement.style.setProperty('--dominant', `hsl(${baseHue}, 50%, 10%)`);
		document.documentElement.style.setProperty('--complement', `hsl(${baseHue}, 50%, 20%)`);
		document.documentElement.style.setProperty('--text', `hsl(${baseHue}, 20%, 90%)`);

		document.documentElement.style.setProperty('--action', `hsl(${quaternaryHue}, 70%, 20%)`);
		document.documentElement.style.setProperty('--highlight', `hsl(${tertiaryHue}, 70%, 50%)`);

		document.documentElement.style.setProperty('--alt', `hsl(${secondaryHue}, 70%, 50%)`);
		document.documentElement.style.setProperty('--danger', `hsl(0, 70%, 50%)`); // Keep danger red
	}
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	const scale = writable(1);
	let activeSection = $state('colors');
	onMount(() => {
		function updateActiveSection() {
			const sections = [
				{ id: 'colors' },
				{ id: 'flexing' },
				{ id: 'typography' },
				{ id: 'buttons' },
				{ id: 'tables' },
				{ id: 'spaces' },
				{ id: 'cards' }
			];
			let found = '';
			for (const section of sections) {
				const el = document.getElementById(section.id);
				if (el) {
					const rect = el.getBoundingClientRect();
					if (rect.top <= 80 && rect.bottom > 80) {
						found = section.id;
						break;
					}
				}
			}
			activeSection = found;
			console.log('Active Section:', activeSection);
		}

		async function handleScroll() {
			const scrollY = window.scrollY || window.pageYOffset;
			// Scale from 1 (top) to 1.2 (scrolled 500px or more)
			const newScale = 1 + (scrollY / window.innerHeight) * 0.05;
			scale.set(newScale);
			updateActiveSection();
		}
		window.addEventListener('scroll', handleScroll);
		handleScroll();
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<svelte:head>
	<title>ItAgoGlow - CSS Utilities</title>
	<meta
		name="description"
		content="A lightweight flexbox-based CSS library for glowing interfaces"
	/>
</svelte:head>

<!-- Header with Navigation -->
<header class="slim flx-x pad-m back-dark">
	<!-- <nav class="flx row between">
		<button class="circle" aria-label="Home" onclick={() => goto('/')}>
			<svg width="24" height="24" viewBox="0 0 24 24">
				<path
					d="M12 2L2 7v10c0 5.55 3.84 10 9 11 1.16.21 2.31.21 3.47 0 5.16-1 9-5.45 9-11V7l-10-5z"
				/>
			</svg>
		</button>
		<button class="circle" aria-label="Open navigation menu" onclick={setRandomColors}>
			<svg width="24" height="24" viewBox="0 0 24 24">
				<path d="M3 12h18M3 6h18M3 18h18" />
			</svg>
		</button>
	</nav> -->
	<nav class="flx row between">
		<button class="glow glow-action" aria-label="Home" onclick={() => goto('/')}>
			<Logo />
		</button>
		<menu class="flx row gap-m hide-on-mobile">
			<a
				class="glow glow-action"
				href="#colors"
				onclick={handleNavClick}
				class:button={activeSection === 'colors'}>Colors</a
			>
			<a
				class="glow glow-action"
				href="#flexing"
				onclick={handleNavClick}
				class:button={activeSection === 'flexing'}>Flexing</a
			>
			<a
				class="glow glow-action"
				href="#typography"
				onclick={handleNavClick}
				class:button={activeSection === 'typography'}>Typography</a
			>
			<a
				class="glow glow-action"
				href="#spaces"
				onclick={handleNavClick}
				class:button={activeSection === 'spaces'}>Spaces</a
			>
			<a
				class="glow glow-action"
				href="#buttons"
				onclick={handleNavClick}
				class:button={activeSection === 'buttons'}>Buttons</a
			>
			<a
				class="glow glow-action"
				href="#cards"
				onclick={handleNavClick}
				class:button={activeSection === 'cards'}>Cards</a
			>
			<a
				class="glow glow-action"
				href="#tables"
				onclick={handleNavClick}
				class:button={activeSection === 'tables'}>Tables</a
			>
		</menu>
		<div class="flx row">
			<button class="circle alt glow-alt" aria-label="Open secondary menu" onclick={toggleMenu}>
				<svg width="24" height="24" viewBox="0 0 24 24">
					<path d="M6 9l6 6 6-6" />
				</svg>
			</button>
			<button class="glow glow-action" aria-label="Randomize colors" onclick={setRandomColors}>
				<ChaosWheel />
			</button>
		</div>
	</nav>
	{#if menuOpen}
		<div class="flx-x absolute back-dominant grad-down-darker z-0 pad">
			<div class="flx-x mt-10vh gap-m">
				<a class="button" href="#about" onclick={handleNavClick}>Other sites made with itagoglow</a>
				<a class="button" href="#contact" onclick={handleNavClick}>Contact</a>
			</div>
		</div>
	{/if}
</header>

<!-- Menu Overlay -->
<!-- <div id="menu" class="flx-xy" style:transform={menuOpen ? 'translateY(0%)' : 'translateY(-100%)'}>
	<div id="menu-header" class="flx" style:opacity={menuHeaderVisible ? '1' : '0'}>
		<h2 class="font-header">Navigation</h2>
	</div>
</div> -->

<div class="flx-xy back-dominant grad-down-dark">
	<div
		class="flx-xy h-100vh z-0 texture--white"
		style="position: fixed; top: 0; transform: scale({$scale}) rotate({$scale * 90}deg);"
	></div>
	<div class="relative flx-xy z-1">
		<!-- <Progress /> -->
		<!-- Main Content -->
		<main class="flx-xy pad-m compensate-header">
			{@render children?.()}
		</main>

		<!-- Footer -->
		<footer class="flx-x col top right pad">
			<hr class="h-50vh" />
			<div class="flx-x row top between">
				<div class="flx left gap-m">
					<!-- <small class="txt--s">latest version {versionItagoglow}</small> -->
					<small class="txt--s"
						><a href="https://github.com/albkom/itagoglow" target="_blank" rel="noopener"
							>github.com/albkom/itagoglow</a
						>
					</small>
					<small class="txt--s"
						>released under the
						<a
							href="https://github.com/albkom/itagoglow/blob/main/LICENSE"
							target="_blank"
							rel="noopener">MIT License</a
						></small
					>
				</div>
				<div class="flx right gap-m">
					<small class="txt--s">current version {versionItagoglow}</small>
					<small class="txt--s">site version {versionLocal}</small>
					<small class="txt--s"
						>developed by <a href="https://itagoglow.web.app" target="_blank" rel="noopener"
							>LOGO</a
						>
					</small>
					<small class="txt--s">
						Made with <a href="https://svelte.dev" target="_blank" rel="noopener">Svelte(Kit)</a>
					</small>
					<!-- <a href="mailto:alb.kom.dev@gmail.com">alb.kom.dev@gmail.com</a> -->
				</div>
			</div>
			<hr />
			<hr class="h-10vh" />
		</footer>
	</div>
</div>
