// Projet : Jeu de Paires  

// Objectif : Créer un jeu de carte appelé jeu de paires , le concept est qu'il y a un plateau de jeu , ou sont disposé 6 cartes , en 3x2 , face retourner . le but du jeu est que le joueur a le choix de cliquer sur 2 cartes, elles se retournent , si les 2 cartes sont identiques , elles disparaissent du plateau , sinon , elles se remettent face retourner . Le jeu se finis quand le joueur à reussis à retrouver toutes les cartes identiques .

// Consignes sur le dossier :
// - Créer un fichier que vous nommerez : jeu_paires_nom_prenom , et créer un repo github sous le même nom
// - Créer une structure du dossier correcte pour le projet  
// - Inclure à votre projet 3 images qui vous servirons de cartes pour le jeu ( donc il y aura 2 exemplaires pour chaque carte (image) sur le plateau ) , et une image comme dos de cartes . 
// - Créer évidement un fichier html et js 
// - Vous êtes assez libre sur le style , vous pouvez utiliser les classes Bootstrap , du Sass 

// Consigne sur le jeu : 
// - Créer une interface "tableau des scores" où on verra un tableau comportant la liste des joueurs ( pseudo + score en temps) . En bas du tableau il y aura un bouton qui permet au joueur de lancer la partie
// - Avant chaque jeu , le joueur peut inscrire son pseudo avant de lancer sa partie 
// - Après que le joueur a mis son pseudo et a appuyer sur le bouton pour lancer la partie , le tableau disparait et le plateau de jeu contenant les cartes apparait .
// - Au lancement de la partie un chrono se lance comptant le temps que le joueur à fait pour finir le jeu
// - Au lancement de la partie les cartes sont faces retournées et sont disposées à chaque début de partie de façon aléatoire
// - Le joueur a la possibilité de cliquer sur 2 cartes au choix à la fois , après quoi elles se retournent . ( vous connaissez les règles )
// - Quand le joueur a fini sa partie , inscris son score sur le tableau des scores et affiche l'interface pour pouvoir relancer la partie

// Les petits +  (Bonus):
// - Ajouter un système d'aide : si après 2 essaie , ils n'arrivent pas à trouver 2 cartes identiques , au 4ème essaie , après avoir cliquez sur une première carte , indique (avec un border rouge par exemple) la carte qui est identique .
// - Si vous avez réussis à faire avec 3 images , vous pouvez essayez avec 4 .
// - Si vous avez réussis a les faire  avec 3 images et 4 images , créer 2 modes de jeu à l'utilisateur , normal et difficile . Sur le tableau des scores , une nouvelle colonne sera la pour détérminer quel genre de mode le joueur à réussis le jeu (avec son pseudo et son score bien sûr).
// - Si vous avez complétement finis , n'hésitez pas à rajouter du style , et soyez fier de vous.

let image = [{ srcimg :"./public/img/hulk.jpg",name: "hulk"},
{ srcimg :"./public/img/ghostrider.jpg",name:"ghostrider"}
,{ srcimg :"./public/img/spiderman.jpg",name :"spiderman"},
{ srcimg :"./public/img/hulk.jpg",name:"hulk"},
{ srcimg :"./public/img/ghostrider.jpg",name:"ghostrider"}
,{ srcimg :"./public/img/spiderman.jpg",name:"spiderman"}];
let section = document.querySelector("#game");
console.log(section);

//---- Random Cards :
let  randomCards = () => {
    let cardData = image;
    console.log(cardData);
    cardData.sort((a,b) => Math.random()-0.5);
    return cardData;
}
//---- Keep the properties from a other function to shuffle the cards into the html:
// generate function:
let shuffleCards = ()=>{
    let cardData = randomCards();
    cardData.forEach(element => {
        console.log(element);
        //hmtl :
        let card = document.createElement("div");
        let faceCard = document.createElement("img");
        let backCard = document.createElement("div");
        card.classList = "card";
        faceCard.classList = "face";
        backCard.classList = "back";
        section.appendChild(card);
        card.appendChild(backCard);
        card.appendChild(faceCard);
        faceCard.src = element.srcimg;
        
        
    });
};
shuffleCards();





