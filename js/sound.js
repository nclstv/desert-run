export class Sound {
    constructor(game) {
        this.game = game

        this.volume = 0.2

        this.wind = new Audio('./assets/music/wind.mp3')
        this.wind.loop = true
        this.wind.volume = this.volume

        this.gameoverMusic = new Audio('./assets/music/gameover-music.mp3')
        this.gameoverMusic.loop = true
        this.gameoverMusic.volume = this.volume

        this.menuMusic = new Audio('./assets/music/menu-music.mp3')
        this.menuMusic.loop = true
        this.menuMusic.volume = this.volume

        this.jump = new Audio('./assets/music/jump.mp3')
        this.jump.volume = this.volume * 0.75

        this.die = new Audio('./assets/music/die.mp3')
        this.die.volume = this.volume * 0.75

        this.running = new Audio('./assets/music/running.mp3')
        this.running.volume = this.volume * 0.25

    }
    playCoin() {
        this.coin = new Audio('./assets/music/coin.mp3')
        this.coin.volume = this.volume * 0.25
        this.coin.play()
    }
}