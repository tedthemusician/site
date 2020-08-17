const cWidth = 800
const cHeight = 600

import { randInt } from '@/utils.js'

function play({ vcx: cx }) {
    cx.fillStyle = 'black'
    cx.fillRect(0, 0, cWidth, cHeight)

    cx.lineWidth = 1

    const TrailModel = {
        color: 'white',

        vertices: [
            {x: 10,  y: 10},
            {x: 100, y: 10},
            {x: 100, y: 100},
            {x: 10,  y: 100},
        ],

        draw() {
            cx.strokeStyle = this.color
            cx.beginPath()
            cx.moveTo(this.vertices[3].x, this.vertices[3].y)
            this.vertices.forEach(vertex => {
                cx.lineTo(vertex.x, vertex.y)
                cx.stroke()
            })
            cx.closePath()
        },

        init(vertices, color) {
            this.vertices = vertices
            this.color = color
        },
    }

    const Quadr = {
        trails: [],
        vels: [],
        color: 'white',

        update() {
            const newVertices = []
            const newVels = []

            const [ leader ] = this.trails
            leader.vertices.forEach((vertex, index) => {
                const { x, y } = vertex
                const { dx, dy } = this.vels[index]

                let newX = x + dx
                let newDx = dx
                if (newX < 0) {
                    newX = 0
                    newDx = -dx
                } else if (newX > cWidth) {
                    newX = cWidth
                    newDx = -dx
                }

                let newY = y + dy
                let newDy = dy
                if (newY < 0) {
                    newY = 0
                    newDy = -dy
                } else if (newY > cHeight) {
                    newY = cHeight
                    newDy = -dy
                }
                newVertices[index] = {x: newX, y: newY}
                newVels[index] = {dx: newDx, dy: newDy}
            })
            this.trails.push(this.trails.shift())
            const [ newLeader ] = this.trails
            newLeader.vertices = newVertices
            this.vels = newVels
        },
        
        draw() {
            this.trails.forEach(trail => trail.draw())
        },
        
        init(color) {
            this.color = color
            this.trails = []
            this.vels = []
            const numTrails = 16
            const vertices = []
            for (let i = 0; i < 4; i++) {
                vertices.push({
                    x: Math.random() * cWidth,
                    y: Math.random() * cHeight,
                })
                this.vels.push({
                    dx: ((Math.random() * 6) + 1) * (Math.random() > 0.5 ? 1 : -1),
                    dy: ((Math.random() * 6) + 1) * (Math.random() > 0.5 ? 1 : -1),
                })
            }
            for (let i = 0; i < numTrails; i++) {
                this.trails[i] = Object.create(TrailModel)
                const trail = this.trails[i]
                trail.init(vertices, this.color)
            }
        },
    }

    const colors = [
        'red',
        'yellow',
        'orange',
        'green',
        'turquoise',
        'blue',
        'purple',
    ]

    const color1 = colors[randInt(0, colors.length - 1)]
    const color2 = colors.filter(c => c !== color1)[randInt(0, colors.length - 2)]

    const q1 = Object.create(Quadr)
    q1.init(color1)
    const q2 = Object.create(Quadr)
    q2.init(color2)

    function render() {
        cx.fillStyle = 'black'
        cx.fillRect(0, 0, cWidth, cHeight)

        q1.draw()
        q1.update()
        q2.draw()
        q2.update()

        window.requestAnimationFrame(render)
    }

    render()
}

export default { width: cWidth, height: cHeight, play }