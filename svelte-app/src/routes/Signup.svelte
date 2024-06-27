<style>
	@import '../app.css';
</style>

<script>
    let id;
    let password;
    let name;

    const doRequest = async (id, password) => {
    const returnValue = await fetch("http://127.0.0.1:8000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({id, password})

    })}

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
                <input bind:value={id} type="text" class="form-control" placeholder="Email" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
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

            <button on:click={() => doRequest(id, password)} class="btn btn-primary margin">Sign Up</button>
            <div
                style="text-align: center"
            >
                Already have an account? <span style="font-weight: bold; cursor: pointer;" onclick="window.location.href='http://localhost:8080/signin'">Signin</span>
            </div>

        </div>
    </div>
</div>
    
