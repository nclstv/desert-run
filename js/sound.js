export class Sound {
    constructor(game) {
        this.game = game
        this.playBackgroundMusic()
    }
    playBackgroundMusic() {
        this.backgroundMusic = new Audio('./assets/music/background.mp3')
        this.backgroundMusic.play()
        this.backgroundMusic.volume = 0.2
        
    }
    stopBackgroundMusic() {
        this.backgroundMusic.pause()
    }
    playJump() {
        this.jump = new Audio('./assets/music/jump.mp3')
        this.jump.play()
        this.jump.volume = 0.05
    }
}