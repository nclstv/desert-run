class Layer {
    constructor(game, width, height, speedModifier, image) {
        this.game = game
        this.width = width
        this.height = height
        this.speedModifier = speedModifier
        this.image = image
        this.x = 0
        this.y = this.game.height - this.height
        this.filter = false
    }
    update(input) {
        if (this.x < -this.width) this.x = 0
        else this.x -= this.game.speed * this.speedModifier

    }
    draw(context) {
        context.drawImage(this.image, this.x, this.y, this.width, this.height)
        context.drawImage(this.image, this.x + this.width, this.y, this.width, this.height)
    }
}

export class Background {
    constructor(game) {
        this.game = game
        this.width = 1920
        this.height = 1080
        this.layerImage1 = document.getElementById('layer_01')
        this.layerImage2 = document.getElementById('layer_02')
        this.layerImage3 = document.getElementById('layer_03')
        this.layerImage4 = document.getElementById('layer_04')
        this.layerImage5 = document.getElementById('layer_05')
        this.backgroundLayers = [
            new Layer(this.game, this.width, this.height, 0, this.layerImage1),
            new Layer(this.game, this.width, this.height, 0.25, this.layerImage2),
            new Layer(this.game, this.width, this.height, 0.5, this.layerImage3),
            new Layer(this.game, this.width, this.height, 0.75, this.layerImage4),
            new Layer(this.game, this.width, this.height, 1, this.layerImage5)
        ]
    }
    update(input) {
        this.backgroundLayers.forEach(layer => layer.update(input))
    }
    draw(context) {
        this.backgroundLayers.forEach(layer => layer.draw(context))
    }
}