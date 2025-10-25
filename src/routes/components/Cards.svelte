<section id="cards" class="compensate-header txt--left">
	<h2 class="font-header highlight">Cards</h2>
	<hr />
	<div class="flx gap-m left txt--left">
		<span class="txt--left">
			Use the <code class="badge back-darker pad-s">.card</code> class to create containers for any type
			of content, including text, images, and actions.
		</span>
		<span> Cards have no padding by default. Add padding using specific classes. </span>
		<div class="flx row wrap gap-m">
			<div class="flx-x gap-s">
				<code class="badge back-darker pad-s">.card</code>
				<div class="card">
					<h3>Basic Card</h3>
					<p>This is a simple card with basic styling.</p>
				</div>
			</div>
			<div class="flx-x row gap-m">
				<div class="flx gap-s">
					<code class="badge back-darker pad-s">.card.pad-s</code>
					<div class="card pad-s">
						<h3>Basic Card</h3>
						<p>This is a simple card with basic styling.</p>
					</div>
				</div>
				<div class="flx gap-s">
					<code class="badge back-darker pad-s">.card.pad</code>
					<div class="card pad">
						<h3>Basic Card</h3>
						<p>This is a simple card with basic styling.</p>
					</div>
				</div>
			</div>
		</div>
		<span class="txt--left mt-1vh">
			Cards can be styled with color classes for different purposes or states.
		</span>
		<div class="flx-x row wrap gap-m">
			<div class="card--highlight pad w-30">
				<h3>Highlighted Card</h3>
				<p>A card with highlight styling</p>
			</div>
			<div class="card--dark pad w-30">
				<h3>Dark Card</h3>
				<p>A card for dark</p>
			</div>
			<div class="card--darker pad w-30">
				<h3>Darker Card</h3>
				<p>A card with darker styling</p>
			</div>
		</div>
		<hr />
		<span>
			Cards can contain various content types including text, images, and interactive elements.
		</span>
		<div class="flx-x row wrap gap-m">
			<div class="card pad w-40 gap-s">
				<!-- <img src="https://via.placeholder.com/300x200" alt="Example image" /> -->
				<div class="flx-x ar-1 back-darker"></div>
				<h3>Media Card</h3>
				<p>A card containing an image and text</p>
				<button class="highlight">Action</button>
			</div>
			<div class="card--dark pad w-40 glow--l glow-action">
				<h3>Interactive Card</h3>
				<p>A card with interactive elements</p>
				<div class="flx-x gap-s">
					<button>Cancel</button>
					<button class="highlight">Confirm</button>
				</div>
			</div>
		</div>
	</div>
</section>
