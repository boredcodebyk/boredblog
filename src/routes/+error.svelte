<script>
    import {  page} from "$app/stores";
</script>

<h1 class="text-6xl">// {$page.status} //</h1>
<h2 class="text-5xl">{$page.error?.message}</h2>