<script>
	let spacings = Array.from({ length: 7 }, () => ({
		mt: Math.floor(Math.random() * 10) + 1,
		h: Math.floor(Math.random() * 10) + 1
	}));
</script>

<section id="spaces" class="compensate-header txt--left">
	<h2 class="font-header highlight">Sizes and Spacings</h2>
	<div class="flx left gap-m">
		<div class="flx-x left txt--left">
			<span>
				Use values proportional to viewport height (<code>vh</code>) and root font size (<code
					>rem</code
				>).
			</span>
			<span>
				Fine-tune your layout with small steps from
				<strong>1 to 10</strong>, or make big moves with larger steps from
				<strong>10 to 100</strong>.</span
			>
			<hr />
			<div class="card--complement pad flx-x row wrap gap-s">
				{#each Array.from({ length: 10 }, (_, i) => i + 1) as n}
					<div class="flx-y start gap-s">
						<code class="badge flx back-dark pad-s w-2rem h-2rem"><span class="">{n}</span></code>
					</div>
				{/each}
				{#each Array.from({ length: 18 }, (_, i) => 10 + (i + 1) * 5) as n}
					<div class="flx-y start gap-s">
						<code class="badge flx back-darker pad-s w-2rem h-2rem"><span class="">{n}</span></code>
					</div>
				{/each}
			</div>
		</div>
	</div>
	<hr />
	<span class="txt--left">
		Combine these values to achieve precise and consistent spacing throughout your page. Here are
		some examples:
	</span>
	<hr />
	<div class="card--dark pad row top gap-m">
		{#each spacings as spacing}
			<div class="flx-y start gap-s">
				<code class="badge back-alternative pad-s">{`.mt-${spacing.mt}vh`}</code>
				<code class="badge back-highlight pad-s">{`.h-${spacing.h}vh`}</code>
				<div class="relative flx w-2rem top back-complement h-30vh rounded overflow-hidden">
					<div class="absolute flx-x back-alternative {`h-${spacing.mt}vh`}" style="top: 0">
						<div class="badge flx-x back-complement"></div>
					</div>
					<div class="flx-x back-highlight {`mt-${spacing.mt}vh`} {`h-${spacing.h}vh`}">
						<div class="badge flx-x back-complement"></div>
					</div>
				</div>
			</div>
		{/each}
	</div>
	<span class="txt--left mt-3vh">
		See more details and usage examples on the <a href="/spaces" class="link">Spaces page</a>.
	</span>
</section>
