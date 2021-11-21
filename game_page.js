Player1_name = localStorage.getItem("Player1_name")
Player2_name = localStorage.getItem("Player2_name")

player1_score = 0
player2_score = 0

document.getElementById("player1_name").innerHTML = Player1_name + " : "
document.getElementById("player2_name").innerHTML = Player2_name + " : "

document.getElementById("player1_score").innerHTML = player1_score 
document.getElementById("player2_score").innerHTML = player2_score 

document.getElementById("player_question").innerHTML = "questionturn" + Player1_name
document.getElementById("player_answer").innerHTML = "answerturn" + Player2_name

function send(){
 get_word = document.getElementById("word").value
 word2 =document.getElementById("word2").value
 q=get_word*word2
 

question_word = "<h4 id='word_display'> Q. "+get_word+"x" +word2+"</h4>";
input_box = "<br>Answer : <input type='text' id='input_check_box'>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row = question_word + input_box + check_button ;
document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";
document.getElementById("word2").value = "";
} question_turn = "player1"; answer_turn = "player2"

function check(){



answer = document.getElementById("input_check_box").value

if(answer == q){

if(answer_turn=="player1"){



player1_score = player1_score +1;
document.getElementById("player1_score").innerHTML = player1_score
}
else{
player2_score = player2_score +1;
document.getElementById("player2_score").innerHTML = player2_score
}
}
if(question_turn == "player1"){
question_turn="player2"
document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name ;

}
else{
    question_turn="player1"
    document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
      
}

if(answer_turn == "player1"){
    answer_turn="player2"
    document.getElementById("player_answer").innerHTML = "answer Turn - " + player2_name ;
    
    }
    else{
        answer_turn="player1"
        document.getElementById("player_answer").innerHTML = "answer Turn - " + player1_name ;
    }
        document.getElementById("output").innerHTML = "";
          
    }





