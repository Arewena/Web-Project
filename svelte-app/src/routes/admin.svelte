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
	<div class="container-fluid">
		<div class="row">
			<div class="col-sm">
				<div class="profile_background">
					<div class="profile_sub_title">User Management</div>
					<div class="profile_meeting_inner">
						<div style="font-size: 17px; font-weight: bold;">User A</div>
						<div>Manage button</div>
					</div>
					<div class="profile_meeting_inner">
						<div style="font-size: 17px; font-weight: bold;">User B</div>
						<div>Manage button</div>
					</div>
					<div class="profile_meeting_inner">
						<div style="font-size: 17px; font-weight: bold;">User C</div>
						<div>Manage button</div>
					</div>
				</div>
			</div>
			<div class="col-sm">
				<div class="profile_background">
					<div class="profile_sub_title">Club Management</div>
                    <div>Make a New Club</div>
					<div class="col">
						<div class="card mypage-card">
							<div class="card-body">
								<h5 class="card-title">Club A</h5>
								<div class="mypage-inner-body">
									<p class="card-text">
										Manage Button
									</p>
								</div>
							</div>
						</div>
					</div>
					<div class="col">
						<div class="card mypage-card">
							<div class="card-body">
								<h5 class="card-title">Club B</h5>
								<div class="mypage-inner-body">
									<p class="card-text">
										Manage Button
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>


<style>
	@import "../app.css";
</style>
