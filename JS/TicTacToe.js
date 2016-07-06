/**
 * Created by itc_user on 7/5/2016.
 */

var TicTacToe = {};

TicTacToe.init = function(){
    TicTacToe.boxes = $('.box');
    TicTacToe.matrix = [
        ["","",""],
        ["","",""],
        ["","",""]

    ];
    for(var i=0;i<TicTacToe.matrix.length;i++){
        for(var j=0;j<TicTacToe.matrix[i].length;j++){
            TicTacToe.boxes.eq(i*3+j)
                .data("i",i)
                .data("j",j);
        }
    }

    TicTacToe.currentPlayer = "red";
    TicTacToe.currentPlayerIndicator = $('.colorBox').addClass(TicTacToe.currentPlayer);

    TicTacToe.boxes.on('click',TicTacToe.clickOnBoxes());
};

TicTacToe.clickOnBoxes = function(){
};


TicTacToe.renderBoard = function(){
    TicTacToe.boxes.removeClass("blue").removeClass("red");

    for(var i=0;i<TicTacToe.matrix.length;i++){
        for(var j=0;j<TicTacToe.matrix[i].length;j++){
            TicTacToe.boxes.(eq(i*3+j).addClass(TicTacToe.matrix[i][j]));
        }
    }

};

TicTacToe.didPlayerWin = function(player){
    var rows =
        TicTacToe.matrix[0][0] === player && TicTacToe.matrix[0][1] === player && TicTacToe.matrix[0][2] === player ||
        TicTacToe.matrix[1][0] === player && TicTacToe.matrix[1][1] === player && TicTacToe.matrix[1][2] === player ||
        TicTacToe.matrix[2][0] === player && TicTacToe.matrix[2][1] === player && TicTacToe.matrix[2][2] === player ;

    var column =
        TicTacToe.matrix[0][0] === player && TicTacToe.matrix[1][0] === player && TicTacToe.matrix[2][0] === player ||
        TicTacToe.matrix[0][1] === player && TicTacToe.matrix[1][1] === player && TicTacToe.matrix[2][1] === player ||
        TicTacToe.matrix[0][2] === player && TicTacToe.matrix[1][2] === player && TicTacToe.matrix[2][2] === player ;

    var diag =
        TicTacToe.matrix[0][0] === player && TicTacToe.matrix[1][1] === player && TicTacToe.matrix[2][2] === player ||
        TicTacToe.matrix[0][2] === player && TicTacToe.matrix[1][1] === player && TicTacToe.matrix[2][0] === player;


    if(rows || column || diag){ //If one of the user win
        return true;
    }
    else{
        return false; //if there is no winning combination
    }

};



TicTacToe.resetMatrix = function(){
    for(var i=0;i<TicTacToe.matrix.length;i++) {
        for (var j = 0; j < TicTacToe.matrix[i].length; j++) {
            TicTacToe.matrix[i][j] = "";
        }
    }
    TicTacToe.renderBoard();

};



TicTacToe.checkIfGameShouldGoOn = function(){

    for(var i=0;i<TicTacToe.matrix.length;i++) {
        for (var j = 0; j < TicTacToe.matrix[i].length; j++) {
            if(TicTacToe.matrix[i][j] === ""){
                return true ; }
            else{
                return false;
            }
        }
    }

};


TicTacToe.setNames = function() {
    $('button').on("click", (function () {
        var firstInputValue = $('#first').val();
        var secondInputValue = $('#second').val();
        var output = $('.written').text($('.written').text()+ " " +firstInputValue);
        var output2 = $('.written2').text($('.written2').text()+ " " +secondInputValue);
    }));

}
TicTacToe.getName = function(player){
    var firstInputValue = $('#first').val();
    var secondInputValue = $('#second').val();

    if(player === 'red'){
        return firstInputValue || 'red';
    }
    else{
        return secondInputValue || 'blue'
    }
    
};

TicTacToe.setNames();

TicTacToe.init();