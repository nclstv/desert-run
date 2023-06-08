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