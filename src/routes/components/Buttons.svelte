<section id="buttons">
	<h2 class="font-header">Buttons</h2>
	<hr />
	<div class="flx gap-m txt--left">
		<span class="txt--left"
			>For most of the buttons in the page you can use the standard <code>button</code> element.</span
		>
		<div class="flx row wrap gap-m">
			<button>Standard</button>
			<button disabled>Disabled</button>
		</div>
		<hr />

		<span class="txt--left">
			You can use <a href="#colors">color classes</a> to apply background, text, and border colors
			to buttons, not just text color.
			<br />
			This allows you to easily customize the appearance of your buttons for different states, such as
			<code>.danger</code>
			for warnings or <code>.highlight</code> for emphasis.
		</span>
		<div class="flx-x row wrap gap-m">
			<div class="flx w-20 pad gap-m">
				<code class="badge back-darker pad-s">.danger</code>
				<button class="danger">Danger</button>
			</div>
			<div class="flx w-20 pad gap-m">
				<code class="badge back-darker pad-s">.highlight</code>
				<button class="highlight">Highlight</button>
			</div>
			<div class="flx w-20 pad gap-m">
				<code class="badge back-darker pad-s">.alt</code>
				<button class="alt">Alternative</button>
			</div>
		</div>
		<hr />
		<span>
			You can adjust the size of buttons by applying text size classes such as <code>.txt--s</code>
			for small buttons or <code>.txt--l</code> for larger buttons. This makes it easy to create buttons
			that fit different contexts, like compact toolbars or prominent call-to-action areas.
		</span>
		<div class="flx row wrap gap-m">
			<div class="flx pad gap-m">
				<code class="badge back-darker pad-s">.txt--s</code>
				<button class="txt--s">Small</button>
			</div>
			<div class="flx pad gap-m">
				<code class="badge back-darker pad-s hidden">a</code>
				<button>Default</button>
			</div>
			<div class="flx pad gap-m">
				<code class="badge back-darker pad-s">.txt--l</code>
				<button class="txt--l">Medium</button>
			</div>
		</div>
		<hr />
		<span>
			Links can also be styled to look like buttons by applying button classes to <code
				>&lt;a&gt;</code
			> elements. This is useful for navigation or actions that should visually match other buttons but
			use anchor tags for routing or external links.
		</span>
		<div class="flx-x gap-s">
			<a href="https://www.npmjs.com/package/itagoglow">This is a link to the npm package</a>
			<a href="https://www.npmjs.com/package/itagoglow" class="button highlight"
				>This is a button highlighted link to the npm package</a
			>
		</div>
		<hr />
		<span>
			Use the <code>circle</code> class for round icon buttons. Combine with color classes like
			<code>.danger</code>
			or <code>.highlight</code> to show purpose or state.
		</span>
		<div class="flx row wrap gap-m">
			<button class="circle" aria-label="Star">
				<svg width="24" height="24" viewBox="0 0 24 24">
					<path
						d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
					/>
				</svg>
			</button>
			<button class="circle danger" aria-label="Delete">
				<svg width="24" height="24" viewBox="0 0 24 24">
					<path
						d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
					/>
				</svg>
			</button>
		</div>
	</div>
</section>
