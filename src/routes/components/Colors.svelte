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
	<div class="flx-x gap-s">
		<div class="card--darker flx-x pad">
			<table class="color-table">
				<tbody>
					<tr>
						<td><div class="badge w-20 flx-xy pad-s back-dominant">Dominant</div></td>
						<td>
							This is your main vibe-setter—think of it as the hero color, painting the whole scene
							and stealing the spotlight.
						</td>
					</tr>
					<tr>
						<td><div class="badge w-20 flx-xy pad-s back-complement">Complement</div></td>
						<td>
							Your sidekick color—adds a lil’ contrast and keeps things fresh, so it’s never boring.
						</td>
					</tr>
					<tr>
						<td><div class="badge w-20 flx-xy pad-s back-text">Text</div></td>
						<td>
							The go-to for all your words—keeps your text crisp, clean, and easy to vibe with.
						</td>
					</tr>
					<tr>
						<td><div class="badge w-20 flx-xy pad-s back-action">Action</div></td>
						<td>
							Your “click me!” color—perfect for buttons, links, and anything you want folks to
							smash.
						</td>
					</tr>
					<tr>
						<td><div class="badge w-20 flx-xy pad-s back-highlight">Highlight</div></td>
						<td>
							Make it pop! Use this to draw eyes and add that extra glow where you want the hype.
						</td>
					</tr>
					<tr>
						<td><div class="badge w-20 flx-xy pad-s back-danger">Danger</div></td>
						<td>
							Red alert! This one’s for errors, warnings, or anything that needs a “yo, watch out!”
							vibe.
						</td>
					</tr>
					<tr>
						<td><div class="badge w-20 flx-xy pad-s back-alt">Alternative</div></td>
						<td>
							Your wildcard—an extra accent for when you wanna switch it up or add some extra
							flavor.
						</td>
					</tr>
				</tbody>
			</table>
			<div class="card--dominant pad mt-3vh">
				<span class="txt--left"
					>Experiment with tints and shades to customize your palette.</span
				>
				<div class="flx row rounded overflow-hidden">
					<div class="flx h-10vh ar-1 back-lighter">light</div>
					<div class="flx h-10vh ar-1 back-light">light</div>
					<div class="flx h-10vh ar-1 back-dominant">dominant</div>
					<div class="flx h-10vh ar-1 back-dark">dark</div>
					<div class="flx h-10vh ar-1 back-darker">darker</div>
				</div>
			</div>
		</div>
	</div>
	<hr class="h-5vh" />
	<div class="card--dark flx-x pad gap-m">
		<h3 class="font-header">Craft Your Color Vibe!</h3>
		<span class="txt--justify">
			Tap any swatch to remix your site’s style in real time. Mix, match, and watch your palette
			pop—your perfect look is just a click away!
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
