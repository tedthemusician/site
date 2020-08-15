import { randInt } from '@/utils.js'

export default function({ vcx: cx, width: cWidth, height: cHeight }) {
    const fontSize = Math.round(cWidth * 0.06875)
    cx.font = `bold italic ${fontSize}px Times New Roman`
    console.log('cx.font:', cx.font)

    const initialPadding = 10
    const initialX = randInt(initialPadding, cWidth - initialPadding)
    const initialY = randInt(initialPadding, cHeight - initialPadding)
    const colors = [
        'red',
        'orange',
        'yellow',
        'green',
        'cyan',
        'blue',
        'purple',
        'magenta',
    ]
    const initialColorIndex = randInt(0, colors.length)
    const initialColor = colors[initialColorIndex]

    const shape = {
        color: initialColor,
        dx: 1,
        dy: 1,
        x: initialX,
        y: initialY,
        width: cWidth * 0.18125,
        height: cWidth * 0.0875,
        period: 1000 / (cWidth * 0.3),
        textHOffset: Math.round(cWidth * 0.02),
        textVOffset: Math.round(cWidth * 0.06625),
        cornerThreshold: cWidth * 0.045,

        avoidCornerIfNeeded() {
            // const absVelOffset = (Math.random() * 0.06) + 0.06
            const targetX = this.dx > 0 ? cWidth - this.width : 0
            const targetY = this.dy > 0 ? cHeight - this.height : 0
            const xDistance = Math.abs(targetX - this.x)
            const yDistance = Math.abs(targetY - this.y)
            // Arbitrary threshold, should be sufficient
            const difference = Math.abs(xDistance - yDistance)

            // Arbitrary threshold
            if (difference > this.cornerThreshold) {
                return false
            }

            if (xDistance > yDistance) {
                this.dx *= 0.92
            } else {
                this.dy *= 0.92
            }
            return true
        },

        move(dt) {
            const delta = dt / this.period
            let newX = this.x + (this.dx * delta)
            let newY = this.y + (this.dy * delta)
            if (newX + this.width > cWidth) {
                newX = cWidth - this.width
                this.dx = -this.dx
                this.handleEdgeCollision()
            } else if (newX < 0) {
                newX = 0
                this.dx = -this.dx
                this.handleEdgeCollision()
            }

            if (newY + this.height > cHeight) {
                newY = cHeight - this.height
                this.dy = -this.dy
                this.handleEdgeCollision()
            } else if (newY < 0) {
                newY = 0
                this.dy = -this.dy
                this.handleEdgeCollision()
            }

            this.x = newX
            this.y = newY
        },

        handleEdgeCollision() {
            if (!this.avoidCornerIfNeeded()) {
                this.dx = Math.sign(this.dx)
                this.dy = Math.sign(this.dy)
            }
            
            const distinctColors = colors.filter(color => color !== this.color)
            const newColorIndex = randInt(0, distinctColors.length)
            this.color = distinctColors[newColorIndex]
        },

        draw() {
            const halfWidth = this.width / 2
            const halfHeight = this.height / 2
            cx.fillStyle = this.color
            cx.beginPath()
            cx.ellipse(
                Math.floor(this.x + halfWidth),
                Math.floor(this.y + halfHeight),
                halfWidth,
                halfHeight,
                0,
                0,
                2 * Math.PI,
            )
            cx.closePath()
            cx.fill()
            cx.fillStyle = 'black'
            cx.fillText('DVD', this.x + this.textHOffset, this.y + this.textVOffset)
        },

        update(dt) {
            this.move(dt)
            this.draw()
        },
    }

    let lastTimestamp = performance.now()
    function render(ts) {
        cx.fillStyle = 'black'
        cx.fillRect(0, 0, cWidth, cHeight)
        const dt = ts - lastTimestamp
        shape.update(dt)
        lastTimestamp = ts
        cx.fillStyle = 'pink'
        window.requestAnimationFrame(render)
    }

    window.requestAnimationFrame(render)
}