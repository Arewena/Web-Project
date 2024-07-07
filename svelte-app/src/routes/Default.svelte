<script>
	import { Link } from "svelte-routing";
    import { signOut } from "firebase/auth";
	import { auth, db } from "../firebase/firebase";
	import { collection, getDocs, addDoc } from "firebase/firestore";
	import Navbar from "../Navbar.svelte";
    import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
    import { onMount } from 'svelte';

	let baseUrl = document.baseURI;
	var clubs = []
	var loading = false

	function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(";");
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == " ") {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

	const apply = async (club_id) => {
		var shouldApply = confirm("Are you sure you would like to apply to this club?")
		if(shouldApply)
		{
			var cookieEmail = getCookie('email')
			const docRef = await addDoc(collection(db, "applications"), {
				club_id: club_id,
				email: cookieEmail,
				status: "pending"
			});
			alert("Applied to club.")
		}
	}

	const getClubs = async() => {
		loading = true
		const querySnapshot = await getDocs(collection(db, "clubs"));
		querySnapshot.forEach((doc) => {
		// doc.data() is never undefined for query doc snapshots
			var data = doc.data();
			data['club_id'] = doc.id;
			clubs.push(data)
			clubs = clubs;
		})
		loading = false
	}

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
		getClubs();
	})

	function openModal(text) {
		document.getElementById("modal-body").innerHTML = text;
	}

	const logout = () => {
		signOut(auth).then(() => {
			window.location.href='http://localhost:8080/signin'
		}).catch((error) => {
		// An error happened.
		});
	}

</script>

<div class="home-body">
	<header class="p-3" style="height: 100px;">
		<div style="height: auto; display: flex; align-items: center">
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
			<div
				class="px-2 text-secondary"
				style="cursor:pointer"
				on:click={() => {logout()}}
			>
				Sign Out
			</div>
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
		{#if loading == true}
			<div class="spinner-border" role="status" style="margin-left: auto; margin-right: auto; display: block; margin-top: 50px;">
				<span class="visually-hidden">Loading...</span>
			</div>
		{/if}
		<div class="row row-cols-1 row-cols-md-3 g-4 float">
			
			{#each clubs as club}
				<div class="col">
					<div class="card home-card">
						<div class="card-body">
							<h5 class="card-title">{club.name}</h5>
							<div class="card-inner-body">
								<p class="card-text">
									{club.short_description}
								</p>
								<div class="button-container">
									<button
										type="button"
										class="btn btn-primary width"
										on:click={() => {apply(club.club_id)}}
									>
										Apply
									</button>
									<button 
										type="button"
										class="btn btn-secondary width" 
										data-bs-toggle="modal" 
										data-bs-target="#staticBackdrop"
										on:click={() => {openModal(club.long_description)}}
									>
										Details
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			{/each}
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
