export class MenuUI {
    constructor(game) {
        this.game = game
        this.fontFamilly = 'Pixel'
        this.display = false
    }
    update() {
        if (this.game.frames % 30 === 0) this.display = !this.display
    }
    draw(context) {
        context.textAlign = 'center'

        context.fillStyle = 'black'
        context.font = 50 + 'px ' + this.fontFamilly
        context.fillText('DESERT RUN', this.game.width / 2, this.game.height / 2 - 25)

        context.fillStyle = 'rgba(0,0,0,0.5)'
        context.font = 20 + 'px ' + this.fontFamilly
        if (this.display) context.fillText('PRESS ENTER TO START', this.game.width / 2, this.game.height / 2 + 25)

        context.textAlign = 'left'
    }
}