export class CollisionInterval {
    constructor(game) {
        this.game = game
        this.checkInterval = setInterval(() => { this.check() }, 50)
    }
    check() {
        if (this.game.player.crashed) {

            this.game.sound.stopBackgroundMusic()
            this.game.sound.playGameOver()

            clearInterval(this.checkInterval)
        }
    }
}