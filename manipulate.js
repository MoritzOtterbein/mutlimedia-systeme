
window.onload = function () {
	//Umwandeln mit Key
	document.getElementById("myButton").onclick = function () {
		let entry = document.getElementById("text").value;

	}
	//Umwandeln ohne Key
	document.getElementById("decodeKEY").onclick = function () {

		let entry = document.getElementById("text").value;
		let ceasarKey = document.getElementById("ceasarKey").value;
		let output = document.getElementById("output");
		let findKey = 0;
		let inhalt = entry.value;
		//Array zum Buchstaben zählen
		let alphaArr = new Array(26).fill(0);
		output.innerHTML = entry;
		findKey = catchKey(entry, alphaArr);
		converter(entry);


	}
	/*To-DO: Code einlesen
	Groß Buchstaben und Kleinbuchstaben
	ASCII umwandeln
	Buchstaben zurück umwandeln
	Ausgeben
	*/

	function converter(entry) {
		console.log(entry.length);
		let ascii = new Array(entry.length).fill(0);
		for (let i = 0; i < entry.length; i++) {
			ascii[i] = entry.charCodeAt(i);
		}
	}


};
function catchKey(entry, alphaArr, key) {

	console.log(entry.length);

	for (let i = 0; i < entry.length; i++) {
		let cacheAlpha = entry.charCodeAt(i) - 97;

		alphaArr[cacheAlpha] += 1;

	}
	for (let i = 0; i < alphaArr.length; i++) {
		;
		let key = 0;
		if (alphaArr[i] > key) {
			key = i;
			console.log(key);
		}
		return key;

	}
	function shiften(entry, key) {
		converter(entry);
		for (let i = 0; i < entry.length; i++) {
			if (entry[i] < 123 && entry[i] > 96) {
				entry[i] = entry[i] + key;
				if (entry[i] > 122) {
					entry[i] = entry[i] % 122 + 96;
				}
			}
			else if (entry[i] < 91 && entry[i] > 64) {
				entry[i] = entry[i] + key;
				if (entry[i] > 90) {
					entry[i] = entry[i] % 90 + 65;
				}
			}

		}
	}
}