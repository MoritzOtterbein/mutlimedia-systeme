
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
		let alphaArr = [];
		output.innerHTML = vorname;
		runThrough(vorname, vornameLenght);
		c = vorname.charCodeAt(0)
		console.log(ceasarKey);
		
	}


};
function runThrough(vorname, vornameLenght) {
	
	console.log(vornameLenght);
	for (let index = 0; index < vornameLenght-1; index++) {
		console.log(vorname.charCodeAt(index));
		
	}
	
}