$("#jouer").click(function(){
    $("*").removeClass("red green");
    $(".empty").html("");
    var listImg = [];
    while(listImg.length < 5){
        var newImg = getRandomInt(49);
        while(listImg.indexOf(newImg) != -1){
            newImg = getRandomInt(49);
        }
        listImg.push(newImg);
    }
    $(".imag").each(function(ind, elt){
        $(elt).html("<img src='./../static/img/"+listImg[ind]+".jpg' id='"+listImg[ind]+"'>")
    });
    fisherYatesShuffle(listImg);
    $(".legd").each(function(ind, elt){
        $(elt).html("<span class='remplir' id='drag"+[listImg[ind]]+"' draggable='true' ondragstart='drag(event)'>"+listeLogements[listImg[ind]]+"</span>");
    });
    $(".legd").css("height",(document.getElementById("legd1").offsetWidth)/2);
    $("#affichage_des_cartes").css("visibility","visible");
})
$( window ).bind( "resize", function(){
    $(".legd").css("height",(document.getElementById("legd1").offsetWidth)/2);
} );
// ================================= drag and drop code ==================================== //
function allowDrop(ev) {
    ev.preventDefault();
} 
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    ev.currentTarget.style.backgroundColor = 'yelow';
}
function drop(ev) {
    ev.preventDefault();
    if(ev.target.tagName == "DIV" && ev.target.childNodes.length == 0){
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
    }   
}
// =============================== end of drag and drop code =============================== //
//fonction pour checker les réponses
$("#solution").click(function(){     
    $("*").removeClass("red green");
    $(".imag>img").each(function(ind,elt){
        if($(".empty")[ind].innerHTML == ""){
            $($(".empty")[ind]).addClass("red");
        } else {
           if(($(".empty")[ind].firstChild.id).substring(4) == elt.id){
                $($(".empty")[ind]).addClass("green");
            } else {
                $($(".empty")[ind]).addClass("red");
            }
        }
    })
})
//get a random integer
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
var listeLogements = ["le portail","un appartement","une maison","un immeuble","la cuisine","la salle de bains","le salon","le grenier","la cave","les toilettes","la salle à manger","l'entrée","le garage","le jardin","la terrasse","le balcon","le toit","la porte","la fenêtre","l'escalier","l'ascenseur","le couloir","le plancher","le plafond","un lit","une table","une chaise","un fauteuil","un tapis","une lampe","une armoire","une commode","un lave-vaisselle","un four","un frigo","une machine à laver","un W-C","un lavabo","une baignoire","une douche","un miroir","une poubelle","acheter","rénover","déménager","ensoleillé(e)","négligé(e)","un placard","un robinet","une villa"]