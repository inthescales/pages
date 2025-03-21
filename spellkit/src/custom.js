import System from "./systems/system.js"
import { addRow } from "./elements.js"

const inputPairs = [
	["ɑ", document.getElementById("aa")],
	["æ", document.getElementById("ae")],
	["ʌ", document.getElementById("uh")],
	["ɔ", document.getElementById("aw")],
	["aʊ", document.getElementById("au")],
	["aɪ", document.getElementById("ai")],
	["ɛ", document.getElementById("e")],
	["ɝ", document.getElementById("er")],
	["ə", document.getElementById("schwa")],
	["ɚ", document.getElementById("schwar")],
	["eɪ", document.getElementById("ei")],
	["ɪ", document.getElementById("ih")],
	["i", document.getElementById("ee")],
	["oʊ", document.getElementById("oa")],
	["ɔɪ", document.getElementById("oi")],
	["ʊ", document.getElementById("horseshoe")],
	["u", document.getElementById("oo")],
	["b", document.getElementById("b")],
	["tʃ", document.getElementById("ch")],
	["d", document.getElementById("d")],
	["ð", document.getElementById("dh")],
	["f", document.getElementById("f")],
	["g", document.getElementById("g")],
	["h", document.getElementById("h")],
	["dʒ", document.getElementById("j")],
	["k", document.getElementById("k")],
	["l", document.getElementById("l")],
	["m", document.getElementById("m")],
	["n", document.getElementById("n")],
	["ŋ", document.getElementById("ng")],
	["p", document.getElementById("p")],
	["ɹ", document.getElementById("r")],
	["s", document.getElementById("s")],
	["ʃ", document.getElementById("sh")],
	["t", document.getElementById("t")],
	["θ", document.getElementById("th")],
	["v", document.getElementById("v")],
	["w", document.getElementById("w")],
	["j", document.getElementById("y")],
	["z", document.getElementById("z")],
	["ʒ", document.getElementById("zh")],
]

const optionPairs = [
	["preserve-case", document.getElementById("option-capitalization")]
]

function getGraphs() {
	let graphs = {}

	for (const index in inputPairs) {
		const pair = inputPairs[index]
		graphs[pair[0]] = pair[1].value
	}

	return graphs
}

function getLigatures() {
	const container = document.getElementById("ligature-container")
	const pairs = container.querySelectorAll(".ligature-pair")
	let ligatures = {}

	for (let index = 0; index < pairs.length; index++) {
		const pair = pairs[index]
		const target = pair.querySelector("#target").value
		const value = pair.querySelector("#value").value

		if (target == "") {
			continue
		}

		ligatures[target] = value
	}

	return ligatures
}

function getExceptions() {
	const container = document.getElementById("exception-container")
	const pairs = container.querySelectorAll(".exception-pair")
	let exceptions = {}

	for (let index = 0; index < pairs.length; index++) {
		const pair = pairs[index]
		const target = pair.querySelector("#target").value
		const value = pair.querySelector("#value").value

		if (target == "") {
			continue
		}

		exceptions[target] = value
	}

	return exceptions
}

function getOptions() {
	let graphs = {}

	for (const index in optionPairs) {
		const pair = optionPairs[index]
		graphs[pair[0]] = pair[1].checked
	}

	return graphs
}

function setGraphs(system) {
	for (const index in inputPairs) {
		const pair = inputPairs[index]
		pair[1].value = system.getGraph(pair[0])
		if (system.getGraph(pair[0]) != "") {
			pair[1].className = "graph"
		}
	}
}

function setLigatures(system) {
	const container = document.getElementById("ligature-container")
	const rows = document.querySelectorAll(".ligature-pair")

	// Remove existing ligature rows
	for (const row of rows) {
		if (row.id != "template") {
			container.removeChild(row)
		}
	}

	// Add ligature rows
	for (const [key, value] of Object.entries(system.ligatures)) {
		const newPair = addRow("ligature-container")
		newPair.querySelector("#target").value = key
		newPair.querySelector("#value").value = value
	}
}

function setExceptions(system) {
	const container = document.getElementById("exception-container")
	const rows = document.querySelectorAll(".exception-pair")

	// Remove existing exception rows
	for (const row of rows) {
		if (row.id != "template") {
			container.removeChild(row)
		}
	}

	// Add exception rows
	for (const [key, value] of Object.entries(system.exceptionWords)) {
		const newPair = addRow("exception-container")
		newPair.querySelector("#target").value = key
		newPair.querySelector("#value").value = value
	}
}

function setOptions(system) {
	for (const index in optionPairs) {
		const pair = optionPairs[index]
		if (pair[0] == "preserve-case") {
			pair[1].checked = system.useUppercase
		}
	}
}

function clear() {
	document.getElementById("system-name").value = ""
	document.getElementById("system-description").value = ""

	for (const index in inputPairs) {
		const pair = inputPairs[index]
		pair[1].value = ""
		pair[1].className = "graph"
	}

	// Clear options

	for (const index in optionPairs) {
		const pair = optionPairs[index]
		if (pair[0] == "preserve-case") {
			pair[1].checked = false
		}
	}

	// Clear ligatures

	const ligatureContainer = document.getElementById("ligature-container")
	const ligatureRows = ligatureContainer.querySelectorAll(".ligature-pair")
	for (const row of ligatureRows) {
		if (row.id != "template") {
			ligatureContainer.removeChild(row)
		}
	}

	// Clear exceptions

	const exceptionContainer = document.getElementById("exception-container")
	const exceptionRows = exceptionContainer.querySelectorAll(".exception-pair")
	for (const row of exceptionRows) {
		if (row.id != "template") {
			exceptionContainer.removeChild(row)
		}
	}
}

function validate() {
	let ok = true
	for (const index in inputPairs) {
		const pair = inputPairs[index]
		if (pair[1].value == "") {
			ok = false
			pair[1].className = "graph-error"
		} else {
			pair[1].className = "graph"
		}
	}

	return ok
}

// EXPORTS =========================================

function getCustom() {
	const name = document.getElementById("system-name").value
	const description = document.getElementById("system-description").value

	const graphMap = getGraphs()
	const ligatures = getLigatures()
	const exceptions = getExceptions()
	const options = getOptions()

	const id = "custom"

	return new System(id, name, description, graphMap, ligatures, exceptions, options["preserve-case"])
}

function customize(system) {
	setGraphs(system)
	setLigatures(system)
	setExceptions(system)
	setOptions(system)
	document.getElementById("system-name").value = system.name
	document.getElementById("system-description").value = system.description
}

function clearCustom() {
	clear()
}

function ifCustomIsValid(exec) {
	if (validate()) {
		exec()
	}
}

export { ifCustomIsValid, customize, getCustom, clearCustom }