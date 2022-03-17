class Cannon{

    constructor(x, y, w, h, a){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.a = a
        this.cannonImg = loadImage("assets/canon.png")
        this.cannonBaseImg = loadImage("assets/cannonBase.png")
    }

    show(){
        push()
        translate(this.x, this.y)
        rotate(this.a)
        imageMode(CENTER);
        image(this.cannonImg, 0, 0, this.w, this.h)
        pop()
        image(this.cannonBaseImg, 70, 20, 200, 200)
  }
}