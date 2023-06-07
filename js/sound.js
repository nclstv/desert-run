export class Sound {
    constructor(game) {
        this.game = game
        this.backgroundMusic = new Audio('./assets/music/background.mp3')
        this.jump = new Audio('./assets/music/jump.mp3')
        this.gameover = new Audio('./assets/music/gameover.mp3')
        this.gameoverMusic = new Audio('./assets/music/gameover-music.mp3')
    }
    playBackgroundMusic() {
        this.backgroundMusic.loop = true
        this.backgroundMusic.play()
        this.backgroundMusic.volume = 0.2
    }
    stopBackgroundMusic() {
        this.backgroundMusic.pause()
    }
    playJump() {
        this.jump.play()
        this.jump.volume = 0.05
    }
    playGameOver() {
        this.gameover.play()
        this.gameover.volume = 0.2
        this.gameoverMusic.loop = true
        setTimeout(() => { this.gameoverMusic.play() }, 500);
        this.gameoverMusic.volume = 0.2
    }
    stopGameOver() {
        this.gameoverMusic.pause()
    }
}