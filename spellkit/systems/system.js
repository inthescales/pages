export default class System {
	#graphs;
	constructor(id, name, description, graphs, ligatures, exceptionWords, useUppercase) {
		this.id = id
		this.name = name
		this.description = description
		this.#graphs = graphs;
		this.ligatures = ligatures
		this.exceptionWords = exceptionWords
		this.useUppercase = useUppercase;
	};

	getGraph(phoneme) {
		if (this.#graphs[phoneme] === undefined) {
			console.log("No graph for phoneme '" + phoneme + "'")
		}

		return this.#graphs[phoneme]
	};

	/* Import and export */

	toJSON() {
		const dict = {
			"id": this.id,
			"name": this.name,
			"description": this.description,
			"graphs": this.#graphs,
			"ligatures": this.ligatures,
			"exception-words": this.exceptionWords,
			"options": {
				"preserve-case": this.useUppercase
			}
		}

		return JSON.stringify(dict, null, 4)
	}

	static fromJSON(string) {
		const parse = JSON.parse(string)
		if (parse.result == false) {
			return undefined
		}

		if (
			typeof parse.graphs != "object" ||
			typeof parse.ligatures != "object" ||
			typeof parse["exception-words"] != "object" ||
			typeof parse.options != "object" ||
			typeof parse.options["preserve-case"] != "boolean"
		) {
			return undefined
		}

		return new System("custom", parse.name, parse.description, parse.graphs, parse.ligatures, parse["exception-words"], parse.options["preserve-case"])
	}
}
