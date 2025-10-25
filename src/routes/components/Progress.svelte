<script lang="ts">
	import { onMount } from 'svelte';

	const sections = ['colors', 'typography', 'buttons', 'cards', 'tables'];
	let activeSection = $state('');
	let isVisible = $state(true);
	let hideTimeout: number;

	let scroller: HTMLDivElement;
	onMount(() => {
		// Initial observer setup
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						activeSection = entry.target.id;
						showProgress();
					}
				});
			},
			{ threshold: 0.3 }
		);

		sections.forEach((section) => {
			const element = document.getElementById(section);
			if (element) observer.observe(element);
		});

		// Set initial hide timeout
		hideProgress();

		scroller = document.getElementById('scroller') as HTMLDivElement;

		// Pause hiding when hovering over the menu
		return () => observer.disconnect();
	});

	function showProgress() {
		console.log('showProgress');
		isVisible = false;
		scroller.style.transform = 'translateX(-100%)';
		scroller.style.opacity = '1';
		clearTimeout(hideTimeout);
		hideProgress();
	}

	function hideProgress() {
		hideTimeout = setTimeout(() => {
			isVisible = false;
			scroller.style.transform = 'translateX(+100%)';
			scroller.style.opacity = '0';
		}, 2000);
	}
</script>

<div class="progress-indicator flx row" role="navigation">
	<button class="flx-x h-25vh w-1rem" aria-label="Show progress indicator" onclick={showProgress}
	></button>
	<div id="scroller" class="flx-x gap-m" class:visible={isVisible}>
		{#each sections as section}
			<a
				href="#{section}"
				class="progress-dot pad {activeSection === section ? 'active' : ''}"
				aria-label={section}
			>
				<span class="progress-label">{section}</span>
			</a>
		{/each}
	</div>
</div>

<style>
	.progress-indicator {
		position: fixed;
		width: 2pt;
		top: 50%;
		right: 2rem;
		transform: translateY(-50%);
		/* display: flex; */
		/* flex-direction: column; */
		gap: 1rem;
		z-index: 100;
		/* border-left: solid 2pt var(--highlight);
		box-shadow: 0 0.1rem 1rem var(--highlight); */
		transition: opacity 0.3s ease;
		/* pointer-events: none; */
	}
	#scroller {
		padding-right: 1.5rem;
		transition: all 0.3s ease;
		background-color: color-mix(in srgb, var(--dark) 30%, color 70%);
	}
	.progress-indicator:hover {
		opacity: 1;
		pointer-events: all;
	}

	.progress-dot {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		/* background: var(--glow-color-darker); */
		position: relative;
		transition: all 0.3s ease;
	}

	.progress-dot:hover {
		/* background: var(--glow-color-highlight); */
		color: var(--highlight) !important;
		opacity: 1;
		text-shadow: 0 0 0.2em var(--highlight);
		/* transform: scale(1.2); */
	}

	.progress-label {
		position: absolute;
		right: 100%;
		top: 50%;
		transform: translateY(-50%);
		margin-right: 0.5rem;
		opacity: 0.5;
		transition: opacity 0.2s ease;
		font-size: 0.8rem;
		white-space: nowrap;
	}

	.progress-dot:hover .progress-label {
		opacity: 1;
	}
</style>
