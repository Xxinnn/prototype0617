var n=0;
var m=0;
var error=0;
var points=0;
//window.onload = function() {
//    var audio = document.getElementById('audio');
//    audio.play();
//}

//var retrievedObject = localStorage.getItem('testObject1');
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

//if (totalErrors==1) {
//        loseHeart(1);
//    }
//    else if (totalErrors==2) {
//        loseHeart(1);
//    loseHeart(2);
//    }
//    else if(totalErrors==3) {
//        loseHeart(1);
//        loseHeart(2);
//    loseHeart(3);
//    }
//retrievedObject = retrievedObject+1;



function playSound(path) {
  // audio supported?
  if (typeof window.Audio === 'function') {
    var audioElem = new Audio();
    audioElem.src = path;
    audioElem.play();
  }
}
            
//            spelling challenge
var input;
var inputArray=[];
var seconds;
var checkSeconds=[];
var nextSeconds=[];

function robbyFade(){
    var robby = document.getElementById('img_robby');
        robby.style.opacity = "0.1";
        robby.style.filter  = 'alpha(opacity=10)';
        $(".speech-bubble").css("display","none");
}

function robbyBack(){
    var robby1 = document.getElementById('img_robby');
        robby1.style.opacity = "1";
        robby1.style.filter  = 'alpha(opacity=100)';
        $(".speech-bubble").css("display","block");
}

function gainHeart(i){
    var heart=document.getElementById('heart'+i);
        heart.style.opacity = "1";
        heart.style.filter  = 'alpha(opacity=100)';
}

function scTrial(i){
//    var sctrialNum = document.createElement('span');
//    sctrialNum.innerHTML=i+"/3";
//    var scTrial = document.querySelector(".scTrial");
//    scTrial.append(sctrialNum);
    
    $("#scTrial").append("<span id='trialNum'>" + i + "/3</span>");
}

    var words=["Painless","Cheerful"];
    var parts=["Base","All","Suffix"];
    var less=["V1","V2"];

//var sanity = 0;

var arrayUser=[];
var arrayCorrect=["pain","less","les","chee","rful","rfull"];

// ziyan's code 

//    checkFlag();
//    console.log(m);
//    console.log(sanity);
//    sanity++;
//    if(sanity > 10){
//        break;
//    }

//function checkFlag(){
//    if (clicked[m] === false){
//        window.setTimeout(checkFlag, 100);
//    }
//    else{
//        m++;
//    }
//}
// ziyan's code
//function callback(m){

    document.querySelector('.robby').addEventListener('click', function(){
        if(n<2){
            playSound('SC/' + words[n] + '.wav');
        }
        else if(n==2){
            playSound('WC1/Trial_3/Language.wav');
        }
    });




    scTrial(n+1);

