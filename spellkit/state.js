import { systems } from "./systems/list.js"

// Returns the first system matching the given id
function systemWithID(id) {
	for (const index in systems) {
		const system = systems[index]
		if (system.id == id) {
			return system
		}
	}

	return undefined
}

export { systemWithID }