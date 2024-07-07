<script>
	import { Link } from "svelte-routing";
	import Navbar from "../Navbar.svelte";
    import { signOut } from "firebase/auth";
	import { auth, db } from "../firebase/firebase";
	import { collection, getDocs, addDoc } from "firebase/firestore";
    import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
	import { onMount } from 'svelte';
	let baseUrl = document.baseURI;
	let logoSrc = `${baseUrl}routes/logo.png`;
	var users = []
	var userLoading = false
	var clubs = []
	var clubLoading = false
	let email;
	let short_description;
	let long_description;
	let club_name;

	const addClub = async () => {
		var shouldAdd = confirm("Are you sure you would like to add this club?")
		if(shouldAdd)
		{
			const docRef = await addDoc(collection(db, "applications"), {
				name: club_name,
				short_description: short_description,
				long_description: long_description,
				club_owner: email
			});
			alert("Club added.")
		}
	}

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
					<div class="admin_add">
						<div class="profile_sub_title">Club Management</div>
						<button 
							on:click={() => {}} 
							class="btn btn-primary margin"
							data-bs-toggle="modal" 
							data-bs-target="#staticBackdrop"	
						>
							Add
						</button>
					</div>
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
<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
	<div class="modal-dialog">
	  <div class="modal-content">
		<div class="modal-header">
		  <h5 class="modal-title" id="staticBackdropLabel">Details</h5>
		  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
		</div>
		<div class="modal-body" id="modal-body">
			<div class="input-group mb-3 mt-3">
				<!-- <span class="input-group-text" id="inputGroup-sizing-default" style="width: 100px;">Email</span> -->
				<input bind:value={email} type="text" placeholder="Email" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
			</div>
			<div class="input-group mb-3 mt-3">
				<!-- <span class="input-group-text" id="inputGroup-sizing-default" style="width: 100px;">Email</span> -->
				<input bind:value={club_name} type="text" placeholder="Club Name" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
			</div>
			<div class="input-group mb-3 mt-3">
				<!-- <span class="input-group-text" id="inputGroup-sizing-default" style="width: 100px;">Email</span> -->
				<textarea bind:value={short_description} type="text" placeholder="Short Description" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></textarea>
			</div>
			<div class="input-group mb-3 mt-3">
				<!-- <span class="input-group-text" id="inputGroup-sizing-default" style="width: 100px;">Email</span> -->
				<textarea bind:value={long_description} type="text" placeholder="Long Description" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></textarea>
			</div>
		</div>
		<div class="modal-footer">
		  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
		  <button type="button" class="btn btn-primary" on:click={() => addClub()}>Add</button>
		</div>
	  </div>
	</div>
  </div>


<style>
	@import "../app.css";
</style>
