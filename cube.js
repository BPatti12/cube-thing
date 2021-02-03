class Cube {
    constructor(x, y, z, size, color) {
        this.pos = createVector(x, y, z)
        this.angle = createVector(0,0,0)
        this.color = color
        this.minSize = size - size/2
        this.maxSize = size
        this.size = random(this.minSize, this.maxSize)
        this.distToMinSize = this.size-this.minSize;
        this.distToMaxSize = this.maxSize-this.size;
        this.sizeAnimDir = this.distToMaxSize < this.distToMinSize ? 1 : 0;
        this.animSpeed = 20;
    }

    display() {
        push()
        translate(this.pos.x, this.pos.y, this.pos.z)
        rotateX(this.angle.x)
        rotateY(this.angle.y)
        rotateZ(this.angle.z)
        strokeWeight(2)
        fill(this.color)
        box(this.size)
        pop()
    }

    update() {
        switch(this.sizeAnimDir) {
            case 0:
                this.size -= this.distToMinSize/this.animSpeed;
                this.distToMinSize = this.size-this.minSize;
                if(this.distToMinSize < 0.1) {
                    this.sizeAnimDir = 1
                }
            break;
            case 1: 
                this.size += this.distToMaxSize/this.animSpeed;
                this.distToMaxSize = this.maxSize-this.size;
                if(this.distToMaxSize < 0.1) {
                    this.sizeAnimDir = 0
                }
            break;
            default:
                throw new Error("Juu meni vissii paskaks")
        }
    }
}