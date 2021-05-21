// BOUCLES
// // # Exercice 1 OKI
// // - Demander un nombre maximal et afficher de 0 au nombre maximal (while)

// let nbr = prompt("choisis un nombre");

// let compteur = 0;

// while (compteur < nbr){
//      compteur ++;
//      console.log(compteur);
// }

// // # exercice 2
// // - Demander un nombre maximal et afficher de 2 en 2 de 0 au nombre maximal (for)

// let nbr = prompt("choisis un nombre");


// for (let i = 0; i < nbr; i++){
//      if(i % 2 == 0){
//           console.log(i);
//      }
// }



// # Exercice 3
// - Demander un nombre maximal et afficher si le nombre est paire de 0 au nombre maximal(for)
// - Ex: `Le nombre x est paire`

// let nbr = prompt("choisis un nombre");

// for (let i = 0; i < nbr; i++){
//      if(i % 2 == 0){
//           console.log(`${i} est pair`);
//      }else{
//           console.log(`${i} est impair`);
//      }
// }




// # Exercice 4
// - A molengeek, la classe est vide et les etudiants arrivent. Entrez 5 etudiants dans la classe (do ... while)

// let classe = [];
// let etudiants = ["ali", "agim","jean", "ilias", "elvis"]
// let i = 0;

// do{
//      classe.push(etudiants[i]);
//      i++;

// }
// while (i < 5)
// console.log(classe);


// # Exercice 5 OKI
// - Dans la classe de la coding 13 il y a Martin, Maxime, Jordano, Yasmina, Kawtar, Valentin, Oussama, Cactus, Fanny, Sergen, Karis, Kadri, Piere, Zidane, Imad, Abdel.
// - Affichez les prenoms des etudiants et si leurs index est paire ou impaire.
// - Afficher a la fin touts les etudiants qui avaient des index paires ou impaires (forEach)

// let cod13 = ["Martin", "Maxime", "Jordano", "Yasmina", "Jordano", "Kawtar", "Zidane"];


// cod13.forEach(element =>{
//      if(cod13.indexOf(element) % 2 == 0){
          
//           console.log(` ${element} est pair`);

//      }else{
//           console.log(` ${element} est impair`);
//      }
// })



// CONDITIONS
// # Exercice 1 OKI
// - A l'aide de 2 prompts, demender 2 nombres et dire quel est le plus grand

// let nb1 = prompt("choisis un nombre");
// let nb2 = prompt("choisis un autre");

// if(nb1 > nb2){
//      alert(`${nb1} est plus grand que ${nb2}`);
// }else if (nb1 < nb2){
//      alert(`${nb2} est plus grand que ${nb1}`);

// }else{
//      alert("ils sont égaux");
// }


// # Exercice 2 OKI
// - A l'aide d'un prompt, demander un nombre
// - Afficher si le nombre est paire ou impaire 

// let nb1 = prompt("choisis un nombre");
// if(nb1 % 2 === 0){
//      console.log("ce chiffre est paire"); 
// }else{
//      console.log("pas pair");
// }

// # Exercice 3 OKI
// - A l'aide d'un prompt, demande le prenom
// - Afficher `Votre prenom a moins de 5 caractères` si la taille du prenom est < 5
// - Afficher `Votre prenom a  5 caractères` si la taille du prenom est == 5
// - Afficher `Votre prenom a plus de 5 caractères` si la taille du prenom est > 5

// let prenom = prompt("entre un prenom");
// if(prenom.length < 5){
//      console.log("votre prénom a moins de 5 caracteres");

// }else if(prenom.length == 5){
//      console.log("est égal");
// }else{
//      console.log("votre prénom à + de 5 caractères");
// }



// # Exercice 4 OKII

// - Entrez 2 prenoms via des prompts
// - Afficher `Prenom1 a moins de caractères que Prenom2` si la taille de prenom1 est < taille de prenom2
// - Afficher `Prenom1 a le meme nombre de caractères que Prenom2` si la taille du prenom1 est == taille de prenom2
// - Afficher `Prenom1 a plus de caractères que Prenom2` si la taille du prenom1 est > taille de prenom2

// let prenom = prompt("entre un prenom");
// let prenom2 = prompt("entre un prenom");

// if(prenom.length < prenom2.length){
//      console.log(`${prenom} a moins de caractère que ${prenom2}`);
// }else if(prenom.length == prenom2.length){
//      console.log(`${prenom} a le même nombre de caractère que ${prenom2}`);
// }else{
//      console.log(`${prenom} a plus de caractère que ${prenom2}`);
// }


