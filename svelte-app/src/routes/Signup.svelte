<style>
	@import '../app.css';
</style>

<script>
    import { auth } from "../firebase/firebase";
    import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
    import { onMount } from 'svelte';

    onMount(() => {
        onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.uid;
            window.location.href='http://localhost:8080/'
            // ...
        } else {
            // User is signed out
            // ...
            console.log("logged out")
        }
        });
    })
    let email;
    let password;
    let name;
    const doRequest = async (email, password) => {
        document.getElementById("button_loading").style.display = "inline-block"
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            window.location.href='http://localhost:8080/signin'
            document.getElementById("button_loading").style.display = "none"
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            document.getElementById("button_loading").style.display = "none"
            alert(errorMessage)
            // ..
        });
    }

</script>

<!-- <nav class="nav nav-tabs">
    <a class="nav-link" href="/mypage">MyPage</a>
    <a class="nav-link" href="/">Club List</a>
</nav> -->
<div
        class="signin-logo"
    >
        <img src="https://cdn.koreaconsumer.or.kr/news/photo/202306/642_1408_3024.jpg" alt="logo"/>
    </div>
<div class="card align signin-card">
    <div class="header">
        <div class="card-body">
            
            <div class="signin-title">
                Sign Up
            </div>

            <div class="input-group mb-3 mt-3">
                <!-- <span class="input-group-text" id="inputGroup-sizing-default" style="width: 100px;">Email</span> -->
                <input bind:value={email} type="text" class="form-control" placeholder="Email" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
            </div>

            <div class="input-group mb-3 mt-3">
                <!-- <span class="input-group-text" id="inputGroup-sizing-default" style="width: 100px;">Email</span> -->
                <input bind:value={name} type="text" class="form-control" placeholder="Name" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
            </div>

            <div class="input-group mb-3">
                <!-- <span class="input-group-text" id="inputGroup-sizing-default" style="width: 100px;">Password</span> -->
                <input bind:value={password} type="password" placeholder="Password" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
            </div>

            <div class="input-group mb-3">
                <!-- <span class="input-group-text" id="inputGroup-sizing-default" style="width: 100px;">Confirm Password</span> -->
                <input type="password" class="form-control" placeholder="Confirm Password" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
            </div>

            <button on:click={() => doRequest(email, password)} class="btn btn-primary margin signup_button">
                <span id="button_loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true" style="display: none;"></span>
                Sign Up
            </button>
            <div
                style="text-align: center"
            >
                Already have an account? <span style="font-weight: bold; cursor: pointer;" onclick="window.location.href='http://localhost:8080/signin'">Signin</span>
            </div>

        </div>
    </div>
</div>
    
