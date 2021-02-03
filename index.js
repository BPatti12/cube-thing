
let main = document.getElementById("main").getBoundingClientRect()
let canvas
let arr

function setup() {
    canvas = createCanvas(main.width, main.height, WEBGL);
    canvas.parent("main");
    arr = createCubes(80, 20, 3, 3, 3);
}

function draw() {
    background(255);
    rotateX(frameCount * 0.01)
    rotateY(frameCount * 0.01)
    arr.forEach(cube => {
        cube.display()
        cube.update()
    })
}

function windowResized() {
    main = document.getElementById("main").getBoundingClientRect()
    resizeCanvas(main.width, main.height)
}

function createCubes(size, padding, w, h, d) {
    let colors = ["#f50e0a", "#0aaff5", "#f5ab0a"]
    let cubes = [];
    let totalW = size*w + padding*(w-1);
    let totalH = size*h + padding*(h-1);
    let totalD = size*d + padding*(d-1);
    let startX = 0 - totalW/2 + size/2
    let startY = 0 - totalH/2 + size/2
    let startZ = 0 - totalD/2 + size/2
    for(let x=0; x<w; x++) {
        for(let y=0; y<h; y++) {
            for(let z=0; z<d; z++) {
                let pos = {
                    x: startX + size*x + (x!=0 && padding*x),
                    y: startY + size*y + (y!=0 && padding*y),
                    z: startZ + size*z + (z!=0 && padding*z)
                }
                cubes.push(new Cube(pos.x, pos.y, pos.z, size, colors[int(random(0, colors.length))]))
            }
        }
    }
    return cubes;
}