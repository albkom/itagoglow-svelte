<section id="customization">
	<h3 class="flx-x left txt--left mt-3vh glow glow-action">Customization</h3>
	<div class="flx-x txt--left gap-m">
		<span
			>Easily customize your UI by overriding built-in CSS variables—make every glow your own!</span
		>
		<code class="badge fill-x back-dark pad lh-150 glow glow-action">
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
		<span>
			You can also customize the fonts used throughout the UI by overriding the <code
				class="badge back-dark pad-s">--font-header</code
			>
			and <code class="badge back-dark pad-s">--font-main</code> CSS variables. This allows you to easily
			apply your preferred typefaces for headings and body text. Simply set these variables in your CSS
			to use any web-safe or imported font family.
		</span>
		<code class="badge fill-x mt-3vh back-dark pad glow glow-highlight">
			<span class="highlight">:root &#123;</span> <br />
			&nbsp;&nbsp;&nbsp; <span class="complement">--font-header:</span> 'Audiowide', monospace;
			<br />
			&nbsp;&nbsp;&nbsp; <span class="complement">--font-main:</span> 'Cairo', monospace; <br />
			<span class="highlight">&#125;</span>
		</code>
		<span>
			You can further tailor your UI by customizing additional CSS variables for spacing, border
			radius, shadows, and more. For example, adjust <code class="badge back-dark pad-s"
				>--main-pad</code
			>
			for layout padding,
			<code class="badge back-dark pad-s">--radius</code> for rounded corners, or
			<code class="badge back-dark pad-s">--shadow</code> for glow effects. Explore the full list of
			variables in the documentation or inspect the default styles to discover all available options.
			This flexibility lets you fine-tune the look and feel of every component to perfectly match your
			brand or preferences.
		</span>
		<code class="badge fill-x mt-3vh back-dark pad glow glow-complement">
			<span class="highlight">:root &#123;</span> <br />
			&nbsp;&nbsp;&nbsp; <span class="complement">--main-pad:</span> 0 1rem;<br />
			... other spacing variables<br />
			<span class="highlight">&#125;</span>
		</code>
		<div class="card pad gap-m mt-5vh">
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
		</div>
	</div>
</section>
