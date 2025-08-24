<section id="spaces">
	<h2 class="font-header">Spacings and Sizes</h2>
	<hr class="h-5vh" />
	<div class="card--dark pad row top gap-m">
		<div class="badge back-light pad-s">1</div>
		<div class="badge back-light pad-s">2</div>
		<div class="badge back-dominant pad-s">...</div>
		<div class="badge back-light pad-s">9</div>
		<div class="badge back-lighter pad-s">10</div>
		<div class="badge back-lighter pad-s">15</div>
		<div class="badge back-dominant pad-s">...</div>
		<div class="badge back-lighter pad-s">95</div>
		<div class="badge back-lighter pad-s">100</div>
	</div>
	<hr class="h-5vh" />
	<div class="card--dark flx row wrap pad gap-m">
		{#each Array.from({ length: 10 }, (_, i) => i + 1) as n}
			<div class="flx-y start gap-s">
				<code class="badge flx back-darker pad-s w-2rem h-4rem"
					><span class="w-4rem deg-90">{`.mt-${n}vh`}</span></code
				>
				<div class="flx h-20vh w-2rem top back-complement rounded">
					<div class={`badge back-highlight pad mt-${n}vh`}></div>
				</div>
			</div>
		{/each}
	</div>
	<hr class="h-5vh" />
	<div class="card--dark flx row top wrap pad gap-m">
		{#each Array.from({ length: 10 }, (_, i) => i + 1) as n}
			<div class="flx-y start gap-s">
				<code class="badge flx back-darker pad-s w-2rem h-4rem"
					><span class="w-4rem deg-90">{'.h-' + n + 'rem'}</span></code
				>
				<div class={'badge fill-x back-complement h-' + n + 'rem'}></div>
			</div>
		{/each}
	</div>
	<hr class="h-5vh" />
	<div class="card--dark flx row top wrap pad gap-m">
		{#each Array.from({ length: 10 }, (_, i) => i + 1) as n}
			<div class="flx-y start gap-s">
				<code class="badge flx back-darker pad-s w-2rem h-4rem"
					><span class="w-4rem deg-90">{'.h-' + n + 'vh'}</span></code
				>
				<div class={'badge fill-x back-complement h-' + n + 'vh'}></div>
			</div>
		{/each}
	</div>
	<hr class="h-5vh" />
	<div class="card--dark flx row top wrap pad gap-m">
		{#each Array.from({ length: 10 }, (_, i) => (i + 1) * 10) as n}
			<div class="flx-y start gap-s w-2rem">
				<div class={'badge flx-x back-complement h-' + n + 'vh'}>
					<code class="badge flx back-darker pad-s w-1rem h-4rem"
						><span class="w-4rem deg-90">{'.h-' + n + 'vh'}</span></code
					>
				</div>
			</div>
		{/each}
	</div>
</section>
