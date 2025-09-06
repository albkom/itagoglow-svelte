<script lang="ts">
	let dominant = '#ffbf69';
	let complement = '#ff9f1c';
	let text = '#ffffff';

	import { onMount } from 'svelte';

	function updateCSSVars(color: { name: string; value: string }) {
		document.documentElement.style.setProperty(`--${color.name}`, color.value);
	}

	const colorNames = ['dominant', 'complement', 'text', 'action', 'highlight'];
	function getAllColorCSSVars() {
		const styles = getComputedStyle(document.documentElement);

		// console.log(styles)
		const vars = [];
		for (let i = 0; i < colorNames.length; i++) {
			const name = colorNames[i];
			let value = styles.getPropertyValue(`--${name}`).trim();
			value = value.split(':')[0];
			console.log(`--${name}`, value);
			vars.push({ name: name, value: value });
		}
		return vars;
	}
	// $: updateCSSVars();

	let colors: { name: string; value: string }[] = [];
	onMount(() => {
		// updateCSSVars();
		colors = getAllColorCSSVars();
		console.log(colors);
	});
</script>

<section id="colors" class="compensate-header txt--left">
	<h2 class="font-header highlight">Colors</h2>
	<div class="flx-x gap-m">
		<div class="flx-x left txt--left gap-m">
			<div class="flx-x row left gap-m">
				<code class="badge w-20 flx pad-s back-dominant border-s">Dominant</code>
				<span>
					Set the vibes, serving as the main background and the most prominent color throughout the
					page.
				</span>
			</div>
			<div class="flx-x row left gap-m">
				<code class="badge w-20 flx pad-s back-complement">Complement</code>
				<span>Serves to provide slight contrast and visual interest. </span>
			</div>
			<div class="flx-x row left gap-m">
				<code class="badge w-20 flx pad-s back-text">Text</code>
				<span>Is the color for most of texts.</span>
			</div>
			<div class="flx-x row left gap-m">
				<code class="badge w-20 flx pad-s back-action">Action</code>
				<span>Is your go-to color for buttons and things you want dem to click.</span>
			</div>
			<div class="flx-x row left gap-m">
				<code class="badge w-20 flx pad-s back-highlight">Highlight</code>
				<span>Makes anything pop, use it to grab attention and add a little glow.</span>
			</div>
			<div class="flx-x row left gap-m">
				<code class="badge w-20 flx pad-s back-danger">Danger</code>
				<span>Is used for errors, warnings, or destructive actions.</span>
			</div>
			<div class="flx-x row left gap-m">
				<code class="badge w-20 flx pad-s back-alt">Alternative</code>
				<span>Is an extra accent color for secondary elements.</span>
			</div>
		</div>
		<div class="card--complement flx-x row around gap-m pad">
			<div class="flx-x">
				<span>
					<strong>Light</strong>, <strong>Lighter</strong>,
					<strong>Dark</strong>, and <strong>Darker</strong> are variations of the main colors, useful
					for backgrounds, borders, and subtle accents.
				</span>
				<div class="flx-x row around gap-m pad">
					<div class="badge pad-s back-lighter">lighter</div>
					<div class="badge pad-s back-light">light</div>
					<div class="badge pad-s back-dominant">dominant</div>
					<div class="badge pad-s back-dark">dark</div>
					<div class="badge pad-s back-darker border-s">darker</div>
				</div>
			</div>
		</div>
	</div>
	<hr class="h-2vh" />
	<div class="card--dark flx-x pad gap-m">
		<h3 class="font-header">Pick your palette!</h3>
		<span class="txt--justify">
			Click a color to instantly update the look of your page. Try out different combos and see your
			style come alive!
		</span>
		<div class="flx-x row wrap gap-s">
			{#each colors as color}
				<div class="flx row">
					<div class="relative flx w-10rem h-3rem rounded border-s text overflow-hidden">
						<code lang="css" class={`txt--s fw-700 flx-xy back-${color.name}`}>
							{color.name}: {color.value};
						</code>
						<input
							class="absolute flx-xy"
							type="color"
							readonly
							style="opacity: 0.0;"
							bind:value={color.value}
							on:input={() => updateCSSVars(color)}
						/>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
