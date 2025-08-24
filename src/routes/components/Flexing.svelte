<section id="layout">
	<h2 class="font-header">Flexing</h2>
	<div class="flx gap-m txt--left">
		<span>
			<code class="badge back-dark pad-s">.flx</code> gives you a vertical stack: everything lines up
			in a column, centered both ways. Effortless layouts, zero hassle!
		</span>
		<div class="flx back-complement rounded pad gap-m h-rem ar-1">
			<div class="flx back-highlight rounded pad ar-1"></div>
			<div class="flx back-highlight rounded pad ar-1"></div>
		</div>
		<span>
			This library provides a minimal set of flexbox utilities for rapid layout building. For a
			deeper dive into flexbox itself, including advanced techniques and practical examples, see the
			<a
				href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox"
				target="_blank"
				rel="noopener">MDN - Basic concepts of flexbox</a
			>.
		</span>
	</div>
	<hr class="h-5vh" />
	<div class="flx gap-m txt--left">
		<h3>Filling</h3>
		<span>
			Try the different
			<code class="badge back-dark pad-s">.flx</code> variations to instantly fill, center, or stretch
			your content. No fuss, just fast, glowing layouts.
		</span>
		<div class="flx-x">
			<div class="flx row wrap gap-m">
				<div class="card--darker pad gap-m h-20vh ar-1">
					<div class="flx-x back-complement rounded pad">
						<code class="badge back-darker pad-s">.flx-x</code>
					</div>
				</div>
				<div class="card--darker pad gap-m h-20vh ar-1">
					<div class="flx-y back-complement rounded pad">
						<code class="badge back-darker pad-s">.flx-y</code>
					</div>
				</div>
				<div class="card--darker pad gap-m h-20vh ar-1">
					<div class="flx-xy back-complement rounded pad">
						<code class="badge back-darker pad-s">.flx-xy</code>
					</div>
				</div>
			</div>
		</div>
	</div>
	<hr class="h-5vh" />
	<div class="flx gap-m txt--left">
		<h3>Arrangement</h3>
		<span>
			Want things side by side? Add
			<code class="badge back-dark pad-s">.row</code> to instantly line up your items in a row, no extra
			fuss, just clean horizontal flow!
		</span>
		<div class="flx-x gap-m">
			<div class="flx row wrap gap-m">
				<div class="card--darker pad-s gap-s">
					<code class="badge back-dark pad-s">.flx</code>
					<div class="flx back-complement rounded pad gap-m h-10rem ar-1">
						<div class="flx back-highlight rounded pad ar-1"></div>
						<div class="flx back-highlight rounded pad ar-1"></div>
					</div>
				</div>
				<div class="card--darker pad-s gap-s">
					<code class="badge back-dark pad-s">.flx.row</code>
					<div class="flx row back-complement rounded pad gap-m h-10rem ar-1">
						<div class="flx back-highlight rounded pad ar-1"></div>
						<div class="flx back-highlight rounded pad ar-1"></div>
					</div>
				</div>
			</div>
			<span>
				Use
				<code class="badge back-dark pad-s">.top</code> or
				<code class="badge back-dark pad-s">.bottom</code> to align your items to the top or bottom
				of the container, or use
				<code class="badge back-dark pad-s">.between</code> to distribute them evenly with space
				between, or
				<code class="badge back-dark pad-s">.around</code> to add equal space on both sides of each item.
			</span>
			<div class="flx row wrap gap-m">
				<div class="card--darker pad-s gap-s">
					<code class="badge back-dark pad-s">.flx.bottom</code>
					<div class="flx bottom back-complement rounded pad gap-m h-10rem ar-05">
						<div class="flx back-highlight rounded pad ar-1"></div>
						<div class="flx back-highlight rounded pad ar-1"></div>
					</div>
				</div>
				<div class="card--darker pad-s gap-s">
					<code class="badge back-dark pad-s">.flx.top</code>
					<div class="flx top back-complement rounded pad gap-m h-10rem ar-05">
						<div class="flx back-highlight rounded pad ar-1"></div>
						<div class="flx back-highlight rounded pad ar-1"></div>
					</div>
				</div>
				<div class="card--darker pad-s gap-s">
					<code class="badge back-dark pad-s">.flx.between</code>
					<div class="flx between back-complement rounded pad gap-m h-10rem ar-05">
						<div class="flx back-highlight rounded pad ar-1"></div>
						<div class="flx back-highlight rounded pad ar-1"></div>
					</div>
				</div>
				<div class="card--darker pad-s gap-s">
					<code class="badge back-dark pad-s">.flx.around</code>
					<div class="flx around back-complement rounded pad gap-m h-10rem ar-05">
						<div class="flx back-highlight rounded pad ar-1"></div>
						<div class="flx back-highlight rounded pad ar-1"></div>
					</div>
				</div>
			</div>
			<div class="flx row wrap gap-m">
				<div class="card--darker pad-s gap-s">
					<code class="badge back-dark pad-s">.flx.row.bottom</code>
					<div class="flx row bottom back-complement rounded pad gap-m h-5rem ar-2">
						<div class="flx back-highlight rounded pad ar-1"></div>
						<div class="flx back-highlight rounded pad ar-1"></div>
					</div>
				</div>
				<div class="card--darker pad-s gap-s">
					<code class="badge back-dark pad-s">.flx.row.top</code>
					<div class="flx row top back-complement rounded pad gap-m h-5rem ar-2">
						<div class="flx back-highlight rounded pad ar-1"></div>
						<div class="flx back-highlight rounded pad ar-1"></div>
					</div>
				</div>
				<div class="card--darker pad-s gap-s">
					<code class="badge back-dark pad-s">.flx.row.between</code>
					<div class="flx row between back-complement rounded pad gap-m h-5rem ar-2">
						<div class="flx back-highlight rounded pad ar-1"></div>
						<div class="flx back-highlight rounded pad ar-1"></div>
					</div>
				</div>
				<div class="card--darker pad-s gap-s">
					<code class="badge back-dark pad-s">.flx.row.around</code>
					<div class="flx row around back-complement rounded pad gap-m h-5rem ar-2">
						<div class="flx back-highlight rounded pad ar-1"></div>
						<div class="flx back-highlight rounded pad ar-1"></div>
					</div>
				</div>
			</div>
			<span>
				Add
				<code class="badge back-dark pad-s">.left</code> or
				<code class="badge back-dark pad-s">.right</code> to snap your items to the left or right edge,
				mix and match to try all the layout combos!
			</span>
			<div class="flx row wrap gap-m">
				<div class="card--darker pad-s gap-s">
					<code class="badge back-dark pad-s">.flx.bottom.left</code>
					<div class="flx bottom left back-complement rounded pad gap-m h-7rem ar-2">
						<div class="flx back-highlight rounded pad ar-1"></div>
						<div class="flx back-highlight rounded pad ar-1"></div>
					</div>
				</div>
				<div class="card--darker pad-s gap-s">
					<code class="badge back-dark pad-s">.flx.top.right</code>
					<div class="flx top right back-complement rounded pad gap-m h-7rem ar-2">
						<div class="flx back-highlight rounded pad ar-1"></div>
						<div class="flx back-highlight rounded pad ar-1"></div>
					</div>
				</div>
				<div class="card--darker pad-s gap-s">
					<code class="badge back-dark pad-s">.flx.row.top.left</code>
					<div class="flx row top left back-complement rounded pad gap-m h-7rem ar-2">
						<div class="flx back-highlight rounded pad ar-1"></div>
						<div class="flx back-highlight rounded pad ar-1"></div>
					</div>
				</div>
				<div class="card--darker pad-s gap-s">
					<code class="badge back-dark pad-s">.flx.row.bottom.right</code>
					<div class="flx row bottom right back-complement rounded pad gap-m h-7rem ar-2">
						<div class="flx back-highlight rounded pad ar-1"></div>
						<div class="flx back-highlight rounded pad ar-1"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- <hr class="h-5vh" />
          <div class="flx">
            <h3>Article Layout:</h3>
            <article class="card pad-m">
              <header>
                <h2>Article Title</h2>
                <div class="badge">Badge</div>
              </header>
              <section>
                <p>
                  This is the main content of the article. It demonstrates the
                  article layout with header and footer.
                </p>
              </section>
              <footer>
                <span class="indicator">Status: Active</span>
                <a href="#">Read More</a>
              </footer>
            </article>
          </div> -->
</section>
