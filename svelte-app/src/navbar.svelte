<!-- src/Navbar.svelte -->
<script>
    import { isLoggedIn } from './store';
    import { onMount } from 'svelte';
    import { Link } from 'svelte-routing';

    let loggedIn;

    // Simulate checking login status on mount
    onMount(() => {
        // Replace this with actual login check logic
        isLoggedIn.set(Math.random() < 0.5);
    });

    isLoggedIn.subscribe(value => {
        loggedIn = value;
    });
</script>

<style>
    nav ul {
        list-style-type: none;
        padding: 0;
    }

    nav ul li {
        display: inline;
        margin-right: 10px;
    }
</style>
<header class="p-3" style="height: 100px;">
      <div style="height: auto;">
        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-start mb-md-0">
          <li><a href="/" class="nav-link px-2 text-black">Home</a></li>
          <li><a href="/mypage" class="nav-link px-2 text-secondary">MyPage</a></li>
        </ul>
      </div>
  </header>