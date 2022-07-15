import EventEmitter from "../EventEmitter"


export default class Sizes extends EventEmitter {
    constructor() {
        super()
        // initial setup
        this.width = window.innerWidth //change for not fullscreen canvas
        this.height = window.innerHeight
        this.pixelRatio = Math.min(window.devicePixelRatio, 2)

        //Resize
        window.addEventListener('resize', () => {
            this.width = window.innerWidth
            this.height = window.innerHeight
            this.pixelRatio = Math.min(window.devicePixelRatio, 2)

            this.trigger('resize')
        })
        
    }
}