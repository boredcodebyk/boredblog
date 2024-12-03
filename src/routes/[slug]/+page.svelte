<script lang="ts">
  import moment from 'moment';

    let { data } = $props()
	
</script>

<svelte:head>
	<title>{data.metadata.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.metadata.title} />
</svelte:head>


<article>
	<hgroup>
		<small>{data.metadata.title} - 
		Published at {moment(data.metadata.date).format('MMMM Do YYYY')}</small>
	</hgroup>

	<div class="flex flex-row gap-2">
		{#each data.metadata.categories as category}
			<small>&num;{category} </small>
		{/each}
	</div>

	<div class="prose">
		<data.content />
	</div>
</article>