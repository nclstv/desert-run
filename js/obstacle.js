export class Obstacle {
    constructor(game) {
        this.game = game
        this.image = document.getElementById('missile')
        this.width = 103.75
        this.height = 70
        this.x = this.game.width
        this.y = Math.random() * (this.game.height - this.game.height - this.height - this.game.groundMargin + 1) + this.game.height - this.height - this.game.groundMargin
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
    update() {
        this.x -= this.game.speed + this.speed
        if (this.x + this.width < 0) this.toDelete = true
        this.angle += this.va
        this.y += Math.cos(this.angle)

        if(this.game.frames % 5 === 0 ) {
            if (this.frameX < this.maxFrame) this.frameX++
            else this.frameX = 0
        }
    }
    draw(context) {
        // context.strokeRect(this.x, this.y, this.width, this.height)
        context.drawImage(this.image, this.frameX * this.width, this.frameY * this.height, this.width, this.height, this.x, this.y, this.width, this.height)
    }
}
