<script>
	import { Link } from "svelte-routing";
	import Navbar from "../Navbar.svelte";
	let baseUrl = document.baseURI;
</script>
<body>
<header class="p-3" style="height: 100px;">
	<div style="height: auto;">
	  <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-start mb-md-0">
		<li><img src={'images/logo.png'} alt="logo" style="height: 50px;" /></li>
		<li><a href="/" class="nav-link px-2 text-black" style="font-weight: bold;">Home</a></li>
		<li><a href="/mypage" class="nav-link px-2 text-secondary">MyPage</a></li>
	  </ul>
	</div>
</header>
<div class="home_image">
	<div class="home_inner">
		<div class="home_title">
			Club Management Website
		</div>
		<div class="home_description">
			A website that people can use to communicate and make a club for school.
		</div>
		<div class="home_button" onclick="document.getElementById('home_detail').scrollIntoView();">
			Get Started
		</div>
	</div>
</div>
<div id="home_detail">
	<div class="details">
		<h1>details</h1>
	</div>

	<div style="overflow:scroll; height:100%">
		<table>
			<tr>
				<div class="card_list">
					<img
						src="https://m.media-amazon.com/images/M/MV5BNDc4OGU0MGYtODdlYy00ODZmLTgxMmMtM2QyNzM3Y2VhZjViXkEyXkFqcGdeQXVyNTMyMzg4ODA@._V1_.jpg"
						class="img-thumbnail"
						alt="..."
					/>
					<div class="card-body">
						<h5 class="card-title">Club A</h5>
						<p class="card-text">
							This is a awsome Club A. We have wonderful things
							and unique ideas.
						</p>
						<div class="button-group">
							<button
								type="button"
								class="btn btn-outline-primary">Apply</button
							>
							<button
								type="button"
								class="btn btn-outline-primary">Detail</button
							>
						</div>
					</div>
				</div>
			</tr>
			<tr>
				<div class="card_list">
					<img
						src="https://m.media-amazon.com/images/M/MV5BNDc4OGU0MGYtODdlYy00ODZmLTgxMmMtM2QyNzM3Y2VhZjViXkEyXkFqcGdeQXVyNTMyMzg4ODA@._V1_.jpg"
						class="img-thumbnail"
						alt="..."
					/>
					<div class="card-body">
						<h5 class="card-title">Club B</h5>
						<p class="card-text">
							This is a awsome Club B. We have wonderful things
							and unique ideas.
						</p>
						<div class="button-group">
							<button
								type="button"
								class="btn btn-outline-primary">Apply</button
							>
							<button
								type="button"
								class="btn btn-outline-primary">Detail</button
							>
						</div>
					</div>
				</div>
			</tr>
			<tr>
				<div class="card_list">
					<img
						src="https://m.media-amazon.com/images/M/MV5BNDc4OGU0MGYtODdlYy00ODZmLTgxMmMtM2QyNzM3Y2VhZjViXkEyXkFqcGdeQXVyNTMyMzg4ODA@._V1_.jpg"
						class="img-thumbnail"
						alt="..."
					/>
					<div class="card-body">
						<h5 class="card-title">Club C</h5>
						<p class="card-text">
							This is a awsome Club C. We have wonderful things
							and unique ideas.
						</p>
						<div class="button-group">
							<button
								type="button"
								class="btn btn-outline-primary">Apply</button
							>
							<button
								type="button"
								class="btn btn-outline-primary">Detail</button
							>
						</div>
					</div>
				</div>
			</tr>
			<tr>
				<div class="card_list">
					<img
						src="https://m.media-amazon.com/images/M/MV5BNDc4OGU0MGYtODdlYy00ODZmLTgxMmMtM2QyNzM3Y2VhZjViXkEyXkFqcGdeQXVyNTMyMzg4ODA@._V1_.jpg"
						class="img-thumbnail"
						alt="..."
					/>
					<div class="card-body">
						<h5 class="card-title">Club D</h5>
						<p class="card-text">
							This is a awsome Club D. We have wonderful things
							and unique ideas.
						</p>
						<div class="button-group">
							<button
								type="button"
								class="btn btn-outline-primary">Apply</button
							>
							<button
								type="button"
								class="btn btn-outline-primary">Detail</button
							>
						</div>
					</div>
				</div>
			</tr>
			<tr>
				<div class="card_list">
					<img
						src="https://m.media-amazon.com/images/M/MV5BNDc4OGU0MGYtODdlYy00ODZmLTgxMmMtM2QyNzM3Y2VhZjViXkEyXkFqcGdeQXVyNTMyMzg4ODA@._V1_.jpg"
						class="img-thumbnail"
						alt="..."
					/>
					<div class="card-body">
						<h5 class="card-title">Club E</h5>
						<p class="card-text">
							This is a awsome Club E. We have wonderful things
							and unique ideas.
						</p>
						<div class="button-group">
							<button
								type="button"
								class="btn btn-outline-primary">Apply</button
							>
							<button
								type="button"
								class="btn btn-outline-primary">Detail</button
							>
						</div>
					</div>
				</div>
			</tr>
		</table>
	</div>
</div>
</body>

<!-- src/App.svelte -->
<style>
	@import "../app.css";
	main {
		text-align: center;
		padding: 1em;
		max-width: 800px;
		margin: 0 auto;
	}
</style>
