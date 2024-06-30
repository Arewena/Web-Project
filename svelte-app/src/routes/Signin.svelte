<style>
	@import '../app.css';
</style>

<script>
    import { auth } from "../firebase/firebase";
    import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
    import { onMount } from 'svelte';
    let email;
    let password;

    onMount(() => {
        onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.uid;
            console.log(uid)
            // ...
        } else {
            // User is signed out
            // ...
            console.log("logged out")
        }
        });
    })

    const doRequest = async (email, password) => {
        document.getElementById("button_loading").style.display = "inline-block"
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            window.location.href='http://localhost:8080/'
            document.getElementById("button_loading").style.display = "none"
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            document.getElementById("button_loading").style.display = "none"
            alert(errorMessage)
        });
        }

</script>


<body>
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
                    Sign In
                </div>
                <div class="input-group mb-3 mt-3">
                    <!-- <span class="input-group-text" id="inputGroup-sizing-default" style="width: 100px;">Email</span> -->
                    <input bind:value={email} type="text" placeholder="Email" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                </div>
                <div class="input-group mb-3">
                    <!-- <span class="input-group-text" id="inputGroup-sizing-default" style="width: 100px;">Password</span> -->
                    <input bind:value={password} type="password" placeholder="Password" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                </div>
                <div class="form-check mb-5">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                        Remember this account?
                    </label>
                </div>
                <button on:click={() => doRequest(email, password)} class="btn btn-primary margin">
                    <span id="button_loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true" style="display: none;"></span>
                    Log in
                </button>
                <div
                    style="text-align: center"
                >
                    Don't have an account? <span style="font-weight: bold; cursor: pointer;" onclick="window.location.href='http://localhost:8080/signup'">Signup</span>
                </div>
                <!-- <a href="http://localhost:8080/signup" class="btn btn-outline-danger">Does not have account?</a> -->
            </div>
        </div>
        
    </div>
</body>



