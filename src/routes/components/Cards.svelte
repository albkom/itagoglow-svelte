<section id="cards" class="compensate-header txt--left">
	<h2 class="font-header highlight">Cards</h2>
	<hr />
	<div class="flx gap-m txt--left">
		<span class="txt--left">
			Cards are created using the <code>card</code> class. They provide a flexible container for various
			types of content.
		</span>
		<div class="flx row wrap gap-m">
			<div class="card">
				<h3>Basic Card</h3>
				<p>This is a simple card with basic styling.</p>
			</div>
		</div>
		<hr />

		<span class="txt--left">
			Cards can be styled with color classes for different purposes or states. Use classes like
			<code>.highlight</code>, <code>.danger</code>, or <code>.alt</code> to modify their appearance.
		</span>
		<div class="flx-x row wrap gap-m">
			<div class="card highlight w-30">
				<h3>Highlighted Card</h3>
				<p>A card with highlight styling</p>
			</div>
			<div class="card danger w-30">
				<h3>Danger Card</h3>
				<p>A card for warnings or errors</p>
			</div>
			<div class="card alt w-30">
				<h3>Alternative Card</h3>
				<p>A card with alternative styling</p>
			</div>
		</div>
		<hr />

		<span>
			Cards can be sized using width classes like <code>.w-30</code> or <code>.w-50</code>. Combine
			with padding classes for different spacing needs.
		</span>
		<div class="flx row wrap gap-m">
			<div class="card w-50 pad-l">
				<h3>Wide Card</h3>
				<p>A card that takes up more space with larger padding</p>
			</div>
			<div class="card w-20">
				<h3>Narrow Card</h3>
				<p>A more compact card</p>
			</div>
		</div>
		<hr />

		<span>
			Cards can contain various content types including text, images, and interactive elements.
		</span>
		<div class="flx-x row wrap gap-m">
			<div class="card--dark pad w-40 gap-s">
				<!-- <img src="https://via.placeholder.com/300x200" alt="Example image" /> -->
				<div class="flx-x ar-1 back-darker"></div>
				<h3>Media Card</h3>
				<p>A card containing an image and text</p>
				<button class="highlight">Action</button>
			</div>
			<div class="card--dark pad w-40">
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
