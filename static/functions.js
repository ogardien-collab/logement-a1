// fonctions de choix d'image
/*get a random integer */
function getRandomInt(max){
    return Math.floor(Math.random() * max);/*renvoie un nombre entier entre 0 et max donc faire commencer les listes d'images à 0 pour éviter les problèmes*/
};
$( window ).resize(function() {
    if (window.matchMedia("(orientation: portrait)").matches) {
        $(".carte").css("height", "31%");
    }else{
        $(".carte").css("height", "48%");
    }
});
/*return a chosen nb of non-identic images from a list*/
function img_legende(legende){
    // on récupère la valeur de la case cochée pour le nombre de cartes à tirer et on la stocke dans nbImages
    var nbImages = "";
    for(let elt of $(".nb_img")){
        if($(elt)[0].checked == true){
            nbImages = parseInt($(elt)[0].value);
        }
    }
    // on affiche "nbImages" cartes
    var listeImages = [];
    while(listeImages.length < nbImages){
        var newIndex = getRandomInt(49);
        while(listeImages.indexOf(newIndex) != -1){
            var newIndex = getRandomInt(49);
        }
        listeImages.push(newIndex);
    }
    $("#affichage_des_cartes").html(""); // on efface les cartes pré-existantes
    for(let elt of listeImages){
        if(legende){
            $("#affichage_des_cartes").append("<div class='carte' id='carte"+elt+"'><img src='./../static/img/"+elt+".jpg'><span class='affiche'>"+listeLogements[elt]+"</span></div>"); // on ajoute les nouvelles cartes
        }else{
            $("#affichage_des_cartes").append("<div class='carte' id='carte"+elt+"'><img src='./../static/img/"+elt+".jpg'></div>"); // on ajoute les nouvelles cartes
        }
    }
    if (window.matchMedia("(orientation: portrait)").matches) {
        $(".carte").css({
            "height":"31%",
            "width":"30%"
        });
        $(".carte>img").css({
            "max-width":"100%",
            "max-height":"100%"
        });
        $(".affiche").css("font-size","large");
    }else{
        $(".carte").css({
            "height":"48%",
            "width":"30%"
        });
        $(".carte>img").css({
            "max-height":"90%"
        });
        $(".affiche").css("font-size","x-large");
    }
}
$( window ).bind( "resize", function(){
    if (window.matchMedia("(orientation: portrait)").matches) {
        $(".carte").css({
            "height":"31%",
            "width":"30%"
        });
        $(".carte>img").css({
            "max-width":"100%",
            "max-height":"100%"
        });
        $(".affiche").css("font-size","large");
    }else{
        $(".carte").css({
            "height":"48%",
            "width":"30%"
        });
        $(".carte>img").css({
            "max-height":"90%"
        });
        $(".affiche").css("font-size","x-large");
    }
} );
$("#jouer").click(function(){
    img_legende(legende=true);
});
$("#jouer2").click(function(){
    img_legende(legende=true);
    $(".affiche").css("visibility","hidden");
});

// variables pré-enregistrées

var listeLogements = ["le portail","un appartement","une maison","un immeuble","la cuisine","la salle de bains","le salon","le grenier","la cave","les toilettes","la salle à manger","l'entrée","le garage","le jardin","la terrasse","le balcon","le toit","la porte","la fenêtre","l'escalier","l'ascenseur","le couloir","le plancher","le plafond","un lit","une table","une chaise","un fauteuil","un tapis","une lampe","une armoire","une commode","un lave-vaisselle","un four","un frigo","une machine à laver","un W-C","un lavabo","une baignoire","une douche","un miroir","une poubelle","acheter","rénover","déménager","ensoleillé(e)","négligé(e)","un placard","un robinet","une villa"]