
window.onload = function(){ 
    document.getElementById("myButton").onclick = function(){
	
		let eingabe = document.getElementById("myVorname").value;
		let ceasarKey = document.getElementById("ceasarKey").value;
		let eingabeLänge = eingabe.length;
		//console.log(vornameLenght);
		//Text to lower Case, output
		
		let output = document.getElementById("output");
		eingabe = eingabe.toLowerCase();
		let inhalt = eingabe.value;
		//Array zum Buchstaben zählen
		let alphaArr = new Array(26).fill(0);
		output.innerHTML = eingabe;
		runThrough(eingabe, eingabeLänge, alphaArr);
		c = eingabe.charCodeAt(0)
		
		
	}


};
function runThrough(vorname, vornameLenght, alphaArr) {
	
	console.log(vornameLenght);
	for (let index = 0; index < vornameLenght; index++) {
		let  cacheAlpha = vorname.charCodeAt(index) - 97;
		
		alphaArr[parseInt(cacheAlpha)] +=1;
		console.log(alphaArr);
	}
	
}