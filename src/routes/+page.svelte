<script lang="ts">
  import moment from "moment";

  let { data } = $props();
</script>

<svelte:head>
  <title>home</title>
</svelte:head>

<h1>Hello There</h1>

<p class="py-2">my blog(s)</p>

{#if data.posts.length != 0}
  <table class="py-2 table-auto">
    <tbody>
      {#each data.posts as post}
        <tr>
          <td> [{moment(post.date).format("MMMM Do YYYY")}] </td>
          <td> | </td>
          <td> <a href={post.slug}>{post.title}</a> </td>
        </tr>
      {/each}
    </tbody>
  </table>
{:else}
  <p>Come back later</p>
{/if}
