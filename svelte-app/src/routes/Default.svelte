<!-- src/App.svelte -->
<style>
	@import '../app.css';
	main {
        text-align: center;
        padding: 1em;
        max-width: 800px;
        margin: 0 auto;
    }
</style>

<script>
    import { Link } from 'svelte-routing';
	import Navbar from '../Navbar.svelte';
	let baseUrl = document.baseURI;
    let logoSrc = `${baseUrl}routes/logo.png`;
</script>

<ul class="nav nav-tabs">
	<!-- svelte-ignore a11y-missing-attribute -->
	<img src={logoSrc} height="45px">
	<li class="nav-item ms-auto">
		<Link class="nav-link" to="/signin">Sign in</Link>
	</li> 	
	

</ul>

<Navbar />


<div class="details">
	<h1>details</h1>
</div>

<div style="overflow:scroll; height:100%">
	<table>
		<tr>
			<div class="card_list">
				<img src="https://m.media-amazon.com/images/M/MV5BNDc4OGU0MGYtODdlYy00ODZmLTgxMmMtM2QyNzM3Y2VhZjViXkEyXkFqcGdeQXVyNTMyMzg4ODA@._V1_.jpg" class="img-thumbnail" alt="...">
				<div class="card-body">
					<h5 class="card-title">Club A</h5>
					<p class="card-text">This is a awsome Club A. We have wonderful things and unique ideas.</p>
					<div class="button-group">
						<button type="button" class="btn btn-outline-primary">Apply</button>
						<button type="button" class="btn btn-outline-primary">Detail</button>
					</div>
				</div>
			</div>
		</tr>
		<tr>
			<div class="card_list">
				<img src="https://m.media-amazon.com/images/M/MV5BNDc4OGU0MGYtODdlYy00ODZmLTgxMmMtM2QyNzM3Y2VhZjViXkEyXkFqcGdeQXVyNTMyMzg4ODA@._V1_.jpg" class="img-thumbnail" alt="...">
				<div class="card-body">
					<h5 class="card-title">Club B</h5>
					<p class="card-text">This is a awsome Club B. We have wonderful things and unique ideas.</p>
					<div class="button-group">
						<button type="button" class="btn btn-outline-primary">Apply</button>
						<button type="button" class="btn btn-outline-primary">Detail</button>
					</div>
				</div>
			</div>
		</tr>
		<tr>
			<div class="card_list">
				<img src="https://m.media-amazon.com/images/M/MV5BNDc4OGU0MGYtODdlYy00ODZmLTgxMmMtM2QyNzM3Y2VhZjViXkEyXkFqcGdeQXVyNTMyMzg4ODA@._V1_.jpg" class="img-thumbnail" alt="...">
				<div class="card-body">
					<h5 class="card-title">Club C</h5>
					<p class="card-text">This is a awsome Club C. We have wonderful things and unique ideas.</p>
					<div class="button-group">
						<button type="button" class="btn btn-outline-primary">Apply</button>
						<button type="button" class="btn btn-outline-primary">Detail</button>
					</div>
				</div>
			</div>
		</tr>
		<tr>
			<div class="card_list">
				<img src="https://m.media-amazon.com/images/M/MV5BNDc4OGU0MGYtODdlYy00ODZmLTgxMmMtM2QyNzM3Y2VhZjViXkEyXkFqcGdeQXVyNTMyMzg4ODA@._V1_.jpg" class="img-thumbnail" alt="...">
				<div class="card-body">
					<h5 class="card-title">Club D</h5>
					<p class="card-text">This is a awsome Club D. We have wonderful things and unique ideas.</p>
					<div class="button-group">
						<button type="button" class="btn btn-outline-primary">Apply</button>
						<button type="button" class="btn btn-outline-primary">Detail</button>
					</div>
				</div>
			</div>
		</tr>
		<tr>
			<div class="card_list">
				<img src="https://m.media-amazon.com/images/M/MV5BNDc4OGU0MGYtODdlYy00ODZmLTgxMmMtM2QyNzM3Y2VhZjViXkEyXkFqcGdeQXVyNTMyMzg4ODA@._V1_.jpg" class="img-thumbnail" alt="...">
				<div class="card-body">
					<h5 class="card-title">Club E</h5>
					<p class="card-text">This is a awsome Club E. We have wonderful things and unique ideas.</p>
					<div class="button-group">
						<button type="button" class="btn btn-outline-primary">Apply</button>
						<button type="button" class="btn btn-outline-primary">Detail</button>
					</div>
				</div>
			</div>
		</tr>
	</table>	
</div>


