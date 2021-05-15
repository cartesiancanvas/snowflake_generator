let rButton;
let gButton;
let bButton;
let petalsButton;
let saveButton;
let clearButton;
let background_color_button;
let rSlider, gSlider, bSlider;
let pslider;
function setup() {
  createCanvas(800, 650);
  background(0);
  textSize(15);
  noStroke();
  saveButton=createButton('download');
  saveButton.mousePressed(downloadSnowflake);
  clearButton=createButton('clear');
  clearButton.mousePressed(clearCanvas);
  background_color_button=createButton('ChangeBackground');
  background_color_button.mousePressed(ChangeBackground);
  rSlider = createSlider(0, 255, 100);
  rSlider.position(1000, 60);
  gSlider = createSlider(0, 255, 0);
  gSlider.position(1000, 90);
  bSlider = createSlider(0, 255, 255);
  bSlider.position(1000, 120);
  pSlider = createSlider(6, 12, 6, 2);
  pSlider.position(1000, 190);
  rButton=createButton('Red');
  rButton.position(1170,60);
  bButton=createButton('Blue');
  bButton.position(1170,90);
  gButton=createButton('Green');
  gButton.position(1170,120);
  petalsButton=createButton('No of Petals(default=6)');
  petalsButton.position(1170,190);
}
function downloadSnowflake() {
  save('snowflake.png');
}
function clearCanvas() {
  background(0);
}
function ChangeBackground() {
  r = random(255);
  g = random(255);
  b = random(255);
  background(r, g, b);
}

function draw() {
  translate(width/2, height/2);
  if (mouseX>0 && mouseX<width && mouseY>0 && mouseY<height) {
    let mx=mouseX-width/2;
    let my=mouseY-height/2;
    let pmx=pmouseX-width/2;
    let pmy=pmouseY-height/2;
    const r = rSlider.value();
    const g = gSlider.value();
    const b = bSlider.value();
    let p = pSlider.value();

    if (mouseIsPressed) {
      let n=p;
      stroke(r, g, b, 200);
      for (let i=0; i<n; i++) {
        let distance=dist(mx, my, pmx, pmy);
        strokeWeight(map(distance, 0, 8, 8, 1.5));
        push();
        rotate(i*TWO_PI/n);
        line(mx, my, pmx, pmy);
        pop();
        push();
        rotate(i*TWO_PI/n);
        scale(1, -1);
        line(mx, my, pmx, pmy);
        pop();
      }
    }
  }
}