function submitAnswer(){ 
    //totalErrors=totalErrors-1;
    if (n<2) {
        
        if(n==0){
            gainHeart(1);
        }
        else if(n==1) {
            gainHeart(2);
        }
//    robby change opacity
    robbyFade();

//get input and chop
    input=document.getElementById("s1").value;
    inputArray.push(input);
    console.log(inputArray);
        pushWord(input);

    string_chop =  function(str, size){
        if (str == null) return [];
        str = String(str);
        size = ~~size;
    return size > 0 ? str.match(new RegExp('.{1,' + size + '}', 'g')) : [str];
    }    
    
    arrayUser=string_chop(input,4);
    console.log(arrayCorrect[m]);
    console.log(arrayUser[0]);
    console.log(arrayCorrect[m+1]);
    console.log(arrayUser[1]);

    var video=document.createElement("video");
    var videoContainer = document.querySelector('#video');
        video.autoplay = true;
        video.width=320;
        video.height=240;
        
    
//judge if correct and what kind of error
    if (arrayUser[0] !== arrayCorrect[m] && arrayUser[1] == arrayCorrect[m+1]) {
        $(".minusPoints").css("display","block");
        $(".type").css("border","2px solid red");
//        video.src = 'SC/Videos/Harmless_Base_Wrong.mp4';
        video.src = 'SC/Videos/' + words[n] + "_" + parts[0] + '_Wrong.mp4';
        setTimeout(showVideo, 1500);
        console.log("No");
    } //hermless
    else if(arrayUser[0] == arrayCorrect[m] && arrayUser[1] == arrayCorrect[m+2]) {
        $(".minusPoints").css("display","block");
        $(".type").css("border","2px solid red");
        video.src = 'SC/Videos/' + words[n] + '_' + parts[2] + '_Wrong_' + less[0] + '.mp4';
//        video.src = 'SC/Videos/Harmless_Suffix_Wrong_les.mp4';
        setTimeout(showVideo, 1500);
        console.log("NOw")
    } //les
    else if(arrayUser[0] == arrayCorrect[m] && arrayUser[1] !== arrayCorrect[m+1]) {
        $(".minusPoints").css("display","block");
        $(".type").css("border","2px solid red");
        video.src = 'SC/Videos/' + words[n] + '_' + parts[2] + '_Wrong_' + less[1] + '.mp4';
//        video.src = 'SC/Videos/Harmless_Suffix_Wrong_less.mp4';
        setTimeout(showVideo, 1500);
        console.log("NO");
    } //harmleth
    else if(arrayUser[0] !== arrayCorrect[m] && arrayUser[1] !== arrayCorrect[m+1]) {
        $(".minusPoints").css("display","block");
        $(".type").css("border","2px solid red");
        video.src = 'SC/Videos/' + words[n] + '_' + parts[1] + '_Wrong.mp4';

//        video.src = 'SC/Videos/Harmless_All_Wrong.mp4';
        setTimeout(showVideo, 1500);
        console.log("NOO")
    } //all wrong

    else if (arrayUser[0] == arrayCorrect[m] && arrayUser[1] == arrayCorrect[m+1]){
        $(".plusPoints").css("display","block");
        $(".type").css("border","2px solid green");
        //totalPoints=totalPoints+10;
        
        console.log("correct");
    } //correct
    
    
        function showVideo(){
            videoContainer.append(video);
            $("#robby").css("visibility","hidden");
            $(".minusPoints").css("display","none");
//            $("#video").css("visibility","visible");
        }
    
        $(".check").attr({
            "value": "Next",
            "class": "next",
            "onclick": "goToNext()"
        });
    
        n=n+1;
        m=3*n;
}
    else if(n==2){
//        document.querySelector('.robby').addEventListener('click', function(){
//            playSound('WC1/Trial_3/Language.wav');
//        });
        n=n+1;
        robbyFade();
        gainHeart(3);
        input = $("input[name='WC_choices']:checked").val();
        pushWord(input);
    if(input=='Word1'){
        playSound('WC1/Trial_3/Language ledges.wav');
        $('.minusPoints').css('display','block');
    }
    else if(input=='Word2'){
        playSound('WC1/Trial_3/Language landing.wav');
        $('.minusPoints').css('display','block');
    }
    else if(input=='Word3'){
        playSound('WC1/Trial_3/Language.wav');
        $('.plusPoints').css('display','block');
        

    }
    else if(input=='Word4'){
        playSound('WC1/Trial_3/Language teenage.wav');
        $('.minusPoints').css('display','block');
    }
    else if(input=='Word5'){
        playSound('WC1/Trial_3/Language lunches.wav');
        $('.minusPoints').css('display','block');
    }
    //trial=trial+1;
        $(".check").attr({
            "value": "Next",
            "class": "next",
            "onclick": "goToNext()"
        });
    }
    
    
    
    
    else {
    //scTrial(3);
    $(".check").attr({
        //"value": "Check",
        //"class": "check",
        "onclick": ""
    });
    console.log("if judge");
}
    
    
}
//else {
//    //scTrial(3);
//    $(".check").attr({
//        //"value": "Check",
//        //"class": "check",
//        "onclick": ""
//    });
//    console.log("if judge");
//}
//for(m=0;m<words.length-1; m++){
//    callback(m);
//}
    

function goToNext(){
    const next="Next";
    pushWord(next);
    nextSeconds.push(new Date().getTime() / 1000 | 0);
    console.log(nextSeconds);
        if(n<2){
            
    $('video').remove();
    
    robbyBack();
    $("#robby").css("visibility","visible");
    $(".plusPoints").css("display","none");
    $(".minusPoints").css("display","none");
    $(".type").css("border","1px solid black");
    $('input:text').attr("value","");
    
    $(".next").attr({
        "value": "Check",
        "class": "check",
        "onclick": "submitAnswer()"
    });
    $("#trialNum").replaceWith("<span id='trialNum'>" + (n+1) + "/3</span>");
    } 
    
    else if(n==2){
        
        
        $('video').remove();
    
        robbyBack();
        $("#robby").css("visibility","visible");
        $(".plusPoints").css("display","none");
        $(".minusPoints").css("display","none");
        $('#s1').css('display','none');
        $('#responseChoices').css('display','block');
        
        $(".next").attr({
        "value": "Check",
        "class": "check",
        "onclick": "submitAnswer()"
    });
    $("#trialNum").replaceWith("<span id='trialNum'>" + (n+1) + "/3</span>");
    }
        else {
//            $(".next").attr({
//                "onclick": "sc2.html"
//            });
            //totalPoints=totalPoints+points;
            totalErrors=0;
            console.log(totalPoints);
            console.log(totalErrors);
            console.log("if judge");
            showTwine();
            $('.activity_panel').hide();
            $('#twine').show();
            
            localStorage.setItem('totalPoints', totalPoints);
        localStorage.setItem('totalErrors', totalErrors);
                     console.log("set the localStorage");



        }
    }














