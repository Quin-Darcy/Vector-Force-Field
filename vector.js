class Vec {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
    }
    show() {
        colorMode(HSB, Math.sqrt(Math.pow(W, 2)+Math.pow(H, 2))/2, 1, 1);
        let X = this.x - mouseX;
        let Y = this.y - mouseY;
        let x_coeff = map(mouseX, 0, W, -1, 1);
        let y_coeff = map(mouseY, 0, H, -1, 1);
        let V = createVector(x_coeff*(Y-X), y_coeff*(-X-Y));
        stroke(V.mag(), 1, 1);
        V.setMag(20);
        line(this.x, this.y, V.x+this.x, V.y+this.y);
        fill(0, 0, 255);
        ellipse(this.x+V.x, this.y+V.y, 4);
    }
}