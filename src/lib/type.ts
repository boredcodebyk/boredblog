export type Categories = 'sveltekit' | 'svelte' | 'initiate';

export type Post = {
	title: string
	slug: string
	date: string
	categories: Categories[]
	published: boolean
}