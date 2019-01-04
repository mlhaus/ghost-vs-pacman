// Constants for main ghost body
var HEAD_RADIUS = 35;
var BODY_WIDTH = HEAD_RADIUS * 2;
var BODY_HEIGHT = 60;
var NUM_FEET = 3;
var FOOT_RADIUS = (BODY_WIDTH) / (NUM_FEET * 2); 

// Constants for eyes
var PUPIL_RADIUS = 4;
var PUPIL_LEFT_OFFSET = 8;
var PUPIL_RIGHT_OFFSET = 20;
var EYE_RADIUS = 10;
var EYE_OFFSET = 14;

/* Write a comment here about your overall program */
function createGhosts(){
	var centerX = getWidth()/2;
    var centerY = getHeight()/2;
    drawGhost(centerX, centerY, Color.red);
    drawGhost(100,100, Color.green);
    drawGhost(300, 200, Color.black);
    drawGhost(40, 300, Color.orange);
    drawGhost(300, 50, Color.yellow);
}

function drawGhost(centerX, centerY, color){
    drawBody(centerX, centerY, color);
    drawFeet(centerX, centerY, color);
    drawEyes(centerX, centerY);
}

function drawBody(x, y, c){
    var face = new Circle(HEAD_RADIUS);
    face.setPosition(x, y);
    face.setColor(c);
    add(face);
    
    var bottomHalf = new Rectangle(BODY_WIDTH, BODY_HEIGHT);
    bottomHalf.setPosition(x - HEAD_RADIUS, y);
    bottomHalf.setColor(c);
    add(bottomHalf);
}

function drawFeet(x, y, c){
    for(var i = 0; i < NUM_FEET; i++){
        var foot = new Circle(FOOT_RADIUS);
        foot.setPosition(
            x - HEAD_RADIUS + FOOT_RADIUS + (i * FOOT_RADIUS * 2), 
            y + BODY_HEIGHT
        );
        foot.setColor(c);
        add(foot);
    }
}

function drawEyes(x, y){
    var leftEye = new Circle(EYE_RADIUS);
    leftEye.setPosition(x - EYE_OFFSET, y);
    leftEye.setColor(Color.white);
    add(leftEye);
    
    var rightEye = new Circle(EYE_RADIUS);
    rightEye.setPosition(x + EYE_OFFSET, y);
    rightEye.setColor(Color.white);
    add(rightEye);
    
    var leftPupil = new Circle(PUPIL_RADIUS);
    leftPupil.setPosition(x - PUPIL_LEFT_OFFSET, y);
    leftPupil.setColor(Color.blue);
    add(leftPupil);
    
    var rightPupil = new Circle(PUPIL_RADIUS);
    rightPupil.setPosition(x + PUPIL_RIGHT_OFFSET, y);
    rightPupil.setColor(Color.blue);
    add(rightPupil);
}