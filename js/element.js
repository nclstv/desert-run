class Element {
    constructor(game) {
        this.game = game
    }
    draw(context) {
        context.drawImage(this.image, this.frameX * this.width, this.frameY * this.height, this.width, this.height, this.x, this.y, this.width, this.height)
    }
}

export class Coin extends Element {
    constructor(game) {
        super(game)
        this.image = document.getElementById('coin')
        this.id = 'COIN'
        this.width = 50
        this.height = 50
        this.x = this.game.width
        this.minY = this.game.height - this.game.groundMargin - (this.game.player.height)
        this.maxY = this.game.height
        this.y = Math.random() * (this.minY - this.maxY) + this.minY
        this.frameX = 0
        this.frameY = 0
        this.toDelete = false
    }
    update() {
        this.x -= this.game.speed
        if (this.x + this.width < 0) this.toDelete = true
    }
    collision(index) {
        this.game.bonuses.splice(index, 1)
        this.game.score += 100
        this.game.sound.playCoin()
    }
}

export class LuckyBlock extends Element {
    constructor(game) {
        super(game)
        this.image = document.getElementById('lucky')
        this.id = 'LUCKY'
        this.width = 50
        this.height = 50
        this.x = this.game.width
        this.y = this.game.height - this.game.groundMargin - (this.game.player.height * 3)
        this.frameX = 0
        this.frameY = 0
        this.toDelete = false
    }
    update() {
        this.x -= this.game.speed
        if (this.x + this.width < 0) this.toDelete = true
    }
    collision(index) {
        this.game.bonuses.splice(index, 1)

        if (Math.random() > 0.5) {
            this.game.sound.lucky.play()
            if (Math.random() < 0.05 && this.game.player.life < 3) this.life()
            else if (Math.random() < 0.25) this.X(10)
            else if (Math.random() < 0.5) this.X(5)
            else this.X(2)
        }
        else {
            this.game.sound.penality.play()
            if (Math.random() > 0.5 && this.game.isDay) this.birdAttack()
            else this.speedX2()
        }
    }
    X(ratio) {
        this.game.luckyID = 'X' + ratio
        this.game.scoreRatio = ratio

        setTimeout(() => {
            this.game.scoreRatio = 1
            this.game.luckyID = null
        }, 1000 * 10);
    }
    speedX2() {
        this.game.luckyID = 'SPEEDX2'
        this.game.speed = 20

        setTimeout(() => {
            this.game.speed = 10
            this.game.luckyID = null
        }, 1000 * 10);
    }
    life() {
        this.game.luckyID = 'LIFE'
        this.game.player.life += 1

        setTimeout(() => {
            this.game.luckyID = null
        }, 1000 * 3);
    }
    birdAttack() {
        this.game.luckyID = 'BIRDSATTACK'
        this.game.enemiesInterval = 20
        this.game.sound.birdsAttack.play()

        setTimeout(() => {
            this.game.sound.birdsAttack.pause()
            this.game.sound.birdsAttack.currentTime = 0
            this.game.enemiesInterval = 80
            this.game.luckyID = null
        }, 1000 * 10);
    }

}