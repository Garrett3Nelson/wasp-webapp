import { redirect } from "@sveltejs/kit"
import { getDeveloper } from "$lib/backend/data"
import type { PageLoad } from "./$types"

export const load: PageLoad = async ({ params }) => {
	let { slug } = params
	if (!slug) throw redirect(300, "/devs")

	const developer = await getDeveloper(slug.toLowerCase())
	if (!developer) throw redirect(300, "/devs")

	return { developer }
}
