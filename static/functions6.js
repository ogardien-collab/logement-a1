$("#jouer").click(function(){
    var nbWag = 0;
    var listWag = [];
    for(let elt of $(".wagon")){
        if ($(elt).html() != ""){
            listWag.push(parseInt(elt.firstChild.id));
            nbWag += 1;
        }
    }
    var listImg = [];
    for(let elt of listWag){
        listImg.push(elt);
    };
    while(listImg.length < nbWag+1){
        var nImg = getRandomInt(49);
        while(listImg.indexOf(nImg) != -1){
            nImg = getRandomInt(49);
        }
        listImg.unshift(nImg);
    }
    $(listImg).each(function(i,e){
        $($(".wagon")[i]).html("<img id='"+e+"' src='./../static/img/"+e+".jpg'><span class='lege'>"+listeLogements[e]+"</span>");
        $($(".wagon")[i]).css("visibility","visible");
    })
    if($("#avec").prop("checked")){
        $(".lege").addClass("visibleLegende");
    }else{
        $(".lege").removeClass("visibleLegende");
    }
})
$(".legende").click(function(){
    if($("#avec").prop("checked")){
        $(".lege").addClass("visibleLegende");
    }else{
        $(".lege").removeClass("visibleLegende");
    }
})
// calcul de la taille des cartes

function setSize(){
    var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    var vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
}
setSize();
$( window ).bind( "resize", setSize );
//get a random integer
function getRandomInt(max){
    return Math.floor(Math.random() * max);/*renvoie un nombre entier entre 0 et max donc faire commencer les listes d'images à 0 pour éviter les problèmes*/
};
var listeLogements = ["le portail","un appartement","une maison","un immeuble","la cuisine","la salle de bains","le salon","le grenier","la cave","les toilettes","la salle à manger","l'entrée","le garage","le jardin","la terrasse","le balcon","le toit","la porte","la fenêtre","l'escalier","l'ascenseur","le couloir","le plancher","le plafond","un lit","une table","une chaise","un fauteuil","un tapis","une lampe","une armoire","une commode","un lave-vaisselle","un four","un frigo","une machine à laver","un W-C","un lavabo","une baignoire","une douche","un miroir","une poubelle","acheter","rénover","déménager","ensoleillé(e)","négligé(e)","un placard","un robinet","une villa"]