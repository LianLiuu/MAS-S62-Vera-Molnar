function setup() {
  createCanvas(500, 500);
  background('grey');
  noLoop();
  strokeWeight(0.8);
}

function draw() {
  background('white');
  noFill()
  //draw squares of decreasing size
  drawSquare(40,5,79,5,0);
  drawSquare(40,5,71,9,4);
  drawSquare(40,5,63,13,8);
  drawSquare(40,5,55,17,12);
  drawSquare(40,5,47,21,16);
  drawSquare(40,5,39,25,20);
  drawSquare(40,5,31,29,24);
  drawSquare(40,5,23,33,28);
  drawSquare(40,5,15,37,32);
  drawSquare(40,5,7,41,36);
}

// matrix that reference Monar's orginal grid
let matrix = [[3,2,0,1,1],[2,1,0,0,0],[1,0,0,0,0],[1,0,0,0,1],[2,0,1,1,0]]

function drawSquare (initialXY, numShapes, squareSize, margin,smaller){
    //drawing 5 * 5 grid of squares of given square size
    for (let i = 0; i< numShapes; i++){
    for (let j = 0; j < numShapes; j++){
      //call replicated matrix to deteremine if lines need to be erased
      if (matrix[i][j] != 0){
        let x =  random (20);
        let y = random (15);
        // randomized function to determine which line to erase
        if (x < y){
          matrix[i][j] -= 1;
        }else{
          stroke('black');
          square(initialXY + margin*(j+1) + smaller*j +squareSize*j, initialXY + margin*(i+1) + smaller*i +squareSize*i, squareSize);
        }
      }else{
        stroke('black');
        square(initialXY + margin*(j+1) + smaller*j +squareSize*j, initialXY + margin*(i+1) + smaller*i +squareSize*i, squareSize);
      }
    }
  }
}