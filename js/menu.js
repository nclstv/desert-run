export class MenuUI {
    constructor(game) {
        this.game = game
        this.fontFamilly = 'Pixel'
        this.display = false
    }
    update() {
        if (this.game.frames % 40 === 0) this.display = !this.display
    }
    draw(context) {
        context.textAlign = 'center'

        context.fillStyle = 'black'
        context.font = 50 + 'px ' + this.fontFamilly
        context.fillText('DESERT RUN', this.game.width / 2, this.game.height / 2 - 150)

        context.fillStyle = 'rgba(0,0,0,0.5)'
        context.font = 20 + 'px ' + this.fontFamilly
        context.fillText('USE ARROW CONTROLS TO MOVE AND JUMP', this.game.width / 2, this.game.height / 2 - 100)

        context.fillStyle = 'rgba(0,100,0,0.5)'
        context.font = 20 + 'px ' + this.fontFamilly
        context.fillText('USE SPACE BAR TO RUN FASTER AND GET X2 BONUS', this.game.width / 2, this.game.height / 2 - 50)

        context.fillStyle = 'rgba(255,0,0,0.7)'
        context.font = 20 + 'px ' + this.fontFamilly
        context.fillText('AVOID CACTUS AND BIRD', this.game.width / 2, this.game.height / 2)

        context.fillStyle = 'rgba(0,0,0,1)'
        context.font = 20 + 'px ' + this.fontFamilly
        if (this.display) context.fillText('PRESS ENTER TO START', this.game.width / 2, this.game.height / 2 + 50)

        context.textAlign = 'left'
    }
}