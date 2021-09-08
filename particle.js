class Particle {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        
        this.v_x = 0;
        this.v_y = 0;
        this.cor = 0.91
        this.mu = -0.9
    }
    show() {
        fill(255);
        ellipse(this.x, this.y, this.r);
    }
    update() {
        let X = this.x - mouseX;
        let Y = this.y - mouseY;
        let x_coeff = map(mouseX, 0, W, -1, 1);
        let y_coeff = map(mouseY, 0, H, -1, 1);
        let V = createVector(x_coeff*(Y-X), y_coeff*(-X-Y));
        V.setMag(abs(Math.log(V.mag()+0.1))/10);
        this.v_x += V.x;
        this.v_y += V.y;
    }
    move() {
        this.x += this.v_x;
        this.y += this.v_y;
        if (this.x > W-this.r) {
            this.x = W-this.r;
            this.v_x *= this.cor * this.mu;
        } else if (this.x < this.r) {
            this.x = this.r;
            this.v_x *= this.cor * this.mu;
        }
        if (this.y > H-this.r) {
            this.y = H-this.r;
            this.v_y *= this.cor * this.mu;
        } else if (this.y < this.r) {
            this.y = this.r;
            this.v_y *= this.cor * this.mu;
        }
    }
    
}