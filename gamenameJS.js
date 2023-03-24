document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.tetrisscreen')
    let squares = Array.from(document.querySelectorAll('.sc'))
    const ScoreDisplay = document.querySelector('#score')
    let nextRandom = 0
    const width = 10

    const zTetromino = [
        [0, width, width+1, width*2+1],
        [width+1, width+2, width*2, width*2+1],
        [0, width, width+1, width*2+1],
        [width+1, width+2, width*1, width*2+1]
    ] 

    const tTetromino = [
        [1, width, width+1, width+2],
        [width, width+1, width+2, width+2+1],
        [1, width+1, width+2+1, width+2],
        [width, width+2, width+2+1, width+2+2]
    ] 

    const oTetromino = [
        [0, 1, width, width+1,],
        [0, 1, width, width+1,],
        [0, 1, width, width+1,],
        [0, 1, width, width+1,]
    ] 

    const iTetromino = [
        [1, width+1, width+2+1, width+3+1],
        [width, width+1, width+2, width+3],
        [1, width+1, width+2+1, width+3+1],
        [width, width+1, width+2, width+3],
    ] 
    const xTetromino = [
        [1, width, width+1, width+2,width*2+1],
        [1, width, width+1, width+2,width*2+1],
        [1, width, width+1, width+2,width*2+1],
        [1, width, width+1, width+2,width*2+1]
    ]
    const yTetromino = [
        [1, width, width+1, width*2+1, width*3+1],
        [2, width, width+1, width+2, width+3],
        [1, width+1, width*2+1, width*2+2, width*3+1],
        [width, width+1, width+2, width+3, width*2+1]
    ]
    const wTetromino = [
        [2, width+1, width+2, width*2, width*2+1],
        [0, width, width+1, width*2, width*2+1, width*2+2],
        [0, 1, 2, width, width+1, width*2],
        [0, 1, 2, width+1, width+2, width*2+2]

    ]
    const vTetromino = [
        [2, width+2, width*2, width*2+1, width*2+2],
        [0, width, width*2, width*2+1, width*2+2],
        [0, 1, 2, width, width*2],
        [0, 1, 2, width+2, width*2+2]
    ]
    const uTetromino = [
        [0, 2, width, width+1, width+2],
        [0, 1, width, width*2, width*2+1],
        [0, 1, 2, width, width+2],
        [0, 1, width+1, width*2, width*2+1]
    ]
    const fTetromino = [
        [1, 2, width, width+1, width*2+1],
        [1, width, width+1, width+2, width*2+2],
        [1, width+1, width+2, width*2, width*2+1],
        [0, width, width+1, width+2, width*2+1]
    ]
    const TTetromino = [
        [0, 1, 2, width+1, width*2+1],
        [2, width, width+1, width+2, width*2+2],
        [1, width+1, width*2, width*2+1, width*2+2],
        [1, width, width+1, width+2, width*2]
    ]
    const lTetromino = [
        [1, width+1, width*2+1, width*2+2],
        [width, width+1, width+2, width*2],
        [0, 1, width+1, width*2+1],
        [2, width, width+1, width+2]
    ]
    const theTetrominoes = [vTetromino, tTetromino, zTetromino, oTetromino, iTetromino, xTetromino, yTetromino, wTetromino, uTetromino, lTetromino, TTetromino, fTetromino]


    let currentPosition = 4
    let random = Math.floor(Math.random()*theTetrominoes.length)
    let currentRotation = 0
    let current = theTetrominoes[random][0]
    console.log(random)


    timerId = setInterval(moveDown, 1000)

    function draw() {       
        current.forEach(index => {
            squares[currentPosition + index].classList.add('tetromino') 
            squares[currentPosition + index].style.backgroundColor = 'blue'

        })
    }

    function undraw() {
        current.forEach(index => {
            squares[currentPosition + index].classList.remove('tetromino')
            squares[currentPosition + index].style.backgroundColor = ''
        })
    }



    function freeze() {
        if(current.some(index => squares[currentPosition + index + width].classList.contains('limit'))) {
            current.forEach(index => squares[currentPosition + index].classList.add('limit'))
            random = Math.floor(Math.random() * theTetrominoes.length)
            current = theTetrominoes[random][0]
            currentPosition = 4
            draw()
        }
    }
    function control(e){
        if(e.keyCode == 65){
            Stayy()
        }
        else if(e.keyCode == 82){
            Spin()
        }
        else if(e.keyCode == 68){
            Gooo()
        }
        else if(e.keyCode == 83){
            moveDown()
        }
    }
    function moveDown() {
        undraw()
        currentPosition += width
        draw()
        freeze()
    }

    function Stayy() {
        undraw()
        const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0)

        if(!isAtLeftEdge) currentPosition -=1

        if(current.some(index => squares[currentPosition + index].classList.contains('classs'))) {
            currentPosition +=1
        }

        draw()
    }

    function Gooo() {
        undraw()
        const isAtRightEdge = current.some(index => (currentPosition + index) % width === width -1)
    
        if(!isAtRightEdge) currentPosition +=1
        if(current.some(index => squares[currentPosition + index].classList.contains('classs'))) {
            currentPosition -=1
        }
    
        draw()
    }
    function Spin()   {
        undraw()
        currentRotation++
        if(currentRotation === current.length) {
            currentRotation = 0
        }
        current = theTetrominoes[random][currentRotation]
        draw()
    }
    const dS = document.querySelectorAll('mini-grid div')
    const dW = 4
    let dI = 0

    const upNextTetrominoes = [
        [0, width, width+1, width*2+1],
        [1, width, width+1, width+2], 
        [0, 1, width, width+1,],
        [1, width+1, width+2+1, width+3+1],  
        [1, width, width+1, width+2,width*2+1],
        [1, width, width+1, width*2+1, width*3+1],
        [2, width+1, width+2, width*2, width*2+1],
        [2, width+2, width*2, width*2+1, width*2+2],
        [0, 2, width, width+1, width+2],
        [1, 2, width, width+1, width*2+1],
        [1, width+1, width*2+1, width*2+2]
    ]
}) 