// # Exercice 5 OKI

// - Entrez votre vitesse
// - La vitesse limite de la route est 50km/h
// - Afficher `Vous pouvez continuer a cette vitesse. (vitesse => vitesse entrée)` si la vitesse est < que le vitesse limite
// - Afficher `Attention vous roulez a la vitesse limite. (vitesse => vitesse entrée)` si la vitesse est == que le vitesse limite
// - Afficher `Ralentissez, vous avez depassé la vitesse limite!! (vitesse => vitesse entrée)` si la vitesse est > que le vitesse limite

// let maVitesse = prompt("entre ta vitesse");
// let vitesseMax = 50;

// if(vitesseMax > maVitesse){
//      alert("tu peux continuer à cette vitesse");
// }else if(vitesseMax == maVitesse){
//      alert("attention tu roules à la vitesse limite")
// }else{
//      alert("attention t'as dépassé la limite")
// }

// # Exercice 6 OKI
// - Demander le prenom et l'age d'une personne.
// - Afficher `Salut, nom de la personne! Vu que t'as l'age de la personne ans, ce soir tu peux sortir en discoteque` si la est >= 18
// - Afficher `Salut, nom de la personne! Vu que t'as l'age de la personne ans, aujourd'hui tu iras au cinema` si la est < 18

// let age = prompt("c koi ton age");
// let prenom = prompt("c koi ton nom");

// if(age >= 18){
//      console.log(`salut ${prenom} tu es majeur tu es le bien venu à la fete`);
// }else {
//      console.log(`sorry ${prenom} trop jeune`);
// }


// # Exercice 7 OKI
// - Entrer 2 nombres et demander quel operateur on veut utilizer
// - Afficher le resultat pour l'operateur choisis
// - Ex: 3 * 2 = 6

// let nb1 = parseInt(prompt("choisi un nombre"));
// let op = prompt(" choisis un opérateur")
// let nb2 = parseInt(prompt("choisi un autre nombre"));

// if(op == "+"){
//      console.log(`${nb1+nb2}`);
// }else if (op == "-"){
//      console.log(`${nb1-nb2}`);
// }else if (op == "*"){
//      console.log(`${nb1*nb2}`);
// }else if(op == "/"){
//      console.log(`${nb1/nb2}`);
// }else{
//      console.log("choisis un opérateur correct");
// }

//FONCTIONS

// # Exercice 1 
// - Créer un programme qui va permettre de filter le type d'un mot. Le programme va prendre un paramètre qui sera le mot à tester.
// C-à-d que si le mot indruit est un string, il renvoit "Le type du mot introduit est un string", ect. 

// let filtre = (mot) =>{
//      if( typeof mot == "string"){
//           console.log("ceci est un string");
//      }else if (typeof mot == "number"){
//           console.log("ceci est un nombre");
//      }else{
//           console.log("il n'est aucun des deux");
//      }
// }

// filtre(true);


// # Exercice 2
// - Créer un programme qui va convertir la premiere lettre d'un mot en majuscule et qui va afficher la longueur de ce mot via une console.log

// Ajout d'un lowercase 

// let conv = (mot) =>{
//      console.log(mot.charAt(0).toUpperCase()+mot.substring(1,mot.length).toLowerCase());
// }

// conv("nASILA");


// # Exercice 3 
// - Créer un programme qui va nous afficher la date d'aujourd'hui avec le format jj/dd/aaaa



// let today = new Date().toLocaleDateString()

// console.log(today)


// # Exercice 4
// - Créer un programme qui va prendre un paramètre. Le programme consiste a attribué un nombre de classe et de les remplir. 
// - Après avoir reçu l'information, vous crée ces classes (array) via une boucle. (Ex: si le paramètre est de 7, vous créer 7 classe.)
// - Placer des étudiants dans une seul classe. Une classe peut prendre 20 élèves. (Attention, à cause du covid, ils peuvent en prendre que la moitié




//      # Exercice 5
// - Créer un programme qui prend deux paramètres. Un nom et un résultat. Si le résultat est supérieur à 90, vous placé le personnage dans un array nommé "Réussite". Si le résultat est égal ou supérieur à 50, vous les placer dans un array nommé "Remediation". Sinon vous le placer dans un tableau nommé "Echec". 

