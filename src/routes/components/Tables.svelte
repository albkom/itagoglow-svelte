<section id="tables" class="compensate-header txt--left">
	<h2 class="font-header highlight">Tables</h2>
	<hr />
	<div class="flx gap-m txt--left">
		<span class="txt--left">
			Basic tables use the <code>table</code> class for styling. They automatically include proper spacing
			and borders.
		</span>
		<div class="table-container">
			<table>
				<thead>
					<tr>
						<th>Header 1</th>
						<th>Header 2</th>
						<th>Header 3</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Data 1</td>
						<td>Data 2</td>
						<td>Data 3</td>
					</tr>
					<tr>
						<td>Data 4</td>
						<td>Data 5</td>
						<td>Data 6</td>
					</tr>
				</tbody>
			</table>
		</div>
		<hr />

		<span>
			Tables can be styled with color classes for different purposes. Use <code>.highlight</code>,
			<code>.danger</code>, or <code>.alt</code> on rows or cells.
		</span>
		<div class="table-container">
			<table>
				<thead>
					<tr class="highlight">
						<th>Status</th>
						<th>Value</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Normal</td>
						<td>100</td>
						<td><button class="txt--s">Edit</button></td>
					</tr>
					<tr class="danger">
						<td>Error</td>
						<td>-50</td>
						<td><button class="txt--s danger">Fix</button></td>
					</tr>
					<tr class="alt">
						<td>Pending</td>
						<td>75</td>
						<td><button class="txt--s alt">Review</button></td>
					</tr>
				</tbody>
			</table>
		</div>
		<hr />

		<span>
			For responsive tables, wrap them in a <code>table-container</code> class. This enables horizontal
			scrolling on small screens.
		</span>
		<div class="table-container">
			<table>
				<thead>
					<tr>
						<th>Column 1</th>
						<th>Column 2</th>
						<th>Column 3</th>
						<th>Column 4</th>
						<th>Column 5</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Data</td>
						<td>Longer data here</td>
						<td>More content</td>
						<td>Even more</td>
						<td>Final column</td>
					</tr>
					<tr>
						<td>Data</td>
						<td>Longer data here</td>
						<td>More content</td>
						<td>Even more</td>
						<td>Final column</td>
					</tr>
				</tbody>
			</table>
		</div>
		<hr />

		<span>
			Tables can include interactive elements and different text alignments using <code>txt--left</code>,
			<code>txt--center</code>, or <code>txt--right</code>.
		</span>
		<div class="table-container">
			<table>
				<thead>
					<tr>
						<th class="txt--left">Item</th>
						<th class="txt--center">Quantity</th>
						<th class="txt--right">Price</th>
						<th class="txt--center">Actions</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td class="txt--left">Product A</td>
						<td class="txt--center">2</td>
						<td class="txt--right">$25.00</td>
						<td class="txt--center">
							<div class="flx-x center gap-s">
								<button class="txt--s">Edit</button>
								<button class="txt--s danger">Delete</button>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</section>
