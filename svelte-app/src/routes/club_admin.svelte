<script>
	import { Link } from "svelte-routing";
	import Navbar from "../Navbar.svelte";
    import { signOut } from "firebase/auth";
	import { auth, db } from "../firebase/firebase";
	import { collection, getDocs } from "firebase/firestore";
    import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
	import { onMount } from 'svelte';
	let baseUrl = document.baseURI;
	let logoSrc = `${baseUrl}routes/logo.png`;
	var users = []
	var userLoading = false
	var clubs = []
	var clubLoading = false

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

	const getClubs = async() => {
		clubLoading = true
		const querySnapshot = await getDocs(collection(db, "clubs"));
		querySnapshot.forEach((doc) => {
		// doc.data() is never undefined for query doc snapshots
			clubs.push(doc.data())
			clubs = clubs;
		})
		clubLoading = false
	}

	const getUsers = async() => {
		userLoading = true
		const querySnapshot = await getDocs(collection(db, "users"));
		querySnapshot.forEach((doc) => {
		// doc.data() is never undefined for query doc snapshots
			users.push(doc.data())
			users = users;
		})
		userLoading = false
	}

	onMount(() => {
		onAuthStateChanged(auth, (user) => {
		if (user) {
			// User is signed in, see docs for a list of available properties
			// https://firebase.google.com/docs/reference/js/auth.user
			const uid = user.uid;
			if(user.email != "admin@admin.com")
			{
				window.location.href='http://localhost:8080/'
			}
			else
			{
				getUsers();
				getClubs();
			}
			// ...
		} else {
			// User is signed out
			// ...
			window.location.href='http://localhost:8080/signin'
		}
		});
	})

	
	const logout = () => {
		signOut(auth).then(() => {
			window.location.href='http://localhost:8080/signin'
		}).catch((error) => {
		// An error happened.
		});
	}
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
					<a href="/admin" class="nav-link px-2 text-secondary text-black" style="font-weight: bold;">Admin</a>
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
					<div class="profile_sub_title">User Management</div>
					{#if userLoading == true}
						<div class="spinner-border" role="status" style="margin-left: auto; margin-right: auto; display: block; margin-top: 50px;">
							<span class="visually-hidden">Loading...</span>
						</div>
					{/if}
					{#each users as user}
						<div class="profile_meeting_inner">
							<div style="font-size: 17px; font-weight: bold;">{user.name}</div>
							<div>{user.email}</div>
						</div>
					{/each}
				</div>
			</div>
			<div class="col-sm">
				<div class="profile_background">
					<div class="profile_sub_title">Club Management</div>
                    <div>Make a New Club</div>
					{#if clubLoading == true}
						<div class="spinner-border" role="status" style="margin-left: auto; margin-right: auto; display: block; margin-top: 50px;">
							<span class="visually-hidden">Loading...</span>
						</div>
					{/if}
					{#each clubs as club}
						<div class="col">
							<div class="card mypage-card">
								<div class="card-body">
									<h5 class="card-title">{club.name}</h5>
									<div class="mypage-inner-body">
										<p class="card-text">
											{club.short_description}
										</p>
									</div>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>


<style>
	@import "../app.css";
</style>
