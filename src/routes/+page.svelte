<script lang="ts">
	import Buttons from './components/Buttons.svelte';
	import Colors from './components/Colors.svelte';
	import Flexing from './components/Flexing.svelte';
	import Spacings from './components/Spacings.svelte';
	import Typography from './components/Typography.svelte';

	import { onMount } from 'svelte';
</script>

<h1 class="font-header highlight glow--l glow-action">ItAgoGlow</h1>
<hr class="h-5vh" />
<h2 class="font-header txt--left" style="margin-top: 0.5rem">
	&gt; Arrange Quickly <br />
	&gt; Style Fast <br />
	&gt; Make It <span class="glow glow-highlight">Glow</span>
</h2>
<hr class="h-3vh" />
<h3 class="font-main txt--center">
	A lightweight flexbox-based CSS library for glowing interfaces.
</h3>
<hr class="h-5vh" />
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
<hr class="h-9vh" />
<Colors />
<hr class="h-9vh" />
<Flexing />
<hr class="h-9vh" />
<Typography />
<hr class="h-9vh" />
<Spacings />
<hr class="h-9vh" />
<Buttons />
