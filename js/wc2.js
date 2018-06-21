
var trial=1;
var i=0; //word in one trial
var t=0;
var error=0;
var points=0;

//window.onload = function() {
//    var audio = document.getElementById('audio');
//    audio.play();
//}
//debugger;
var totalPoints = parseInt(localStorage.getItem("totalPoints"));
var totalErrors = parseInt(localStorage.getItem("totalErrors"));
//var totalPoints= localStorage.getItem('totalPoints');;
//var totalErrors= localStorage.getItem('totalErrors');;
//console.log('retrievedObject: ', JSON.parse(retrievedObject));

//console.log(retrievedObject);
console.log(totalPoints);
console.log(totalErrors);

$("#wholePoints").replaceWith("<span id='wholePoints'>"+ totalPoints + " points</span>");
$("#spanPoints").replaceWith("<span id='spanPoints'>"+ totalPoints + " points</span>");

if (totalErrors==1) {
        loseHeart(1);
    }
    else if (totalErrors==2) {
        loseHeart(1);
    loseHeart(2);
    }
    else if(totalErrors==3) {
        loseHeart(1);
        loseHeart(2);
    loseHeart(3);
    }


function playSound(path) {
  // audio supported?
  if (typeof window.Audio === 'function') {
    var audioElem = new Audio();
    audioElem.src = path;
    audioElem.play();
  }
}
            
//            word challenge

function loseHeart(i){
    var heart_i=document.getElementById('heart'+i);
        heart_i.style.opacity = "0.3";
        heart_i.style.filter  = 'alpha(opacity=30)';
}

function wcTrial(i){
//    var sctrialNum = document.createElement('span');
//    sctrialNum.innerHTML=i+"/3";
//    var scTrial = document.querySelector(".scTrial");
//    scTrial.append(sctrialNum);
    
    $("#wcTrial").append("<span id='trialNum'>" + i + "/3</span>");
}

var words_wc1=["Buy","Clothes","Neighbor"];
var trial4=["bait","bay","buy","bite","big"];
var trial5=["classes","clothes","closes","cloth","cleans"];
var trial6=["either","higher","nature","northern","neighbor"];
var wordlist=[false,false,false];

var seconds;
var input;
//if(trial==1) {
console.log('trial should be 1');
console.log(trial);
    document.querySelector('.robby').addEventListener('click', function(){
    playSound('WC2/Trial_' + (trial) + "/"+ words_wc1[i] + '.wav');
    });
    wcTrial(trial);
console.log('trial should be 1');
console.log(trial);

for(t=0;t<trial4.length;t++){
    $("#word_"+ (t+1)).replaceWith("<span id='word_"+(t+1)+"'>"+ trial4[t]+"</span>");
}
wordlist[0]=true;
    
    

