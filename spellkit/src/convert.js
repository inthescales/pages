import cmudict from "./data/cmu.js"
import * as capitalization from "./capitalization.js"

// Converts a word into phonemic representation, taking into account punctuation
// and capitalization.
function convertWord(word, system) {
	if (system.useUppercase) {
		let casePattern = capitalization.read(word)
		let converted = convertText(word, system)
		let styled = capitalization.apply(converted, casePattern)
		return styled
	} else {
		return convertText(word, system)
	}
}

// Converts a string of text from a string into a phonemic representation.
function convertText(text, system) {
	const phonemes = cmudict[text.toUpperCase()];
	if (phonemes === undefined) {
		if (text == " ") {
			return text
		} else {
			return "<span class='unknown'>" + text + "</span>"
		}
	}

	const exception = system.exceptionWords[text.toLowerCase()]
	if (exception != undefined) {
		return exception
	}

	var value = "";
	for (const index in phonemes) {
		const phoneme = phonemes[index]
		value += system.getGraph(phoneme);
	}

	value = convertLigatures(value, system)

	return value
}

// Modifies text with ligatures from the given system
function convertLigatures(text, system) {
	if (system.ligatures.length == 0) {
		return text
	}

	let result = text
	for (const [key, value] of Object.entries(system.ligatures)) {
		result = result.replace(key, value)
	}

	return result
}

// EXPORTS =============================

// Convert the text in the input field into phonetic form, and display it
// in the output field.
function convert(system, conversionBlockID) {
	const conversion = document.getElementById(conversionBlockID)
	const inputField = conversion.querySelector(".conversion-input")
	const outputField = conversion.querySelector(".conversion-output")
	const placeholderField = conversion.querySelector(".conversion-output-placeholder")

	let inText = inputField.value;
	var outText = "";

	let splitten = inText.split(/\b/);
	for (var index = 0; index < splitten.length; index += 1) {
		let word = splitten[index];
		let next = splitten[index + 1];

		// Read ahead in the case of contractions
		if (index < splitten.length - 1
			&& splitten[index+1] == "'"
			&& ["d", "m", "s", "t", "ll", "re", "ve"].includes(splitten[index+2])) {
			word += splitten[index+1] + splitten[index+2]
			index += 2
		}

		outText += convertWord(word, system);
	}

	outputField.innerHTML = outText

	if (outText != "") {
		placeholderField.style.display = "none"
	} else {
		placeholderField.style.display = "inline"
	}
}

function clearConversion(conversionBlockID) {
	const conversion = document.getElementById(conversionBlockID)
	const inputField = conversion.querySelector(".conversion-input")
	const outputField = conversion.querySelector(".conversion-output")
	const placeholderField = conversion.querySelector(".conversion-output-placeholder")

	inputField.value = ""
	outputField.textContent = ""
	placeholderField.style.display = "inline"
}

export { convert, clearConversion };
