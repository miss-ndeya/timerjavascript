function decompte(number) {
  if (number <= 0) {
    console.log("Compte à rebours terminé !");
  } else {
    console.log(number);
    setTimeout(function() {
      decompte(number - 1);
    }, 60000); 
  }
}

function nombre() {
  let number = parseInt(prompt("Veuillez entrer un nombre entier supérieur à 10 :"));
  
  while (isNaN(number) || number <= 10) {
    alert("Erreur : Veuillez entrer un nombre entier supérieur à 10.");
    number = parseInt(prompt("Veuillez entrer un nombre entier supérieur à 10 :"));
  }
  
  decompte(number);
}

nombre();

  

 