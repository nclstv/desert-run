export class UI {
    constructor(game) {
        this.game = game
        this.fontSize = 30
        this.fontFamilly = 'Pixel'
        this.color = 'black'
    }
    draw(context) {
        context.font = this.fontSize + 'px ' + this.fontFamilly
        context.fillStyle = this.color
        context.fillText(this.game.scoreText, 20, 50)
    }
}