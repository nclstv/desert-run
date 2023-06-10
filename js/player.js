export class Player {
    constructor(game) {
        this.game = game
        this.run = document.getElementById('player')
        this.jump = document.getElementById('jump')
        this.image = this.run
        this.width = 82
        this.height = 100
        this.x = this.game.width / 5
        this.y = this.game.height - this.height - this.game.groundMargin + 8
        this.vy = 0
        this.weight = 1
        this.speed = 0
        this.maxSpeed = 10
        this.frameX = 0
        this.frameY = 0
        this.maxFrame = 9
        this.crashed = false
        this.life = 3
        this.hurted = false
        this.display = true
    }
    update(input) {
        this.x += this.speed

        if (!this.game.menu) {

            //Horizontal movement
            if (input.includes('ArrowRight')) this.speed = this.maxSpeed
            else if (input.includes('ArrowLeft')) this.speed = -this.maxSpeed
            else this.speed = 0

            //Vertcial movement
            if (input.includes('ArrowUp') && this.onGround()) {
                this.width = 76
                this.frameX = 0
                this.image = this.jump
                this.vy -= 25
                this.game.sound.jump.play()
            }
            this.y += this.vy
            if (!this.onGround()) {
                this.vy += this.weight
                this.game.sound.running.pause()
            } else {
                this.width = 82
                this.image = this.run
                this.vy = 0
                if (!this.crashed) this.game.sound.running.play()
                else this.game.sound.running.pause()
            }
        }

        //Border collision
        if (this.x < 0) this.x = 0
        if (this.x > this.game.width - this.width) this.x = this.game.width - this.width

        //Sprite animation
        if (this.game.frames % 4 === 0) {
            if (this.frameX < this.maxFrame) this.frameX++
            else {
                if(this.image === this.run) this.frameX = 0
            }
        }

        //Invinsible flash
        if (this.hurted && this.game.frames % 2 === 0) this.display = !this.display

        //CheckCollision
        this.game.enemies.forEach((enemy, index) => {
            if (this.checkCollision(enemy) && !this.hurted) enemy.collision(index)
        })
        this.game.bonuses.forEach((bonus, index) => {
            if(this.checkCollision(bonus)) bonus.collision(index)
        })
    }
    draw(context) {
        if (this.display) context.drawImage(this.image, this.frameX * this.width, this.frameY * this.height, this.width, this.height, this.x, this.y, this.width, this.height)
    }
    onGround() {
        return this.y >= this.game.height - this.height - this.game.groundMargin
    }
    checkCollision(object) {
        return object.x < this.x + this.width &&
            object.x + object.width > this.x &&
            object.y < this.y + this.height &&
            object.y + object.height > this.y
    }
}