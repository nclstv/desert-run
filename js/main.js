import { Player } from "./player.js"
import { Input } from "./input.js"
import { Bird, Cactus } from "./enemy.js"
import { UI } from "./UI.js"
import { Background } from "./background.js"
import { Sound } from "./sound.js"
import { Gameover } from "./gameover.js"
import { MenuUI } from "./menu.js"
import { CollisionInterval } from "./collisionInterval.js"
import { Coin } from "./element.js"

const loaded = () => {

    let font = new FontFace(
        "Pixel",
        "url(https://fonts.gstatic.com/s/pressstart2p/v15/e3t4euO8T-267oIAQAu6jDQyK3nVivM.woff2)"
    );

    font.load().then((font) => {

        document.fonts.add(font);

        const canvas = document.getElementById('game')
        const ctx = canvas.getContext('2d')
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        class Game {
            constructor(width, height) {
                this.width = width
                this.height = height
                this.menu = true
                this.speed = 5
                this.frames = 0
                this.score = 0
                this.highScore = 0
                this.enemies = []
                this.bonuses = []
                this.enemiesInterval = 80
                this.bonusesInterval = 50
                this.groundMargin = 170
                this.player = new Player(this)
                this.background = new Background(this)
                this.input = new Input(this)
                this.UI = new UI(this)
                this.sound = new Sound(this)
                this.gameover = new Gameover(this)
                this.menuUI = new MenuUI(this)
                this.collisionInterval = new CollisionInterval(this)
            }
            start() {
                animate()
                this.sound.menuMusic.play()
                canvas.style.display = 'block'
            }
            update() {
                this.frames += 1

                if (this.player.crashed) {
                    this.gameover.update()
                    if (this.input.keys.includes("Enter")) this.reset()
                }
                else {
                    this.background.update()
                    this.player.update(this.input.keys)
                }

                if (this.menu) {
                    this.menuUI.update()

                    if (this.input.keys.includes("Enter")) {
                        this.menu = false
                        this.sound.menuMusic.pause()
                        this.sound.wind.play()
                    }
                }

                if (!this.player.crashed && !this.menu) {

                    if (this.input.keys.includes(' ')) this.speed = 15
                    else this.speed = 10

                    this.UI.update()

                    this.addEnemies()
                    this.addBonuses()

                    this.enemies = this.enemies.filter(enemy => !enemy.toDelete)
                    this.bonuses = this.bonuses.filter(bonus => !bonus.toDelete)
                    this.enemies.forEach((enemy) => enemy.update())
                    this.bonuses.forEach((bonus) => bonus.update())
                }
            }

            draw(context) {
                this.background.draw(context)
                this.bonuses.forEach(bonus => { bonus.draw(context) })
                this.enemies.forEach(enemy => { enemy.draw(context) })
                this.player.draw(context)
                this.UI.draw(context)

                if (this.player.crashed) this.gameover.draw(context)
                if (this.menu) this.menuUI.draw(context)
            }

            addEnemies() {
                if (this.frames % this.enemiesInterval === 0) {
                    this.enemies.push(new Bird(this))
                }
                if (this.frames % this.enemiesInterval === 0 && Math.random() > 0.5) {
                    this.enemies.push(new Cactus(this))
                }
            }
            addBonuses() {
                if (this.frames % this.bonusesInterval === 0 && Math.random() > 0.5) {
                    this.bonuses.push(new Coin(this))
                }
            }
            reset() {
                if (this.score > this.highScore) this.highScore = this.score
                this.frames = 0
                this.score = 0
                this.groundMargin = 170
                this.enemies = []
                this.bonuses = []
                this.sound.gameoverMusic.pause()
                this.sound.wind.play()

                delete this.background
                delete this.player;
                delete this.input
                delete this.UI
                delete this.sound
                delete this.gameover
                delete this.collisionInterval
                this.player = new Player(this)
                this.background = new Background(this)
                this.input = new Input(this)
                this.UI = new UI(this)
                this.sound = new Sound(this)
                this.gameover = new Gameover(this)
                this.collisionInterval = new CollisionInterval(this)
            }
        }

        const game = new Game(canvas.width, canvas.height)

        let fps = 60;
        let now;
        let then = Date.now();
        let interval = 1000 / fps;
        let delta;

        function animate() {
            now = Date.now();
            delta = now - then

            if (delta > interval) {
                then = now - (delta % interval)
                ctx.clearRect(0, 0, canvas.width, canvas.height)
                game.update()
                game.draw(ctx)
            }

            requestAnimationFrame(animate)
        }

        const startButton = document.getElementById('start')
        startButton.addEventListener('click', () => {
            game.start()
            startButton.style.display = 'none'
        })

    })
}

window.addEventListener('load', loaded)

