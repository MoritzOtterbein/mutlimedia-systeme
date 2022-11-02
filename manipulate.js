
window.onload = function(){ 
    document.getElementById("myButton").onclick = function(){
	
		let vorname = document.getElementById("myVorname").value;
		let ceasarKey = document.getElementById("ceasarKey").value;
		let vornameLenght = vorname.length;
		//console.log(vornameLenght);
		//Text to lower Case, output
		
		let output = document.getElementById("output");
		vorname = vorname.toLowerCase();
		let inhalt = vorname.value;
		//Array zum Buchstaben zählen
		let alphaArr = [];
		output.innerHTML = vorname;
		runThrough(vorname, vornameLenght, alphaArr);
		c = vorname.charCodeAt(0)
		
		
	}


};
function runThrough(vorname, vornameLenght, alphaArr) {
	
	console.log(vornameLenght);
	for (let index = 0; index < vornameLenght-1; index++) {
		let cacheAlpha = vorname.charCodeAt(index) - 97;
		console.log(cacheAlpha);
		alphaArr[cacheAlpha] +=1;
		
		console.log(alphaArr);
	}
	
}