// Pour les étudiants qui font partie du groupe "Remediation", vous faites en sortes qu'ils viennent 7jours pour une remediation (boucle) et le prouver avec une console.log "personnage s'est présenter à l'école".

// let reussite = [];
// let remediation = [];
// let echec = [];
// let ecole =[];

// let point = (nom, resultat) =>{
//      if(resultat > 90){
//           reussite.push(nom);
//           console.log(`Bravo tu a + de 90 `);

//      }else if(resultat >= 50){
//           remediation.push(nom);
//           console.log(`Sorry tu vas en remédiation`);
//           for(let i = 0; i < 7; i ++){
//                console.log(`${nom} est à l'école`);
//                ecole.push(nom)
//                console.log(ecole);
//           }
          
//      }else{
//           echec.push(nom)
//           console.log(`Sorry tu as raté`);


//      }
// }

// point("nasila", 50);

// # Exercice 6 
// - Créer un programme qui va prendre les présence. Il prendra deux paramètres, nom et la présence.
// - Si l'étudiant est présent, vous le placé dans une classe. 
// - Sinon vous le placé dans un array "Absent". 
// - Retournez le résultat via une console.log, affiché chaque personne absente avec une phrase du style "L'eleve x a été absent"
// let classe = [];
// let absent = [];


// let tla = (nom, presence)=> {
//      if(presence == "présent"){
//           classe.push(nom);
//      }else{
//           absent.push(nom);
//      }
// }

// tla("nasila", "présent")
// tla("mouna", "absent");
// console.log(classe);
// console.log(absent);



// # Exercice 7
// - Créer un programme qui une fois déclenché, va nous renvoyer une alert de warning "Attention un virus a été détecté" tout les deux secondes.

// let virus = () =>{
// }

// virus();


// setInterval(function(){ 
//      alert("Attention un virus a été détecté");


// }, 2000);


// # Exercice 8
// - Créer une fonction qui doit donner ce résultat "BoNjOuR à ToUs". C-à-d mettre une lettre en majuscule une fois sur deux

// let capitalizee = (mot) =>{
//      for(let i = 0; i <  mot.length; i++){
//           if(i % 2 == 0){
//                i++;
//                mot.charAt(i).toUppeCase;
//                console.log(mot);
//           }else{

//           }
//      }

// }

// capitalizee("nasila");

// # Exercice 9 OKI
// - Créer un programme qui calcule le prix du produit avec TVA (la TVA vaut 1.196). 
// - Le programme prendra deux paramètres, le nom du produit et le prix du produit HTV.
// - Retourner le résultat via un console.log "le produit x vaut x € avec TVA"


// let calcul = (nom,prix) =>{
//      let TVA = prix * 1.196;
//      console.log(`le/la ${nom} TVAC est égal à ${TVA}`);
// }

// calcul("chocolat", 50);
// calcul("burger", 3)


// # Exercice 10
// - Créer un programme qui va trier des produits et leurs produits par rapport a leur marque. 
// - Vous travaillez pour 4 grosses entreprises: Nivea, Oreal, Dove, Garnier.
// - Le programme prendra deux paramètres. Le nom de l'entreprise et son produit (Ex: nivea, crème visage).
// - e programme va trier et stocker le produit dans des tableaux par rapport a sa marque. 
// (Ex: si vous lancez la méthode avec la marque granier, vous stocker le produit liée dans un array produitGranier.)
// - Faite en sorte d'afficher chaque nom de produit via une console.log en mettant la 1er lettre en majuscule

let produitNivea = [];
let produitDove = [];
let produitAutres = [];
let produitsAutres = [];


let tri = (nomEntreprise, nomProduit) =>{
     if(nomEntreprise== "Nivea"){
          produitNivea.push(nomProduit)
          console.log(produitNivea);
     }else if(nomEntreprise == "Dove"){
          produitDove.push(nomProduit);
          console.log(produitDove);

     } else{
          produitsAutres.push(nomProduit);
          console.log(produitAutres);
     }

}

tri("Nivea", "crème ");
tri("Dove", "shampooing");
tri("Nissan", "voiture");





//OBJET 
// # Exo 1
// - Créé un objet avec plusieurs propriétés (nom, prenom, age, mail) dont un est un objet avec ses propres propriétés


// # Exo 2 
// - Crée un objet avec un nom, un age et une méthode
// - La méthode de votre objet lance un prompt permetant de changer son age
// - Une alert renvoi l'age de votre objet avec la phrase "Vous avez x ans"

