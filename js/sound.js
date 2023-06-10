export class Sound {
    constructor(game) {
        this.game = game

        this.volume = 0.2

        this.wind = new Audio('./assets/sound/wind.mp3')
        this.wind.loop = true
        this.wind.volume = this.volume

        this.gameoverMusic = new Audio('./assets/sound/gameover-music.mp3')
        this.gameoverMusic.loop = true
        this.gameoverMusic.volume = this.volume

        this.menuMusic = new Audio('./assets/sound/menu-music.mp3')
        this.menuMusic.loop = true
        this.menuMusic.volume = this.volume

        this.jump = new Audio('./assets/sound/jump.mp3')
        this.jump.volume = this.volume * 0.75

        this.hurt = new Audio('./assets/sound/hurt.mp3')
        this.hurt.volume = this.volume * 0.75

        this.die = new Audio('./assets/sound/die.mp3')
        this.die.volume = this.volume * 0.75

        this.running = new Audio('./assets/sound/running.mp3')
        this.running.volume = this.volume * 0.25

        this.birdsAttack = new Audio('./assets/sound/bird-attack.mp3')
        this.birdsAttack.volume = this.volume * 2

        this.lucky = new Audio('./assets/sound/lucky.mp3')
        this.lucky.volume = this.volume

        this.penality = new Audio('./assets/sound/penality.mp3')
        this.penality.volume = this.volume * 0.25

    }
    playCoin() {
        this.coin = new Audio('./assets/sound/coin.mp3')
        this.coin.volume = this.volume * 0.25
        this.coin.play()
    }
}