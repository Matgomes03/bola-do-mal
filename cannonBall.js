class CannonBall{



    constructor(x, y){
        
        var options = {
            isStatic : true
        }
       
        this.body = Bodies.circle(x, y, 30, options)

        this.img = loadImage("assets/cannonball.png")
        World.add(world, this.body)
    }

    shoot(){
        var velocidade = p5.Vector.fromAngle( (cannon.angle - 28) * (3.14/180))
        
        velocidade.mult(0.5)

        Matter.Body.setStatic(this.body, false)
        Matter.Body.setVelocity(this.body, {x: velocidade.x * (180/3.14), y: velocidade.y * (180/3.14)})
    }

    display(){

        const pos = this.body.position

        push()
    
        imageMode(CENTER)

        image(this.img, pos.x, pos.y, 30, 30)
        
        pop()
    }

}

    


    
    