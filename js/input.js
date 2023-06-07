export class Input {
    constructor(game) {
        this.game = game
        this.keys = []
        window.addEventListener('keydown', (event) => { this.keydown(event) })
        window.addEventListener('keyup', (event) => { this.keyup(event) })
    }
    keydown(event) {
        if (
            (event.key === "ArrowLeft" ||
                event.key === "ArrowRight" ||
                event.key === "ArrowUp" ||
                event.key === " "
            ) &&
            !this.keys.includes(event.key)) {
            this.keys.push(event.key)
        }
    }
    keyup(event) {
        if (
            (
                event.key === "ArrowLeft" ||
                event.key === "ArrowRight" ||
                event.key === "ArrowUp" ||
                event.key === " "
            ) &&
            this.keys.includes(event.key)) {
            this.keys.splice(this.keys.indexOf(event.key), 1)
        }
    }
}