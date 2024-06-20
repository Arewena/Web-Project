<style>
	@import '../app.css';
</style>

<script>
    let id;
    let password;

    const doRequest = async (id, password) => {
    const returnValue = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({id, password})

    })}

</script>


<body>
    <nav class="nav nav-tabs">
		<a class="nav-link" href="/mypage">MyPage</a>
		<a class="nav-link" href="/">Club List</a>
	</nav>
    <div class="card align">
        <div class="card-header">
            <img src="https://cdn.koreaconsumer.or.kr/news/photo/202306/642_1408_3024.jpg" height="50"/>
        </div>
        <div class="header">
            <div class="card-body">
                <h5 class="card-title">Sign in</h5>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Email</span>
                    <input bind:value={id} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Password</span>
                    <input bind:value={password} type="password" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                        Remember this account?
                    </label>
                </div>
                <button on:click={() => doRequest(id, password)} class="btn btn-primary margin">Log in</button>
                <a href="http://localhost:8080/signup" class="btn btn-outline-danger">Does not have account?</a>
            </div>
        </div>
        
    </div>
</body>



