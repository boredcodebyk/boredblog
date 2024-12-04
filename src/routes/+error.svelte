<script>
    import {  page} from "$app/stores";
</script>

<h1 class="text-6xl">{$page.status} {$page.error?.message}</h1>