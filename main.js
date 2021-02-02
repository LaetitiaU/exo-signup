const alreadyRegisteredUsernames = ["kim", "emmanuel", "nicolas"];

document.querySelector("form").addEventListener("submit", () => {
  // avant d'envoyer les données au serveur, on peut faire une étape de validation

  // on n'envoie pas vraiment les données pour l'exercice
  document.querySelector("main").innerHTML = "Compte créé :)";
});


function change() {
	var x = Math.floor(Math.random() * 256); 
	var y = Math.floor(Math.random() * 256);
	var z = Math.floor(Math.random() * 256);
	var thergb = "rgb(" + x + "," + y + "," + z + ")"; 
	console.log(thergb,document.body.style.background);
	document.body.style.background=thergb;
}