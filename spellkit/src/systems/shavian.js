import System from "./system.js"

let graph_map = {
	"ɑ": "𐑭",
	"æ": "𐑨",
	"ʌ": "𐑳",
	"ɔ": "𐑷",
	"aʊ": "𐑬",
	"ə": "𐑩",
	"ɚ": "𐑼",
	"aɪ": "𐑲",
	"ɛ": "𐑧",
	"ɝ": "𐑻",
	"eɪ": "𐑱",
	"ɪ": "𐑦",
	"ɨ": "𐑦",
	"i": "𐑰",
	"oʊ": "𐑴",
	"ɔɪ": "𐑶",
	"ʊ": "𐑫",
	"u": "𐑵",
	"b": "𐑚",
	"tʃ": "𐑗",
	"d": "𐑛",
	"ð": "𐑞",
	"f": "𐑓",
	"g": "𐑜",
	"h": "𐑣",
	"dʒ": "𐑡",
	"k": "𐑒",
	"l": "𐑤",
	"m": "𐑥",
	"n": "𐑯",
	"ŋ": "𐑙",
	"p": "𐑐",
	"ɹ": "𐑮",
	"s": "𐑕",
	"ʃ": "𐑖",
	"t": "𐑑",
	"θ": "𐑔",
	"v": "𐑝",
	"w": "𐑢",
	"ʍ": "𐑢",
	"j": "𐑘",
	"z": "𐑟",
	"ʒ": "𐑠",
}

let ligatures = {
	"𐑭𐑮": "𐑸",
	"𐑷𐑮": "𐑹",
	"𐑱𐑮": "𐑺",
	"𐑧𐑮": "𐑻",
	"𐑩𐑮": "𐑼",
	"𐑦𐑮": "𐑽",
	"𐑦𐑩": "𐑾",
	"𐑘𐑵": "𐑿",
}

let exceptionWords = {
	"the": "𐑞",
	"of": "𐑝",
	"and": "𐑯",
	"to": "𐑑",
	"for": "𐑓",
}

const shavian = new System("shavian", "Shavian", "The Shavian alphabet, designed by Ronald Kingsley Read with funding from playwright George Bernard Shaw.", graph_map, ligatures, exceptionWords, false)

export { shavian as system }
