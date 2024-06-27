<script>
	import { Link } from "svelte-routing";
	import Navbar from "../Navbar.svelte";
	let baseUrl = document.baseURI;

	function openModal(text) {
		document.getElementById("modal-body").innerHTML = text;
	}
</script>

<div class="home-body">
	<header class="p-3" style="height: 100px;">
		<div style="height: auto;">
			<ul
				class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-start mb-md-0"
				style="align-items: center"
			>
				<li>
					<img
						src={"images/logo.png"}
						alt="logo"
						style="height: 50px;"
					/>
				</li>
				<li>
					<a
						href="/"
						class="nav-link px-2 text-black"
						style="font-weight: bold;">Home</a
					>
				</li>
				<li>
					<a href="/mypage" class="nav-link px-2 text-secondary"
						>MyPage</a
					>
				</li>
			</ul>
		</div>
	</header>
	<div class="home_image">
		<div class="home_inner">
			<div class="home_title">Club Management Website</div>
			<div class="home_description">
				A website that people can use to communicate and make a club for
				school.
			</div>
			<div
				class="home_button"
				onclick="document.getElementById('home_detail').scrollIntoView();"
			>
				Get Started
			</div>
		</div>
	</div>

	<div style="padding: 50px;" id="home_detail">
		<h1 class="middle">Clubs</h1>

		<div class="row row-cols-1 row-cols-md-3 g-4 float">
			<div class="col">
				<div class="card home-card">
					<div class="card-body">
						<h5 class="card-title">Club A</h5>
						<div class="card-inner-body">
							<p class="card-text">
								This is a longer card with supporting text below as
								a natural lead-in to additional content. This
								content is a little bit longer.
							</p>
							<div class="button-container">
								<button
									type="button"
									class="btn btn-primary width">Apply</button
								>
								<button 
									type="button"
									class="btn btn-secondary width" 
									data-bs-toggle="modal" 
									data-bs-target="#staticBackdrop"
									on:click={() => {openModal("Card 1")}}
								>
									Details
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col">
				<div class="card home-card">
					<div class="card-body">
						<h5 class="card-title">Club B</h5>
						<div class="card-inner-body">
							<p class="card-text">
								This is a longer card with supporting text below as
								a natural lead-in to additional content. This
								content is a little bit longer.
							</p>
							<div class="button-container">
								<button
									type="button"
									class="btn btn-primary width">Apply</button
								>
								<button 
									type="button"
									class="btn btn-secondary width" 
									data-bs-toggle="modal" 
									data-bs-target="#staticBackdrop"
									on:click={() => {openModal("Card 2")}}
								>
									Details
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col">
				<div class="card home-card">
					<div class="card-body">
						<h5 class="card-title">Club C</h5>
						<div class="card-inner-body">
							<p class="card-text">
								This is a longer card with supporting text below as
								a natural lead-in to additional content.
							</p>
							<div class="button-container">
								<button
									type="button"
									class="btn btn-primary width">Apply</button
								>
								<button 
									type="button"
									class="btn btn-secondary width" 
									data-bs-toggle="modal" 
									data-bs-target="#staticBackdrop"
									on:click={() => {openModal("Card 3")}}
								>
									Details
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col">
				<div class="card home-card">
					<div class="card-body">
						<h5 class="card-title">Club D</h5>
						<div class="card-inner-body">
							<p class="card-text">
								This is a longer card with supporting text below as
								a natural lead-in to additional content. This
								content is a little bit longer.
							</p>
							<div class="button-container">
								<button
									type="button"
									class="btn btn-primary width">Apply</button
								>
								<button 
									type="button"
									class="btn btn-secondary width" 
									data-bs-toggle="modal" 
									data-bs-target="#staticBackdrop"
									on:click={() => {openModal("Card 4")}}
								>
									Details
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
	<div class="modal-dialog">
	  <div class="modal-content">
		<div class="modal-header">
		  <h5 class="modal-title" id="staticBackdropLabel">Details</h5>
		  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
		</div>
		<div class="modal-body" id="modal-body">
		  ...
		</div>
		<div class="modal-footer">
		  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
		  <button type="button" class="btn btn-primary">Apply</button>
		</div>
	  </div>
	</div>
  </div>

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
