
window.onload = function () {
	//Umwandeln mit Key
	document.getElementById("decodeKEY").onclick = function () {
		let entry = document.getElementById("text").value;
		let key = document.getElementById("ceasarKey").value;
		let ascii = new Array(entry.length).fill(0);
		output.innerHTML = shiften(entry, key, ascii);
	}
	//Umwandeln ohne Key
	document.getElementById("myButton").onclick = function () {

		let entry = document.getElementById("text").value;
		let ceasarKey = document.getElementById("ceasarKey").value;
		let output = document.getElementById("output");
		let findKey = 0;
		let ascii = new Array(entry.length).fill(0);
		let inhalt = entry.value;
		let alphaArr = new Array(26).fill(0);
		findKey = catchKey(entry, alphaArr, findKey);
		output.innerHTML = shiften(entry, findKey, ascii);
	}


	function converter(entry, ascii) {
		//console.log(entry.length);

		for (let i = 0; i < entry.length; i++) {
			ascii[i] = entry.charCodeAt(i);

		}
		return ascii;
	}



	function catchKey(entry, alphaArr, findKey) {

		

		for (let i = 0; i < entry.length; i++) {
			let cacheAlpha = entry.charCodeAt(i) - 97;

			alphaArr[cacheAlpha] += 1;

		}
		for (let i = 0; i < alphaArr.length; i++) {
			console.log(alphaArr[i]);
			
			console.log(alphaArr[findKey]);
			if (alphaArr[i] > alphaArr[findKey]) { //hier musst du alphaArr[findKey] testen, weil sonst schaust du ja nicht ob der inhalt größer ist
				findKey = i; 
				console.log("key:" + alphaArr[findKey]);
			}
			

		}

		findKey = 26 - findKey + 4;
		console.log("Key:" + findKey);

		return findKey;
	}//catchKey
	function shiften(entry, key, ascii) {
		converter(entry, ascii);
		
		for (let i = 0; i < ascii.length; i++) {
			// Normalfall Kleinbuchstaben
			if (ascii[i] + + parseInt(key) < 123 && ascii[i] + parseInt(key) > 96 && ascii[i] <= 97) {
				ascii[i] = ascii[i] + parseInt(key); 
			}else if (ascii[i] + parseInt(key) > 122){ 
				ascii[i] = (ascii[i] + parseInt(key)) % 122 + 96; //hier fehlt auch der key & beim key muss immer parseInt drum weil sonst wird der nicht als zahl erkannt
			}
			else if (ascii[i] + parseInt(key) < 91  && ascii[i] + parseInt(key) > 64){
				ascii[i] = ascii[i] + parseInt(key); 
			}else if (ascii[i] + parseInt(key)>= 90) {
					ascii[i] = (ascii[i] + parseInt(key)) % 90 + 64;
				}
			}
			console.log(ascii);
			let ausgabe = String.fromCharCode(...ascii);
		
			return ausgabe; 
		} //shiften
		

	
}//window.onload