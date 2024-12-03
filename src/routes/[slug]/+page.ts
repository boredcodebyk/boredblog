import type { Post } from "$lib/type.js";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
    try {
        const post = await import(`../../posts/${params.slug}.md`)
        let data: {
            content: any,
            metadata: Post
        } = {
            content: post.default,
            metadata: post.metadata
        }
        return data
    } catch (e) {
        error(404, `Could not find ${params.slug}`)
    }
}