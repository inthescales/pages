import System from "./system.js"

let graph_map = {
	"ɑ": "A",
	"æ": "{",
	"ʌ": "V",
	"ɔ": "O",
	"aʊ": "aU",
	"aɪ": "aI",
	"ɛ": "E",
	"ɝ": "3`",
	"ə": "@",
	"ɚ": "@`",
	"eɪ": "eI",
	"ɪ": "I",
	"i": "i",
	"oʊ": "oU",
	"ɔɪ": "OI",
	"ʊ": "U",
	"u": "u",
	"b": "b",
	"tʃ": "tS",
	"d": "d",
	"ð": "D",
	"f": "f",
	"g": "g",
	"h": "h",
	"dʒ": "dZ",
	"k": "k",
	"l": "l",
	"m": "m",
	"n": "n",
	"ŋ": "N",
	"p": "p",
	"ɹ": "r",
	"s": "s",
	"ʃ": "S",
	"t": "t",
	"θ": "T",
	"v": "v",
	"w": "w",
	"j": "j",
	"z": "z",
	"ʒ": "Z",
}

let ligatures = {}

let exceptionWords = {}

const sampa = new System("sampa", "SAMPA", "Speech Assessment Methods Phonetic Alphabet. An ASCII-based system for representing various European languages, derived from IPA.", graph_map, ligatures, exceptionWords, false)

export { sampa as system }
