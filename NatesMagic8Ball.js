fill(0, 0, 0);
ellipse(200, 200, 375, 375);
fill(60, 0, 255);
triangle(200, 104, 280, 280, 120, 280);
fill(255, 255, 255);
var answer = floor(random(1, 5));
var integer = round(answer);

if (answer < 2) {
    fill(255, 247, 0);
    text("NOT YET", 176, 200);
    text("IMPLEMENTED", 159, 229); 
}
else if (answer < 3){
    fill(228, 143, 247);
    text("GOOD LUCK", 165, 230);
    }
else if (answer < 4) {
     fill(247, 91, 91);
     text("NOT LIKELY", 170, 230);
 }
 else if (answer <= 5) {
     fill(3, 252, 86);
     text("GET SOME", 170, 215);
     text("SLEEP", 180, 240);
 }