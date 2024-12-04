<script lang="ts">
  import moment from "moment";

  let { data } = $props();
</script>

<svelte:head>
  <title>home</title>
</svelte:head>

<h1>Hello There</h1>

<p>my blog(s)</p>
<div class="py-2">
  {#if data.posts.length != 0}
    {#each data.posts as post}
      <p>
        [{moment(post.date).format("MMMM Do YYYY")}] |
        <a href={post.slug}>{post.title}</a>
      </p>
    {/each}
  {:else}
    <p>Come back later</p>
  {/if}
</div>
