export class Sound {
    constructor(game) {
        this.game = game
        this.backgroundMusic = new Audio('./assets/music/background.mp3')
        this.jump = new Audio('./assets/music/jump.mp3')
        this.gameover = new Audio('./assets/music/gameover.mp3')
        this.gameoverMusic = new Audio('./assets/music/gameover-music.mp3')
        this.running = new Audio('./assets/music/running.mp3')
        this.menuMusic = new Audio('./assets/music/menu-music.mp3')
    }
    playMenuMusic() {
        this.menuMusic.loop = true
        this.menuMusic.play()
        this.menuMusic.volume = 0.2

    }
    playBackgroundMusic() {
        this.backgroundMusic.loop = true
        this.backgroundMusic.play()
        this.backgroundMusic.volume = 0.3
    }
    stopBackgroundMusic() {
        this.backgroundMusic.pause()
    }
    playJump() {
        this.jump.play()
        this.jump.volume = 0.1
    }
    playGameOver() {
        this.gameover.play()
        this.gameover.volume = 0.1
        this.gameoverMusic.loop = true
        this.gameoverMusic.play()
        this.gameoverMusic.volume = 0.1
    }
    stopGameOver() {
        this.gameoverMusic.pause()
    }
    playRunning() {
        this.running.loop = true
        this.running.play()
        this.running.volume = 0.05
    }
    stopRunning() {
        this.running.pause()
    }
}