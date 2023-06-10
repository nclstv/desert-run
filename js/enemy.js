class Enemy {
    constructor(game) {
        this.game = game
    }
    update() {
        this.movement()
        this.spriteAnimation()
    }
    draw(context) {
        context.drawImage(this.image, this.frameX * this.width, this.frameY * this.height, this.width, this.height, this.x, this.y, this.width, this.height)
    }
    collision(index) {
        if (this.game.player.life <= 1) {
            this.game.player.crashed = true
            this.game.player.life = 0
        }
        else {
            this.game.player.life -= 1
            this.game.player.hurted = true
            this.game.sound.hurt.play()

            setTimeout(() => {
                this.game.player.hurted = false
                this.game.player.display = true
            }, 3000);

            this.game.enemies.splice(index, 1)
        }
    }
}

export class Bird extends Enemy {
    constructor(game) {
        super(game)
        this.image = document.getElementById('missile')
        this.width = 103.75
        this.height = 70
        this.x = this.game.width
        this.minY = this.game.player.height * 3
        this.maxY = this.game.height - this.game.groundMargin - (this.game.player.height)
        this.y = Math.random() * (this.maxY - this.minY + 1) + this.minY
        this.toDelete = false
        this.minSpeed = 3
        this.maxSpeed = 10
        this.speed = Math.random() * (this.maxSpeed - this.minSpeed + 1) + this.minSpeed
        this.angle = 0
        this.va = Math.random() * 0.1 + 0.1
        this.frameX = 0
        this.frameY = 0
        this.maxFrame = 3
    }
    movement() {
        this.x -= this.game.speed + this.speed
        if (this.x + this.width < 0) this.toDelete = true
        this.angle += this.va
        this.y += Math.sin(this.angle)
    }
    spriteAnimation() {
        if (this.game.frames % 5 === 0) {
            if (this.frameX < this.maxFrame) this.frameX++
            else this.frameX = 0
        }
    }
}

export class Cactus extends Enemy {
    constructor(game) {
        super(game)
        this.image = document.getElementById('cactus')
        this.width = 82
        this.height = 128
        this.x = this.game.width
        this.y = this.game.height - this.game.groundMargin - this.height
        this.frameX = 0
        this.frameY = 0
        this.toDelete = false
    }
    movement() {
        this.x -= this.game.speed
        if (this.x + this.width < 0) this.toDelete = true
    }
    spriteAnimation() {

    }
}

