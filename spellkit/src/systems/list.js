import * as shields_twain from "./shields_twain.js"
import * as shavian from "./shavian.js"
import * as sampa from "./sampa.js"
import * as ipa from "./ipa.js"

const manifest = [
	["shields_twain", "Shields-Twain", "Based on \"A Plan for the Improvement of English Spelling\" by M. J. Shields, sometimes attributed to Mark Twain."],
	["shavian", "Shavian", "The Shavian alphabet, designed by Ronald Kingsley Read with funding from playwright George Bernard Shaw."],
	["sampa", "SAMPA", "Speech Assessment Methods Phonetic Alphabet. An ASCII-based system for representing various European languages, derived from IPA."],
	["ipa", "IPA", "The International Phonetic Alphabet. A widely-used set of symbols for representing sounds across languages."],
]

const systems = [
	shields_twain.system,
	shavian.system,
	sampa.system,
	ipa.system,
]

export { manifest, systems }
