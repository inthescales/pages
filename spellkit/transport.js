import System from "./systems/system.js"
import { customize } from "./custom.js"

function getFilename(system) {
	let name = system.name
	name = name.replaceAll(" ", "_")
	name = name.replace(/[\/|\\:*?"<>]/g, "-")
	return name + ".json"
}

function exportSystem(system) {
	const json = system.toJSON()
    var file = new Blob([json], {type: "text/plain"});
       
    // Create fake link to download
    var a = document.createElement("a");
    a.href = URL.createObjectURL(file);
    a.download = getFilename(system)
    a.click();
}

function importSystem() {
	var input = document.createElement("input");
	input.type = "file"
	input.addEventListener("change", function(input) { handleImport(this.files[0], customize) } , false)
    input.click();
}

function handleImport(input, callback) {
	const reader = new FileReader();
	var system = null

	reader.onload = function () {
		const content = reader.result;
		system = System.fromJSON(content)
		callback(system)
	};

	reader.onerror = function () {
		console.error('Error reading the file');
	};

	reader.readAsText(input, 'utf-8');
}

export { exportSystem, importSystem }