function submitAnswer(){
    if(trial==1) {
        console.log('first click');
    input = $("input[name='WC_choices']:checked").val();
        pushWord(input);
    if(input=='Word1'){
        playSound('WC2/Trial_1/Buy bait.wav');
        $('.minusPoints').css('display','block');
        totalErrors=totalErrors+1;
    }
    else if(input=='Word2'){
        playSound('WC2/Trial_1/Buy bay.wav');
        $('.minusPoints').css('display','block');
        totalErrors=totalErrors+1;
    }
    else if(input=='Word3'){
        playSound('WC2/Trial_1/Buy.wav');
        $('.plusPoints').css('display','block');
        totalPoints=totalPoints+10;
        $("#spanPoints").replaceWith("<span id='spanPoints'>"+ totalPoints + " points</span>");
        $("#wholePoints").replaceWith("<span id='wholePoints'>"+ totalPoints + " points</span>");

    }
    else if(input=='Word4'){
        playSound('WC2/Trial_1/Buy bite.wav');
        $('.minusPoints').css('display','block');
        totalErrors=totalErrors+1;
    }
    else if(input=='Word5'){
        playSound('WC2/Trial_1/Buy big.wav');
        $('.minusPoints').css('display','block');
        totalErrors=totalErrors+1;
    }
    //trial=trial+1;
    $(".check").attr({
            "value": "Next",
            "class": "next",
            "onclick": "goToNext()"
        });
    }
    
//    =["classes","clothes","closes","cloth","cleans"];
    if(trial==2) {
        console.log('second click');
        input = $("input[name='WC_choices']:checked").val();
        pushWord(input);
    if(input=='Word1'){
        playSound('WC2/Trial_2/Clothes classes.wav');
        $('.minusPoints').css('display','block');
        totalErrors=totalErrors+1;
    }
    else if(input=='Word2'){
        playSound('WC2/Trial_2/Clothes.wav');
        $('.plusPoints').css('display','block');
        totalPoints=totalPoints+10;
        $("#spanPoints").replaceWith("<span id='spanPoints'>"+ totalPoints + " points</span>");
        $("#wholePoints").replaceWith("<span id='wholePoints'>"+ totalPoints + " points</span>");

    }
    else if(input=='Word3'){
        playSound('WC2/Trial_2/Clothes closes.wav');
        $('.minusPoints').css('display','block');
        totalErrors=totalErrors+1;
    }
    else if(input=='Word4'){
        playSound('WC2/Trial_2/Clothes cloth.wav');
        $('.minusPoints').css('display','block');
        totalErrors=totalErrors+1;
    }
    else if(input=='Word5'){
        playSound('WC2/Trial_2/Clothes cleans.wav');
        $('.minusPoints').css('display','block');
        totalErrors=totalErrors+1;
        

    }
    //trial=trial+1;
        $(".check").attr({
            "value": "Next",
            "class": "next",
            "onclick": "goToNext()"
        });
    }
    
//=["either","higher","nature","northern","neighbor"];
    if(trial==3) {
        console.log('third click');
        input = $("input[name='WC_choices']:checked").val();
        pushWord(input);
    if(input=='Word1'){
        playSound('WC2/Trial_3/Neighbor either.wav');
        $('.minusPoints').css('display','block');
        totalErrors=totalErrors+1;
    }
    else if(input=='Word2'){
        playSound('WC2/Trial_3/Neighbor higher.wav');
        $('.minusPoints').css('display','block');
        totalErrors=totalErrors+1;
    }
    else if(input=='Word3'){
        playSound('WC2/Trial_3/Neighbor nature.wav');
        $('.minusPoints').css('display','block');
        totalErrors=totalErrors+1;
    }
    else if(input=='Word4'){
        playSound('WC2/Trial_3/Neighbor northern.wav');
        $('.minusPoints').css('display','block');
        totalErrors=totalErrors+1;
    }
    else if(input=='Word5'){
        playSound('WC2/Trial_3/Neighbor.wav');
        $('.plusPoints').css('display','block');
        totalPoints=totalPoints+10;
        $("#spanPoints").replaceWith("<span id='spanPoints'>"+ totalPoints + " totalPoints</span>");
        $("#wholePoints").replaceWith("<span id='wholePoints'>"+ totalPoints + " points</span>");
    }
    //trial=trial+1;
        $(".check").attr({
            "value": "Next",
            "class": "next",
            "onclick": "goToNext()"
        });
    }
    
    if (totalErrors==1) {
        loseHeart(1);
    }
    else if (totalErrors==2) {
    loseHeart(2);
    }
    else if(totalErrors==3) {
    loseHeart(3);
    }
}

//console.log('trial should be 2 if clicked once');


function goToNext(){
//        console.log('this is go to next');
        if(trial<3){
            
    trial=trial+1;
    $(".plusPoints").css("display","none");
    $(".minusPoints").css("display","none");
    
    $(".next").attr({
        "value": "Check",
        "class": "check",
        "onclick": "submitAnswer()"
    });
    $("#trialNum").replaceWith("<span id='trialNum'>" + (trial) + "/3</span>");
    $('input[name=WC_choices]').attr('checked',false);        
        
            
    document.querySelector('.robby').addEventListener('click', function(){
    playSound('WC2/Trial_' + (trial) + "/"+ words_wc1[trial-1] + '.wav');
    });
    //wcTrial(trial);
    if(trial==2){
        for(t=0;t<trial5.length;t++){
            $("#word_"+ (t+1)).replaceWith("<span id='word_"+(t+1)+"'>"+ trial5[t]+"</span>");
            }
    }
    else {
        for(t=0;t<trial6.length;t++){
            $("#word_"+ (t+1)).replaceWith("<span id='word_"+(t+1)+"'>"+ trial6[t]+"</span>");
            }
    }           
}
    else {
        console.log("if judge");
        showTwine();
            $('.activity_panel').hide();
            $('#twine').show();
        
        localStorage.setItem('totalPoints', totalPoints);
        localStorage.setItem('totalErrors', totalErrors);
                     console.log("set the localStorage");
    }
}

//localStorage.setItem("data", [totalPoints, totalErrors]);
//  console.log("set the localStorage");