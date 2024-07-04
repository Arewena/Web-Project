<script>
	import { Router, Route } from 'svelte-routing';
	import Default from './routes/Default.svelte';
	import List from './routes/List.svelte';
	import Signin from './routes/Signin.svelte';
	import Mypage from './routes/Mypage.svelte';
	import Signup from './routes/Signup.svelte';
	import Admin from './routes/admin.svelte';
	import ClubAdmin from './routes/club_admin.svelte';


</script>

<style>
	@import './main.css';
</style>

<Router>
		<Route path="/" component={Default} />
		<Route path="/mypage" component={Mypage} />
		<Route path="/list" component={List} />
		<Route path="/signin" component={Signin} />
		<Route path="/signup" component={Signup} />
		<Route path="/admin" component={Admin} />
		<Route path="/club_admin" component={ClubAdmin} />
</Router>
