<script>
	import { Link } from "svelte-routing";
	import Navbar from "../Navbar.svelte";
    import { signOut } from "firebase/auth";
	import { auth } from "../firebase/firebase";
    import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
    import { onMount } from 'svelte';

	function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
    }

	let email = getCookie('email')
	let name = getCookie('name')
	onMount(() => {
		onAuthStateChanged(auth, (user) => {
		if (user) {
			// User is signed in, see docs for a list of available properties
			// https://firebase.google.com/docs/reference/js/auth.user
			const uid = user.uid;
			// ...
		} else {
			// User is signed out
			// ...
			window.location.href='http://localhost:8080/signin'
		}
		});
	})
	let baseUrl = document.baseURI;
	let logoSrc = `${baseUrl}routes/logo.png`;
</script>

<div class="MypageBody">
	<header class="p-3" style="height: 100px;">
		<div style="height: auto; display: flex; align-items: center">
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
			<div
				class="px-2 text-secondary"
				style="cursor:pointer"
				on:click={() => {logout()}}
			>
				Sign Out
			</div>
		</div>
	</header>
	<div class="profile_name">
		Hello <span style="font-weight: bold;">{name}</span>
	</div>
	<div class="container-fluid">
		<div class="row">
			<div class="col-sm">
				<div class="profile_background">
					<div class="profile_sub_title">Student Info</div>
					<div class="profile_sub_body">
						<div class="profile_sub_inner">
							<span style="font-weight: bold;">Email:</span> {email}
						</div>
						<div class="profile_sub_inner">
							<span style="font-weight: bold;">Name:</span> {name}
						</div>
					</div>
				</div>
			</div>
			<div class="col-sm">
				<div class="profile_background">
					<div class="profile_sub_title">Upcoming Meetings</div>
					<div class="profile_meeting_inner">
						<div style="font-size: 17px; font-weight: bold;">Club Meeting 1</div>
						<div style="font-size: 14px; color: gray;">2024/06/24 15:00 ~ 15:30</div>
						<div style="margin-top: 5px; font-size: 14px;"><span style="font-weight: bold;">Location:</span> School Building</div>
					</div>
					<div class="profile_meeting_inner">
						<div style="font-size: 17px; font-weight: bold;">Club Meeting 1</div>
						<div style="font-size: 14px; color: gray;">2024/06/24 15:00 ~ 15:30</div>
						<div style="margin-top: 5px; font-size: 14px;"><span style="font-weight: bold;">Location:</span> School Building</div>
					</div>
					<div class="profile_meeting_inner">
						<div style="font-size: 17px; font-weight: bold;">Club Meeting 1</div>
						<div style="font-size: 14px; color: gray;">2024/06/24 15:00 ~ 15:30</div>
						<div style="margin-top: 5px; font-size: 14px;"><span style="font-weight: bold;">Location:</span> School Building</div>
					</div>
				</div>
			</div>
			<div class="col-sm">
				<div class="profile_background">
					<div class="profile_sub_title">My Clubs</div>

					<div class="col">
						<div class="card mypage-card">
							<div class="card-body">
								<h5 class="card-title">Club A</h5>
								<div class="mypage-inner-body">
									<p class="card-text">
										This is a longer card with supporting text below as
										a natural lead-in to additional content.
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
										This is a longer card with supporting text below as
										a natural lead-in to additional content.
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
