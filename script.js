console.log("Laboratoire prêt !")

const nom = "POMMEREL";
console.log(nom)

let age = 17;
console.log(age)
//nom = "tyufk"
//age = 18;
//console.log(age)





const motDePasseAttendu = "123";
let motDePasseUtilisateur = "123";


if (motDePasseAttendu===motDePasseUtilisateur) {
    console.log("Accès autorisé. Bienvenue !");
} else if (motDePasseUtilisateur.length<8) {
    console.log("Accès refusé. Votre mot de passe est trop court (8 caractères min).");
} else {
    console.log("Accès refusé. Mot de passe incorrect.");
}

const moi = {
    prenom: "Johan",
    nom: "moi",
    age: 18,
    competences: ["HTML", "CSS"]
};
console.log(moi)
//console.log(moi.prenom);


console.log("Je M'appelle " + moi.prenom + " " + moi.nom)