import { redirect } from "@sveltejs/kit"
import { getCategories, getScript, getSubCategories } from "$lib/backend/data"
import type { PageLoad } from "./$types"

export const load: PageLoad = async ({ params, data }) => {
	const { slug } = params
	if (slug == null || data == null) throw redirect(300, "/scripts")

	const script = await getScript(slug)
	if (!script) throw redirect(300, "/scripts")

	const { dismissed } = data

	return { script, dismissed, categories: getCategories(), subcategories: getSubCategories() }
}
