//compteur de clicks
var clicks = 0;
/*get a random integer */
function getRandomInt(max){
    return Math.floor(Math.random() * max);/*renvoie un nombre entier entre 0 et max donc faire commencer les listes d'images à 0 pour éviter les problèmes*/
};
//pour mélanger une liste
function fisherYatesShuffle(arr){
    for(var i = arr.length-1 ; i>0 ;i--){
        var j = Math.floor( Math.random() * (i + 1) ); //random index
        [arr[i],arr[j]]=[arr[j],arr[i]]; // swap
    }
    return arr;
}
function extraitNombre(str){ 
    return Number(str.replace(/[^\d]/g, ""));
} 

//génère un certain nombre de cartes de mémory
function memory(nb_cartes){
    var listeImages = [];
    while(listeImages.length < nb_cartes/2){
        var newImg = getRandomInt(49);
        while(listeImages.indexOf(newImg) != -1){
            var newImg = getRandomInt(49);
        }
        listeImages.push(newImg);
    }
    var listeImagesDouble = fisherYatesShuffle(listeImages.concat(listeImages));
    let num = 0;
    for(let elt of $(".back")){
        $(elt).css("background-image","url('./../static/img/"+listeImagesDouble[num]+".jpg')");
        $(elt).addClass("img"+listeImagesDouble[num]);
        $(elt).children("span").html(listeLogements[listeImagesDouble[num]]);
        num ++;
    }
    $(".carte_glob").css("visibility","visible");
}
$("#jouer").click(function(){
    $("*").removeClass("retourne");
    $("*").removeClass("forever");
    memory(20);
});

$(".front").click(function(){
    console.log(clicks);
    clicks++;
    console.log(clicks);
    if(clicks > 2){
        $("*").removeClass("retourne");
        clicks=1;
    }
    $(this).parent().addClass("retourne");
    if($(".retourne").length == 2){
        var comp = [];
        for(let elt of $(".retourne")){
            comp.push(extraitNombre($(elt).children()[1].classList.value));
        }
        if(comp[0] == comp[1]){
            $(".retourne").addClass("forever");
        }
    }
    if($(".forever").length == 20){
        console.log("bravo");
    }
})
// calcul de la taille des cartes

function setSize(){
    var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    var vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    if(vw>=vh){
        if($("#avec").prop("checked")){
            $(".carte_glob").css({
                maxWidth:(vw-200)/5+"px",
                maxHeight:(vh-320)/4+"px",
                marginBottom:"25px"
            });
            $(".leg").css("visibility","visible");
        } else{
            $(".carte_glob").css({
                maxWidth:(vw-200)/5+"px",
                maxHeight:(vh-200)/4+"px",
                marginBottom:"0px"
            });
            $(".leg").css("visibility","hidden");
        }
        
    }else{
        if($("#avec").prop("checked")){
            $(".carte_glob").css({
                maxWidth:(vw-210)/4+"px",
                maxHeight:(vh-330)/5+"px",
                marginBottom:"25px"
            });
            $(".leg").css("visibility","visible");
        } else{
            $(".carte_glob").css({
                maxWidth:(vw-210)/4+"px",
                maxHeight:(vh-210)/5+"px",
                marginBottom:"0px"
            });
            $(".leg").css("visibility","hidden");
        }
    }
}
setSize();
$(".legende").change(setSize);
$( window ).bind( "resize", setSize );
// variables pré-enregistrées
var listeLogements = ["le portail","un appartement","une maison","un immeuble","la cuisine","la salle de bains","le salon","le grenier","la cave","les toilettes","la salle à manger","l'entrée","le garage","le jardin","la terrasse","le balcon","le toit","la porte","la fenêtre","l'escalier","l'ascenseur","le couloir","le plancher","le plafond","un lit","une table","une chaise","un fauteuil","un tapis","une lampe","une armoire","une commode","un lave-vaisselle","un four","un frigo","une machine à laver","un W-C","un lavabo","une baignoire","une douche","un miroir","une poubelle","acheter","rénover","déménager","ensoleillé(e)","négligé(e)","un placard","un robinet","une villa"]