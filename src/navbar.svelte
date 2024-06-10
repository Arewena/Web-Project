<!-- src/Navbar.svelte -->
<script>
    import { isLoggedIn } from './store';
    import { onMount } from 'svelte';

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

{#if loggedIn}
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/logout">Logout</a></li>
        </ul>
    </nav>
{:else}
<ul class="nav nav-tabs">
    <li><a href="/">Home</a></li>
    <li><a href="/login">Login</a></li>
    <li><a href="/signup">Sign Up</a></li>
</ul>

{/if}

