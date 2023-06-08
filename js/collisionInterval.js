export class CollisionInterval {
    constructor(game) {
        this.game = game
        this.checkInterval = setInterval(() => { this.check() }, 50)
    }
    check() {
        if (this.game.player.crashed) {
            this.game.sound.die.play()
            this.game.sound.wind.pause()
            this.game.sound.gameoverMusic.play()

            clearInterval(this.checkInterval)
        }
    }
}