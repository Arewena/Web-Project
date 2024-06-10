<style>
	@import '../app.css';
</style>

<script>
    import { Link } from 'svelte-routing';
	let baseUrl = document.baseURI;
    let logoSrc = `${baseUrl}routes/logo.png`;
</script>


<body class="MypageBody">
	<nav class="nav">
		<img src={logoSrc} height="45px">
		<a class="nav-link" href="/mypage">MyPage</a>
		<a class="nav-link" href="/">Club List</a>
	</nav>
	<div class="Mboard">
		<div class = "Mprofile">
			profile image
		</div>
		<div class = "Minfo">
			Student info
		</div>
	</div>
	<h1>Upcoming Mettings:</h1>
	<div class="Mbox"></div>
	<h1>Your Clubs:</h1>
	<div style="overflow:scroll; height:100%">
		<table>
			<tr>
				<div class="card_list">
					<img src="https://m.media-amazon.com/images/M/MV5BNDc4OGU0MGYtODdlYy00ODZmLTgxMmMtM2QyNzM3Y2VhZjViXkEyXkFqcGdeQXVyNTMyMzg4ODA@._V1_.jpg" class="img-thumbnail" alt="...">
					<div class="card-body">
						<h5 class="card-title">Club A</h5>
						<p class="card-text">This is a awsome Club A. We have wonderful things and unique ideas.</p>
						<div class="button-group">
							<button type="button" class="btn btn-outline-primary">Go</button>
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
							<button type="button" class="btn btn-outline-primary">Go</button>
							
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
							<button type="button" class="btn btn-outline-primary">Go</button>
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
							<button type="button" class="btn btn-outline-primary">Go</button>
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
							<button type="button" class="btn btn-outline-primary">Go</button>
						</div>
					</div>
				</div>
			</tr>
		</table>	
	</div>
</body>

