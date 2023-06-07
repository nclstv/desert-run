import { Player } from "./player.js"
import { Input } from "./input.js"
import { Obstacle } from "./obstacle.js"
import { UI } from "./UI.js"
import { Background } from "./background.js"
import { Sound } from "./audio.js"

const loaded = () => {

    const canvas = document.getElementById('game')
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    class Game {
        constructor(width, height) {
            this.width = width
            this.height = height
            this.speed = 5
            this.frames = 0
            this.score = 0
            this.groundMargin = 160
            this.obstacles = []
            this.obstaclesInterval = 60
            this.player = new Player(this)
            this.background = new Background(this)
            this.input = new Input(this)
            this.UI = new UI(this)
            this.sound = new Sound(this)
        }
        update() {
            this.background.update(this.input.keys)

            this.scoreIncrement()
            this.frames += 1

            this.player.update(this.input.keys)
            if (this.frames % this.obstaclesInterval === 0) this.addObstacle()

            this.obstacles.forEach((obstacle, index) => {
                if (obstacle.toDelete) this.obstacles.splice(index, 1)
                obstacle.update()
            })
        }
        draw(context) {
            this.background.draw(context)
            this.player.draw(context)
            this.obstacles.forEach(obstacle => { obstacle.draw(context) })
            this.UI.draw(context)
        }
        addObstacle() {
            this.obstacles.push(new Obstacle(this))
        }
        scoreIncrement() {
            if (this.frames % 10 === 0) this.score += Math.floor(this.speed)
            this.scoreText = this.score.toString().padStart(6, '0')
        }
    }

    const game = new Game(canvas.width, canvas.height)

    let requestAnimation

    const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        game.update()
        game.draw(ctx)
        requestAnimation = requestAnimationFrame(animate)
    }

    animate()

    let checkCollionInterval = setInterval(() => {
        if (game.player.crashed) {
            cancelAnimationFrame(requestAnimation)
            clearInterval(checkCollionInterval)
            game.sound.pause()
        }
    }, 20);
}





window.addEventListener('load', loaded)