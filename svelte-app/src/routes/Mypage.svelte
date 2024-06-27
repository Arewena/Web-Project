<script>
	import { Link } from "svelte-routing";
	import Navbar from "../Navbar.svelte";
	let baseUrl = document.baseURI;
	let logoSrc = `${baseUrl}routes/logo.png`;
</script>

<div class="MypageBody">
	<header class="p-3" style="height: 100px;">
		<div style="height: auto;">
			<ul
				class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-start mb-md-0"
				style="align-items: center;"
			>
				<li>
					<img
						src={"images/logo.png"}
						alt="logo"
						style="height: 50px;"
					/>
				</li>
				<li>
					<a href="/" class="nav-link px-2 text-secondary">Home</a>
				</li>
				<li>
					<a
						href="/mypage"
						class="nav-link px-2 text-black"
						style="font-weight: bold;">MyPage</a
					>
				</li>
			</ul>
		</div>
	</header>
	<div class="profile_name">
		Hello <span style="font-weight: bold;">Daniel</span>
	</div>
	<div class="container-fluid">
		<div class="row">
			<div class="col-sm">
				<div class="profile_background">
					<div class="profile_sub_title">Student Info</div>
					<div class="profile_sub_body">
						<div class="profile_sub_inner">
							<span style="font-weight: bold;">Email:</span> jingee@logncoding.com
						</div>
						<div class="profile_sub_inner">
							<span style="font-weight: bold;">Name:</span> Daniel Kim
						</div>
					</div>
				</div>
			</div>
			<div class="col-sm">
				<div class="profile_background">
					<div class="profile_sub_title">Upcoming Meetings</div>
					<div class="profile_meeting_inner">

					</div>
				</div>
			</div>
			<div class="col-sm">
				<div class="profile_background">
					<div class="profile_sub_title">My Clubs</div>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- <div class="Mboard">
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
	</div> -->

<style>
	@import "../app.css";
</style>
