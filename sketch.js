var ball;
var database;
var position;
var ballPosition;

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red"; 
    ballPosition = database.ref('Ball/Position');
    ballPosition.on("value",readPosition,showError);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(X,Y){
    database.ref('Ball/Position').set({
    'X':position.x + X,
    'Y':position.y + Y,
    });
    
}
function readPosition(data){
    position = data.val();
    ball.x = position.X;
    ball.y = position.Y;
}
function showError(){
    console.log("error");
}
    