
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

var words_wc1=["Busy","Instead","Language"];
var trial1=["bossy","busy","body","fussy","buy"];
var trial2=["instant","inched","listed","insist","instead"];
var trial3=["ledges","landing","language","teenage","lunches"];
var wordlist=[false,false,false];

var seconds;
var input;
//if(trial==1) {
console.log('trial should be 1');
console.log(trial);
    document.querySelector('.robby').addEventListener('click', function(){
    playSound('WC1/Trial_' + (trial) + "/"+ words_wc1[i] + '.wav');
    });
    wcTrial(trial);
console.log('trial should be 1');
console.log(trial);

for(t=0;t<trial1.length;t++){
    $("#word_"+ (t+1)).replaceWith("<span id='word_"+(t+1)+"'>"+ trial1[t]+"</span>");
}
wordlist[0]=true;
    
    

function submitAnswer(){
    if(trial==1) {
        console.log('first click');
     input = $("input[name='WC_choices']:checked").val();
        pushWord(input);
    if(input=='Word1'){
        playSound('WC1/Trial_1/Busy bossy.wav');
        $('.minusPoints').css('display','block');
        error=error+1;
    }
    else if(input=='Word2'){
        playSound('WC1/Trial_1/Busy.wav');
        $('.plusPoints').css('display','block');
        points=points+10;
        $("#wholePoints").replaceWith("<span id='wholePoints'>"+ points + " points</span>");
        $("#spanPoints").replaceWith("<span id='spanPoints'>"+ points + " points</span>");

    }
    else if(input=='Word3'){
        playSound('WC1/Trial_1/Busy body.wav');
        $('.minusPoints').css('display','block');
        error=error+1;
    }
    else if(input=='Word4'){
        playSound('WC1/Trial_1/Busy fussy.wav');
        $('.minusPoints').css('display','block');
        error=error+1;
    }
    else if(input=='Word5'){
        playSound('WC1/Trial_1/Busy buy.wav');
        $('.minusPoints').css('display','block');
        error=error+1;
    }
    //trial=trial+1;
    $(".check").attr({
            "value": "Next",
            "class": "next",
            "onclick": "goToNext()"
        });
    }
    
    if(trial==2) {
        console.log('second click');
     input = $("input[name='WC_choices']:checked").val();
        pushWord(input);
    if(input=='Word1'){
        playSound('WC1/Trial_2/Instead instant.wav');
        $('.minusPoints').css('display','block');
        error=error+1;
    }
    else if(input=='Word2'){
        playSound('WC1/Trial_2/Instead inched.wav');
        $('.minusPoints').css('display','block');
        error=error+1;
    }
    else if(input=='Word3'){
        playSound('WC1/Trial_2/Instead listed.wav');
        $('.minusPoints').css('display','block');
        error=error+1;
    }
    else if(input=='Word4'){
        playSound('WC1/Trial_2/Instead insist.wav');
        $('.minusPoints').css('display','block');
        error=error+1;
    }
    else if(input=='Word5'){
        playSound('WC1/Trial_2/Instead.wav');
        $('.plusPoints').css('display','block');
        points=points+10;
        $("#spanPoints").replaceWith("<span id='spanPoints'>"+ points + " points</span>");
        $("#wholePoints").replaceWith("<span id='wholePoints'>"+ points + " points</span>");

    }
    //trial=trial+1;
        $(".check").attr({
            "value": "Next",
            "class": "next",
            "onclick": "goToNext()"
        });
    }
    
//    var trial3=["ledges","landing","language","teenage","lunches"];

    if(trial==3) {
        console.log('third click');
     input = $("input[name='WC_choices']:checked").val();
        pushWord(input);
    if(input=='Word1'){
        playSound('WC1/Trial_3/Language ledges.wav');
        $('.minusPoints').css('display','block');
        error=error+1;
    }
    else if(input=='Word2'){
        playSound('WC1/Trial_3/Language landing.wav');
        $('.minusPoints').css('display','block');
        error=error+1;
    }
    else if(input=='Word3'){
        playSound('WC1/Trial_3/Language.wav');
        $('.plusPoints').css('display','block');
        points=points+10;
        $("#spanPoints").replaceWith("<span id='spanPoints'>"+ points + " points</span>");
        $("#wholePoints").replaceWith("<span id='wholePoints'>"+ points + " points</span>");

    }
    else if(input=='Word4'){
        playSound('WC1/Trial_3/Language teenage.wav');
        $('.minusPoints').css('display','block');
        error=error+1;
    }
    else if(input=='Word5'){
        playSound('WC1/Trial_3/Language lunches.wav');
        $('.minusPoints').css('display','block');
        error=error+1;
    }
    //trial=trial+1;
        $(".check").attr({
            "value": "Next",
            "class": "next",
            "onclick": "goToNext()"
        });
    }
    
    if (error==1) {
        loseHeart(1);
    }
    else if (error==2) {
    loseHeart(2);
    }
    else if(error==3) {
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
    playSound('WC1/Trial_' + (trial) + "/"+ words_wc1[trial-1] + '.wav');
    });
    //wcTrial(trial);
    if(trial==2){
        for(t=0;t<trial2.length;t++){
            $("#word_"+ (t+1)).replaceWith("<span id='word_"+(t+1)+"'>"+ trial2[t]+"</span>");
            }
    }
    else {
        for(t=0;t<trial3.length;t++){
            $("#word_"+ (t+1)).replaceWith("<span id='word_"+(t+1)+"'>"+ trial3[t]+"</span>");
            }
    }           
}
    else {
        console.log("if judge");
        showTwine();
        $('.activity_panel').hide();
        $('#twine').show();
    }
}