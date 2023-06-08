export class Player {
    constructor(game) {
        this.game = game
        this.image = document.getElementById('player')
        this.width = 109.2
        this.height = 119
        this.x = this.game.width / 5
        this.y = this.game.height - this.height - this.game.groundMargin
        this.vy = 0
        this.weight = 1
        this.speed = 0
        this.maxSpeed = 10
        this.crashed = false
        this.frameX = 1
        this.frameY = 0
        this.maxFrame = 4
    }
    update(input) {
        this.checkCollision()
        this.horizontalMovement(input)
        this.verticalMovement(input)
        this.borderCollision()
        this.spriteAnimation()        
    }
    draw(context) {
        context.drawImage(this.image, this.frameX * this.width, this.frameY * this.height, this.width, this.height, this.x, this.y, this.width, this.height)
    }
    horizontalMovement(input) {
        this.x += this.speed
        if (input.includes('ArrowRight') && !this.game.menu) this.speed = this.maxSpeed
        else if (input.includes('ArrowLeft') && !this.game.menu) this.speed = -this.maxSpeed
        else this.speed = 0
    }
    verticalMovement(input) {
        if (input.includes('ArrowUp') && this.onGround() && !this.game.menu) {
            this.vy -= 25
            this.maxFrame = 0
            this.game.sound.playJump()
        }
        this.y += this.vy
        if (!this.onGround()) {
            this.vy += this.weight
            this.game.sound.stopRunning()
        } else {
            this.vy = 0
            this.maxFrame = 4
            if(!this.crashed && !this.game.menu) this.game.sound.playRunning()
            else this.game.sound.stopRunning()
        }
    }
    borderCollision() {
        if (this.x < 0) this.x = 0
        if (this.x > this.game.width - this.width) this.x = this.game.width - this.width
    }
    spriteAnimation() {
        if (this.game.frames % 7 === 0) {
            if (this.frameX < this.maxFrame) this.frameX++
            else this.frameX = 1
        }
    }
    onGround() {
        return this.y >= this.game.height - this.height - this.game.groundMargin
    }
    checkCollision() {
        this.game.enemies.forEach(enemy => {
            if (
                enemy.x < this.x + this.width &&
                enemy.x + enemy.width > this.x &&
                enemy.y < this.y + this.height &&
                enemy.y + enemy.height > this.y
            ) {
                this.crashed = true
            }
        })
    }
}