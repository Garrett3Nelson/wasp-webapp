import { supabase } from "$lib/database/supabase"
import type { Stat } from "$lib/database/types"
import type { PageLoad } from "./$types"

export const load: PageLoad = async ({ depends }) => {
	depends("stats:total")
	let total: Stat = {
		username: "Total",
		experience: 0,
		gold: 0,
		levels: 0,
		runtime: 0
	}

	const { data, error } = await supabase.rpc("get_stats_total")

	if (error) {
		const response = {
			total: total,
			stats: [],
			status: 500,
			error: new Error(
				`The server failed to fetch data from the database. This is not an issue on your side! Error message:\n\n${error.message}`
			)
		}
		return response
	}

	const totalData = data[0] as Stat

	total.experience += totalData.experience
	total.gold += totalData.gold
	total.levels += totalData.levels
	total.runtime += totalData.runtime

	return { total: total }
}
