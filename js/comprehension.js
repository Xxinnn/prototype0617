var n=0;
var m=0;
var error=0;
var points=0;


//var retrievedObject = localStorage.getItem('testObject1');
var totalPoints = parseInt(localStorage.getItem("totalPoints"));
var totalErrors = parseInt(localStorage.getItem("totalErrors"));

console.log(totalPoints);
console.log(totalErrors);

$("#wholePoints").replaceWith("<span id='wholePoints'>"+ totalPoints + " points</span>");
$("#spanPoints").replaceWith("<span id='spanPoints'>"+ totalPoints + " points</span>");

function loseHeart(i){
    var heart_i=document.getElementById('heart'+i);
        heart_i.style.opacity = "0.3";
        heart_i.style.filter  = 'alpha(opacity=30)';
}


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
            
var input;
var seconds;
var checkSeconds=[];
var nextSeconds=[];


function submitAnswer(){ 
    checkSeconds.push(new Date().getTime() / 1000 | 0);
    console.log(checkSeconds);
//    $("#word").css("color","lightgrey");


    input = $("input[name='cq_choices']:checked").val();
    console.log(input);
    pushWord(input);
    
//judge if correct and what kind of error
    if (input=="a" || input=="c" || input=="d" || input=="e") {
        $(".minusPoints").css("display","block");
        $("label").css("color","lightgrey");
//        $("input[name='cq_choices']:checked").css("color","red");

        console.log("No");
    } 
    else if(input=="b") {
        $(".plusPoints").css("display","block");
        $(".comprehension").css("color","lightgrey");
       //$("#word").css("color","lightgrey");
       
//        document.querySelector("label[for='" + input + "']").style.color = "green";
        totalPoints=totalPoints+30;
        $("#wholePoints").replaceWith("<span id='wholePoints'>"+ totalPoints + " points</span>");
        $("#spanPoints").replaceWith("<span id='spanPoints'>"+ totalPoints + " points</span>");

        console.log("yes")
    } //les
   
        $(".check").attr({
            "value": "Next",
            "class": "next",
            "onclick": "goToNext()"
        });

    
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
    

function goToNext(){
    nextSeconds.push(new Date().getTime() / 1000 | 0);
    console.log(nextSeconds);
        
            
    
    $(".plusPoints").css("display","none");
    $(".minusPoints").css("display","none");
    
    showTwine();
            $('.activity_panel').hide();
            $('#twine').show();
            
            localStorage.setItem('totalPoints', totalPoints);
        localStorage.setItem('totalErrors', totalErrors);
                     console.log("set the localStorage");
    }
//        else {
//            console.log(totalPoints);
//            console.log(totalErrors);
//            console.log("if judge");
            
//
//        }
//    














