$("#jouer").click(function(){
    var listImg = [];
    while(listImg.length < $(".carte").length){
        var newImg = getRandomInt(49);
        while(listImg.indexOf(newImg) != -1){
            newImg = getRandomInt(49);
        }
        listImg.push(newImg);
    }
    $(".im").each(function(i,e){
        $(e).attr("src","./../static/img/"+listImg[i]+".jpg");
        $(e).attr("id",(listImg[i]));
    })
    $(".leg").each(function(i,e){
        $(e).html(listeLogements[listImg[i]]);
    });
    $.wait = function(ms) {
        var defer = $.Deferred();
        setTimeout(function() { defer.resolve(); }, ms);
        return defer;
    };
})
$( window ).bind( "resize", function(){
    setSize();
} );
// changer une seule image au click
$(".im").click(function(){
    listeIDs = [];
    for(let elt of $(".im")){
        listeIDs.push(parseInt(elt.id));
    }
    var newElt = getRandomInt(49);
    while(listeIDs.indexOf(newElt) != -1){
        newElt = getRandomInt(49);
    }
    $(this).attr("src","./../static/img/"+newElt+".jpg");
    $(this).attr("id",newElt);
    $(this).next().html(listeLogements[newElt]);
    
});

// calcul de la taille des cartes

function setSize(){
    var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    var vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    if(vw>=vh){
        $(".im").css({
            height:"90%",
            maxWidth:"100%"
        })
        if($("#avec").prop("checked")){
            $(".carte_glob").css({
                width:(vw-200)/5+"px",
                height:(vh-320)/3+"px",
                marginBottom:"25px"
            });
            $(".leg").css("visibility","visible");
        } else{
            $(".carte_glob").css({
                width:(vw-200)/5+"px",
                height:(vh-200)/3+"px",
                marginBottom:"0px"
            });
            $(".leg").css("visibility","hidden");
        }
    }else{
        if($("#avec").prop("checked")){
            $(".carte_glob").css({
                width:(vw-210)/3+"px",
                height:(vh-330)/5+"px",
                marginBottom:"25px"
            });
            $(".leg").css("visibility","visible");
        } else{
            $(".carte_glob").css({
                width:(vw-210)/3+"px",
                height:(vh-210)/5+"px",
                marginBottom:"0px"
            });
            $(".leg").css("visibility","hidden");
        }
    }
}
setSize();
$(".legende").change(setSize);
$( window ).bind( "resize", setSize );
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