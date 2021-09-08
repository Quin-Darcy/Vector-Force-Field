// Display Constants
let W = window.innerWidth;
let H = window.innerHeight;
let RATIO = 0.1;

// Global Variables
let GRID = 0;
let vectors = [];
let P = 0;

function setup() {
    createCanvas(W, H);
    background(0);

    P = new Particle(W/3, H/3, 20);
    GRID = new Grid(W, H, RATIO);

    for (let i = 0; i < GRID.num_x_points; i++) {
        vectors[i] = [];
        for (let j = 0; j < GRID.num_y_points; j++) {
            vectors[i][j] = new Vec(i*GRID.w+GRID.pad_x, j*GRID.h+GRID.pad_y, 5)
        }
    }
}

function mouseClicked() {
    noLoop();
}

function draw() {
    background(0);
    P.show();
    P.update();
    P.move();
    for (let i = 0; i < vectors.length; i++) {
        for (let j = 0; j < vectors[0].length; j++) {
            vectors[i][j].show();
        }
    }
}

