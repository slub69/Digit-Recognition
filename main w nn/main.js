const canvas = document.getElementById("world")
canvas.height = window.innerHeight
canvas.width = window.innerWidth
console.log(canvas)

const ctx = canvas.getContext("2d")



let world = [[]]

let worldWidth, worldHeight

let tileWidth, tileHeight = 16


let prevX = null
let prevY = null

ctx.lineWidth = 5

let draw = false

ctx.strokeStyle = "#000"

let clearButton = document.querySelector('.clear')
clearButton.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})
let i = 0
let analysisBtn = document.querySelector(".analysis")
analysisBtn.addEventListener("click", () =>{
    let data = canvas.toDataURL("image/png")
    let a = document.createElement("a")
    a.href = data
    i++
    a.download = `digit${i}.png`
    a.click()
})

window.addEventListener("mousedown", (e) => draw = true)
window.addEventListener("mouseup", (e) => draw = false)

window.addEventListener("mousemove", (e) => {
    console.log("drawing...")
    if(prevX == null || prevY == null || !draw){
        prevX = e.clientX
        prevY = e.clientY
        return
    }

    let currentX = e.clientX
    let currentY = e.clientY

    ctx.beginPath()
    ctx.moveTo(prevX, prevY)
    ctx.lineTo(currentX, currentY)
    ctx.stroke()

    prevX = currentX
    prevY = currentY
})




/* 
function onload(){
    console.log("Starting program...\n")

    canvas = document.getElementById("world")
    canvas.width = worldWidth * tileWidth
    canvas.height = worldHeight * tileHeight
    canvas.addEventListener('click', canvasClcik, false)

    if(!canvas){
        console.log("Error loading canvas")
    }
    ctx = canvas.getContext("2d")
    if(!ctx){
        console.log("Error connecting canvas")
    }
    referenceSheet = new Image()
    referenceSheet.src = 'reference_images.png'
    referenceSheet
}
function createWorld(){
    console.log("loading world...\n")
    for(x=0;x<worldWidth;x++){//for loop to loop through the size of the world and generate all of it
        world[x] = []//set each element of world to be empty (creates an empty world)
        for(y=0;y<worldHeight;y++){//same thing as for world width but now for height so the world is 2d
            world[x][y] = 0 // set the array inside the array to be empty
            }
        }
    generate()
}
function canvasClick(e){
    let x,y
    if(e.pageX != undefined && e.pageY != undefined){//check if html page coords are real and then find them
        x = e.pageX
        y = e.pageY
    }else{ //if html coords are undefined scroll to where they are defined
        x = e.clientX + document.body.scrollLeft +
        document.documentElement.scrollLeft

        y = e.clientY + document.body.scrollTop +
        document.documentElement.scrollTop
    }
    x -= canvas.offsetLeft //make the coords relative to the canvas 
    y -= canvas.offsetTop

    let cell = //find the coords in the canvas that we clicked
    [
        Math.floor(x/tileWidth),
        Math.floor(y/tileHeight)
    ]
    console.log('Tile clicked was ' + cell[0]+' , '+cell[1])
}
function generate(){
    if(!referenceSheetLoaded){
        return
    }
    ctx.fillStyle = "#000000"
    ctx.fillRect(0,0,canvas.width,canvas.height)
    console.log(world)

    for(x = 0;x<worldWidth;x++){
        for(y=0;y<worldHeight;y++){
            ctx.drawImage()
        }
    } 
}
 */