// # Exo 3
// - Créé un Personnage avec plusieurs propriétés ( nom, prenom, argent)
// - Créé un objet du nom de 'Article'. Il prendra plusieurs propriétés (nomProduit, prix, stock)
// - Créé une méthode propre au personnage qui va permettre d'acheter l'article. (Attention à l'argent et le stock)

// # Exo 4
// - Créé un objet du nom de 'Article'. Il prendra plusieurs propriétés. (nomProduit, prixHT)
// - Créé une méthode propre à l'objet qui va calculer le prix du produit avec TVA (la TVA vaut 1.196)

// # Exo 5
// - Créé un objet VIDE. Ajoute des propriétés (produit, prix, stock, réputation) à ton objet.
// - Supprime 'réputation' de l'objet et affiche l'objet via une console.log

// # Exo 6
// - Créé un objet pour une marque de voiture. Déclare plusieurs propriétés (marque, model, type, color, prix)
// - Créé une méthode qui va retourner une phrase du style : "Ma audi a6 est de type break. Elle est grise et vaut 20.000€"

// # Exo 7 
// - Crée un objet qui représente MolenGeek. Il prendra plusieurs propriétés -> 
// nombre d'employés = nombre au choix, 
// patron:{nom, prenom}, 
// newEmploye = [],
// - Créer une méthode "addEmploye" qui permet d'ajouter des employes dans le array newEmploye et une méthode "DelEmploye" de supprimer des employes. 
// - Créer une méthode "Felicitation" qui va sélectionner au hasard(random) un des nouveaux employés et va se faire féliciter via une console.log par le patron. 
// (Ex: nom du patron félicite l'employé)
// Pour finir, via une console.log, afficher moi le nombre d'employés!


// # Exo 8
// - Crée un objet avec un méthode "calcule". Cette méthode appliquera les opérations simple (Plus, addition, soustraction, division).
// - La méthode prendra 3 paramètres. (Nb1, opérateurs, nb2)
// - Assigne à l'objet une propriété "nom" avec comme valeur "mathématique"

// # Exo 9
// - Création d'un récit (Faite en sorte que les méthodes et les actions ressemblent à une histoire via des consoles.log) : 

// - Crée un objet du nom de "Bruxelles". Il prendra comme propriété : nombre de communes(19), popularité(normal), communePreferer(bruxelles). Il prendra également un array vide du nom de "projet" et un objet nommé "ministre" avec comme propriété {nom, prenom et argent}.
// - Vous êtes dans le personnage du ministre et vous voulez ramener une fraicheur dans la ville bruxelles.
// - L'objet contient plusieurs méthodes. Une méthode qui va permettre de créer une nouvelle commune. Celle-ci s'ajoutera dans l'array vide "futuriste". faite attention aux frais du minsitre et à la proprieté 'nombre de commune'. 
// - Vous répétez l'action 3 fois. Au bout de la 3ème, la popularité de Bruxelles change en "ville luxueuse"
// - Une fois réalisée, vous créez une méthode du nom de "random". Elle va vous permettre de choisir une commune aléatoire entre les trois nouvelles communes.Vous assignez cette nouvelle commune autant que la nouvelle communePreferer

// - Affichez via une console.log la nouvelle ville de Bruxelles.



// # Bonus (objet, condition, boucle, function)
// - Créé un objet Personnage avec des propriétés(idendite:{nom, prenom}, argent, lieu, humeur)
// une méthode propre à l'objet qui va changer son humeur aléatoirement.(Soit positif, soit négatif)
// - Créer une fonction qui va permettre au personnage de changer son lieu. Par défaut il est chez lui, pour la fonction il se déplacera à son lieu de tavail.
// - Créer une autre fonction qui va lui permettre de gagner de l'argent. Il gagnera 10€ pour 8 heure si son humeur est négatif. Par contre il gagnera 15€ pour 8heures si son humeur est positif. (Une itération  vaut 1 heure).
// - (Bonus dans le bonnus :faite en sorte qu'une tération se fasse tous les 2sec)
// - Pour la fonction qui lui permet de gagner de l'argent, si son humeur est positif, tous les 2 heures, il dira via une console.log : "J'aime mon travail", mais par contre si son humeur est négatif, il dira "je préfére mon lit"




// 1.
// À l'aide d'une boucle for, entrer 10 prénoms de personnes dans un tableau et les saluer tour à tour.

