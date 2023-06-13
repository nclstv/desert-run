class Layer {
    constructor(game, width, height, speedModifier, image) {
        this.game = game
        this.width = width
        this.height = height
        this.speedModifier = speedModifier
        this.image = image
        this.x = 0
        this.y = this.game.height - this.height
        this.hue = 360
        this.contrast = 100
        this.brightness = 100
        this.sepia = 0
    }
    update() {
        if (this.x <= -this.width) this.x = 0
        else this.x -= this.game.speed * this.speedModifier

        if(!this.game.isDay) this.dayToNight()
        else this.nightToDay()

    }
    draw(context) {
        context.filter = `hue-rotate(${this.hue}deg) contrast(${this.contrast}%) brightness(${this.brightness}%) sepia(${this.sepia}%)`
        context.drawImage(this.image, this.x, this.y, this.width, this.height)
        context.drawImage(this.image, this.x - 2 + this.width, this.y, this.width, this.height)
        context.filter = 'none'
    }
    dayToNight() {
        if(this.game.frames % 5 === 0) {
            if(this.hue > 200) this.hue -= 2
            if(this.contrast < 120) this.contrast += 0.5
            if(this.brightness > 70) this.brightness -= 0.5
            if(this.sepia < 20) this.sepia += 0.5
        }
    }
    nightToDay() {
        if(this.game.frames % 5 === 0) {
            if(this.hue < 360) this.hue += 2
            if(this.contrast > 100) this.contrast -= 0.5
            if(this.brightness < 100) this.brightness += 0.5
            if(this.sepia > 0) this.sepia -= 0.5
        }
    }
}

export class Background {
    constructor(game) {
        this.game = game
        this.width = 1920
        this.height = 1080
        this.image1 = document.getElementById('layer_01')
        this.image2 = document.getElementById('layer_02')
        this.image3 = document.getElementById('layer_03')
        // this.image4 = document.getElementById('layer_04')
        this.image5 = document.getElementById('layer_05')
        this.backgroundLayers = [
            new Layer(this.game, this.width, this.height, 0, this.image1),
            new Layer(this.game, this.width, this.height, 0.25, this.image2),
            new Layer(this.game, this.width, this.height, 0.5, this.image3),
            // new Layer(this.game, this.width, this.height, 0.75, this.image4),
            new Layer(this.game, this.width, this.height, 1, this.image5)
        ]
    }
    update() {
        this.backgroundLayers.forEach(layer => layer.update())
    }
    draw(context) {
        this.backgroundLayers.forEach(layer => layer.draw(context))
    }
}