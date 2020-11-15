var form ;
var player;
var game;
var database;
var gameState=0
var playerCount=0
var Car1, Car2, Car3, Car4
var Cars
var allPlayers

function setup() {
    canvas= createCanvas(displayWidth -25, displayHeight -150)
    database=firebase.database()
    game=new Game()
    game.getState()
    game.start() 
    
}

function draw() {

background="white"
if(playerCount==4) {
    game.update(1)
}

if(gameState==1) {
    game.play();
}
}