// let tab = [];
// let nom;

// for (i = 0; i < 10; i++){
//      nom = prompt("entre un nom");
//      tab.push(nom);
//      console.log(`Bonjour ${tab[i]}`);
// }






// 2.
// Sur base de l'exercice précédent, dire "Yo + prénom" aux personnes dont le prénom commence par un A, "Salut + prénom" aux personnes dont le prénom commence par un E, "ça gaze + prénom ?" aux personnes dont le prénom commence par un N

// let tab2 = ["Adil", "Agim", "Mouna", "Nathan", "Seif", "Nasila", "Elvis", "Ali", "Elias 1 ", "Elias 2"];

// for (let i = 0; i < tab2.length; i++ ){
//      if(tab2[i].charAt(0) == "A"){
//           console.log(`Yo ${tab2[i]}`);

//      }else if(tab2[i].charAt(0) == "E"){
//           console.log(`Salut ${tab2[i]}`);
//      }else {
//           console.log(`Ca gaze ${tab2[i]} ? `);
//      }
          
//  }





// 3.
// Trouvez un moyen de mettre en majuscule un élément sur deux dans un array avec une boucle for (ex: ["JAVASCRIPT", "c'est", "FACILE"])

// let tab = ["coucou", "cv", "yassine", "bg"];

// for (let i = 0; i < tab.length; i++){
//      if(tab.indexOf(tab[i]) % 2 == 0){
//           tab[i] = tab[i].toUpperCase();
//      } else{
//           tab[i] = tab[i].toLowerCase();
//      }
// }

// console.log(tab);



// // // Trouvez un moyen de faire rentrer un mot de passe a un utilisateur avec une boucle for et des conditions. S'il ne trouve pas le mot de passe après 3 essais, affichez-lui "accès refusé", sinon, affichez "accès accordé".

// let rep = prompt("entre un mdp");

// for (let i = 0; i < 2; i++){
//      if(rep != "123"){
//           alert("accès refusé, réessaye");
//           let rep = prompt("entre un mdp");

          
//      }else {
//           alert("bienvenue");
//      }
// }

// I.
// ## EXO1
// ### Créer une class Personnage avec comme propriétés : 
// ### age , nom , ville
// ### Faire 2 instances de cette class.


// class Personnage {
//      constructor(age, nom, ville){
//           this.age = age;
//           this.nom = nom;
//           this.ville = ville;
//           this.sePresenter = () => {
//                console.log(`bonjour je m'appeller ${this.age}`);
//           }
//      }
// }

// let naz = new Personnage("naz", 24, "bruxelles");
// let moun = new Personnage("mouna", 35, "bruxelles");

// naz.sePresenter();
// moun.sePresenter();


// ## EXO2
// ### Rajouter la methode 'sePresenter' à la class Personnage qui dira "Bonjour, je m'appelle [nom-de-la-personne] !" via un console.log
// ### Lancer cette méthode sur les deux instances de l'exo1




// III
// // ### Créer une class Objet

// class Objet{
//      constructor(nom, prix){
//           this.nom = nom;
//           this.prix = prix;
//      }
// }

// // ### Créer deux instances d'objets avec un nom et un prix

// let aquarium = new Objet("aquarium", 50);
// let terrarium = new Objet("terrarium", 60);

// // // ### Créer une boite (tableau) et mettre les deux objets dedans.

// let boite = [];
// boite.push(aquarium);
// boite.push(terrarium);


// // // ### Créer une class Personnage
// // // ### _Propriétés : nom(string), sac(tableau), argent(number)
// // // ### _Méthode : prendre(objet, boite)
// // // ### _Méthode : acheter(vendeur, objet)


// class Personnage{
//      constructor(nom, sac, argent){
//           this.nom = nom;
//           this.sac = sac;
//           this.argent = argent;
//           this.prendre = (objet, boite) =>{
//                this.sac.push(objet);
//                boite.splice(boite.indexOf(objet),1)
//                console.log(`${this.nom} a mit un ${objet.nom} dans son sac`);
               
//           };
//           this.acheter = (vendeur, objet) =>{
//                if(this.argent >= objet.prix){
//                     this.argent -= objet.prix;
//                     vendeur.argent += objet.prix;
//                     this.sac.push(objet);
//                     vendeur.sac.splice(vendeur.sac.indexOf(objet),1);
//                     console.log(` ${this.nom} a acheté un ${objet.nom} à ${vendeur.nom}`);
//                }else{
//                     console.log("t'as pas assez bro");
//                }
          
