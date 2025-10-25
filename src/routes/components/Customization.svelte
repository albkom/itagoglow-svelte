<section id="customization" class="mt-10vh">
	<h3 class="flx-x left txt--left mt-3vh glow glow-action">Customization</h3>
	<div class="flx-x left txt--left gap-m">
		<span
			>Easily customize your UI by overriding built-in CSS variables—make every glow your own!</span
		>
		<span>
			Start by creating a custom CSS file where you can override the default variables provided by
			itagoglow.
		</span>
		<code class="badge fill-x back-dark pad lh-150 glow glow-action">
			import 'itagoglow/itagoglow.min.css'; <br />
			import './customize.css'; // Always after the main itagoglow CSS
		</code>
		<code class="snippet badge fill-x back-dark pad lh-150 glow glow-action">
			<span class="highlight">:root &#123;</span> <br />
			&nbsp;&nbsp;&nbsp; <span class="complement">--dominant:</span> #022c10; <br />
			&nbsp;&nbsp;&nbsp; <span class="complement">--complement:</span> #066d29; <br />
			&nbsp;&nbsp;&nbsp; <span class="complement">--action:</span> #483d8b; <br />
			&nbsp;&nbsp;&nbsp; <span class="complement">--highlight:</span> #0bda51; <br />
			&nbsp;&nbsp;&nbsp; <span class="complement">--text:</span> #c7c4d9; <br />
			&nbsp;&nbsp;&nbsp; <span class="complement">--danger:</span> #f25822; <br />
			&nbsp;&nbsp;&nbsp; <span class="complement">--alt:</span> #f4c430; <br />
			<span class="highlight">&#125;</span>
		</code>
		<span class="mt-1vh"> You can also customize the fonts used throughout the UI. </span>
		<code class="snippet badge fill-x back-dark pad glow glow-action">
			<span class="highlight">:root &#123;</span> <br />
			&nbsp;&nbsp;&nbsp; <span class="complement">--font-header:</span> 'Audiowide', monospace;
			<br />
			&nbsp;&nbsp;&nbsp; <span class="complement">--font-main:</span> 'Cairo', monospace; <br />
			<span class="highlight">&#125;</span>
		</code>
		<span class="mt-1vh">
			You can further tailor your UI by customizing additional CSS variables for spacing, border
			radius, shadows, and more. Explore the full list of variables in the <a href="/flexing">documentation</a>.
		</span>
		<!-- <code class="badge fill-x back-dark pad glow glow-complement">
			<span class="highlight">:root &#123;</span> <br />
			&nbsp;&nbsp;&nbsp; <span class="complement">--main-pad:</span> 0 1rem;<br />
			... other spacing variables<br />
			<span class="highlight">&#125;</span>
		</code> -->
		<!-- <div class="card pad gap-m mt-5vh">
			<h3 class="font-main txt--center">Javascript theme selector (TODO)</h3>
			<span>
				For a more dynamic approach, you can use JavaScript to switch themes by updating CSS
				variables directly on the <code class="badge back-dark pad-s">:root</code> element.
			</span>
			<code class="badge fill-x back-dark pad lh-150">
				// JavaScript example<br />
				const themes = &#123;<br />
				&nbsp;&nbsp;&nbsp; dark: &#123;<br />
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; '--dominant': '#
			</code>
		</div> -->
	</div>
</section>
