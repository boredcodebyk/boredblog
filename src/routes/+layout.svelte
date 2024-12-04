<script lang="ts">
  import "../app.css";
  let { children } = $props();
</script>

<div
  class="bg-emerald-100 h-dvh selection:text-emerald-100 selection:bg-gray-700 sm:px-20 lg:px-60 px-10 py-10 flex flex-col overflow-auto"
>
  
    <p>boredcodebyk // illusbyk // cloudy echoes</p>
    <div class="flex flex-row gap-2 py-2">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="https://github.com/boredcodebyk" target="_blank">GitHub</a>
    </div>  
    {@render children()}
  
</div>
