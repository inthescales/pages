import System from "./system.js"

let graph_map = {
	"ɑ": "o",
	"æ": "a",
	"ʌ": "u",
	"ɔ": "ow",
	"aʊ": "ow",
	"aɪ": "ai",
	"ɛ": "e",
	"ɝ": "er",
	"ə": "a",
	"ɚ": "er",
	"eɪ": "ei",
	"ɪ": "i",
	"i": "i",
	"oʊ": "ou",
	"ɔɪ": "oi",
	"ʊ": "u",
	"u": "u",
	"b": "b",
	"tʃ": "c",
	"d": "d",
	"ð": "x",
	"f": "f",
	"g": "g",
	"h": "h",
	"dʒ": "j",
	"k": "k",
	"l": "l",
	"m": "m",
	"n": "n",
	"ŋ": "ng",
	"p": "p",
	"ɹ": "r",
	"s": "s",
	"ʃ": "y",
	"t": "t",
	"θ": "x",
	"v": "v",
	"w": "w",
	"j": "i",
	"z": "z",
	"ʒ": "j",
}

let ligatures = {
	"ngg": "ng",
}

let exceptionWords = {
	"or": "or",
	"of": "ov",
	"year": "iear",
}

const shields_twain = new System("shields_twain", "Shields-Twain", "Based on \"A Plan for the Improvement of English Spelling\" by M. J. Shields, sometimes attributed to Mark Twain.", graph_map, ligatures, exceptionWords, true)

export { shields_twain as system }
