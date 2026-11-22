$("#jouer").click(function(){
    $("*").removeClass("true false green red");
    var img = getRandomInt(49);
    $("#image").html("<img class='img' src='./../static/img/"+img+".jpg'>");
    var listLegendes = [img];
    while(listLegendes.length < 3){
        var newLeg = getRandomInt(49);
        while(listLegendes.indexOf(newLeg) != -1){
            newLeg = getRandomInt(49);
        }
        listLegendes.push(newLeg);
    }
    fisherYatesShuffle(listLegendes);
    $(".legende").each(function(index, elt){
        $(elt).html(listeLogements[listLegendes[index]]);
        if(listLegendes[index] == img){
            $(elt).addClass("true");
        }else{
            $(elt).addClass("false");
        }
    });
    $("#legendes").css("visibility","visible"); 
})

$(".legende").click(function(){
    if($(this).hasClass("true")){
        $(this).addClass("green");
    }else{
        $(this).addClass("red");
    };
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