//           }

//      }    
// }


// // // ### Créer deux instances de Personnage et faites leur chacun [prendre] un objet de la boite avec leur méthode.

// let naz = new Personnage("naz", [], 500);
// let moun = new Personnage("Moun", [], 800);

// // ### Ensuite faites acheter à l'un des deux, l'objet de l'autre.

// naz.acheter(moun,terrarium);
// console.log(naz.sac);
// console.log(naz.argent);
// moun.acheter(naz, terrarium);
// console.log(moun.argent);





// ## EXO4

// ### Créez une class [Lieu] avec une propriété nom(string) et personnes(array vide).
// ### Puis créez des instances de [Lieu]: MolenGeek, Snack et Maison
// class Lieu {
//      constructor(nom, personnes){
//          this.nom = nom;
//          this.personnes = personnes;
//      }
//  }
 
//  let molengeek = new Lieu("Molengeek", []);
//  let snack = new Lieu("Snack", []);
//  let maison = new Lieu("Maison", []);
 
//  // ### Puis créez une class [Personne] avec une propriété nom(string), prenom(string), argent(number) et une methode seDeplacer(), cette methode permet de vous déplacer dans les differents lieux en faisant appel à la méthode embarquer() du bus ou en y allant à pieds.
//  // ### Puis créez une instance de votre personnage.
 
// class Personne{
//      constructor(nom, prenom, argent){
//           this.nom = nom;
//           this.prenom = prenom;
//           this.argent = argent;
//           this.seDeplacer = (depart, arrivee, transport)=> {
//                if(transport == "pieds"){
//                     console.log("va à pied");

//                }else if(transport.embarquer(this) == true){
//                     console.log("est dans le BUS");
//                }else{
//                     console.log('no money honey');
//                }
//                depart.personnes.splice(depart.personnes.indexOf(this),1);
//                arrivee.personnes.push(this);

//                console.log(`${this.prenom} est arrivée à ${arrivee.nom}`);
//           }
//      }
// }


//   // ### Créez une class [Bus] avec une propriéte personnes(array vide), une propriéte caisse(number) et une methode embarquer() (qui sera appelée dans la méthode seDeplacer() de la personne) qui va vérifier si vous possedez l'argent, si oui, il le déduit de votre argent, et le rajoute à sa caisse, et le personnage rentre dans le bus. Le bus coute 2.80. Sinon, il faut y aller à pied.
//  // ### Créez une instance de Bus. 

//  class Bus{
//       constructor(personnes, caisse,){
//            this.personnes = personnes;
//            this.caisse = caisse;
//            this.embarquer = (usager) =>{
//                 if(usager.argent >= 2.80){
//                    usager.argent -= 2.80;
//                    this.caisse += 2.80;
//                    this.personnes.push(usager); 
//                    console.log(`${usager.prenom} est entré.e dans le bus`);

//                    this.personnes.splice(this.personnes.indexOf(usager),1);
//                    console.log(`${usager.prenom} est sorti.e du bus`);
//                    return true;
//                 }else{
//                      console.log("marche biatch");
//                      return false;
//                 } 

//            }
//       }
//  }
 
//  let laStib = new Bus([], 0.00);

//  let fanny = new Personne("Hunin", "Fanny", 10);

//  // ### 8h00 Vous êtes à la maison.
// maison.personnes.push(fanny);
// console.log(maison.personnes);
 
//  // ### 8h30 Vous prennez le bus vers MolenGeek.

//  fanny.seDeplacer(maison,molengeek, laStib );

 
//  // ### 8h45 Vous êtes à MolenGeek.
 
 
//  // // ### 12h45 Vous sortez de MolenGeek, vous prenez le bus pour aller au snack.

//  fanny.seDeplacer(molengeek, snack, laStib);
 
 
//  // // ### 13h30 Vous sortez du snack, et vous rentrer pied à MolenGeek pour digérer.

//  fanny.seDeplacer(snack, molengeek, "pieds");
 
//  // // ### 17h10 Vous sortez de MolenGeek, vous prenez le bus pour rentrer chez vous.
 
// fanny.seDeplacer(molengeek, maison, laStib);

//  // // ### Faites un console.log() de votre argent, ainsi que l'argent du Bus

//  console.log(fanny.argent);
//  console.log(laStib.caisse);