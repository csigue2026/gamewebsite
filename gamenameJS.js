document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    let squares = Array.from(document.querySelectorAll('.grid div'))
    const ScoreDisplay = document.querySelector('#score')
    const StartBtn = document.querySelector('#start-button')
    const width = 10

    const STetromino = [
        [1, width+1, width+2+1, 2],
        [1, width+1, width+2, width+2+1],
        [width, width+1, width+2, width+2+1],
        [1, width, width+1, width+2+1]
    ]

    const zTetromino = [
        [0, width, width+1, width+2+1],
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
    const theTetrominoes = [STetromino, zTetromino, tTetromino, oTetromino, iTetromino, xTetromino, yTetromino, wTetromino, vTetromino, uTetromino, lTetromino, TTetromino, fTetromino]

    let currentPosition = 4
    let current = theTetrominoes[0][0]

    function control(a){
        if(a.keyCode === 65){
            Stayy()
        }
        else if(a.keyCode === 82){
            Spin()
        }
        else if(a.keyCode === 68){
            Gooo()
        }
        else if(a.keyCode === 83){
            moveDown()
        }
    }

    function draw() {
        current.forEach( index =>  {
            squares[currentPosition + index].classList.add('tetromino')
        })
    }

    function undraw() {
        current.forEach( index =>  {
            squares[currentPosition + index].classList.remove('tetromino')
        })
    }

    function freeze(){
        if(current.some(index => squares[currentPosition + index + width].classList.contains('tetromino'))){
            current.forEach(index => squares[currentPosition + index].classList.add('tetromino'));

            random = Math.floor(Math.random() * theTetrominoes.length);
            current = theTetrominoes[random][currentRotation];
            currentPosition = 4;
            draw()
        }

    }
    timerId = setInterval(moveDown, 1000)
    
    function moveDown() {
        undraw()
        currentPosition += width
        draw()
        freeze()
    }
    function Unfall(){
        if(current.some(index => squares[currentPosition + index + width].classList.contains('tite'))){
            current.forEach(index => squares[currentPosition + index].classList.add('tite'));

            random = Math.floor(Math.random() * theTetrominoes.length);
            current = theTetrominoes[random][currentRotation];
            currentPosition = 4;
            draw()
        }

    }
    function Stayy(){
        Undraw()
        const Border = current.some(index => (currentRotation + index) % width === 0)
        if(!Border){
            currentPosition -= 1
        }
        if(current.some(index => squares[currentPosition + index].classList.contains('tite'))){
        currentPosition += 1
    }

    }
    function Gooo(){
        Undraw()
        const Borders = current.some(index => (currentRotation + index) % width === 14)
        if(!Borders){
            currentPosition += 1
        }
        if(current.some(index => squares[currentPosition + index].classList.contains('tite'))){
        currentPosition -= 1
    }
    draw()
    }

    function Spin(){
        Undraw()
        currentRotation++;
        if(currentPosition == current.length){
            currentRotation == 0;
        }
        current = theTetrominoes[random][currentRotation]
        draw()
    }
    const dS = document.querySelectorAll('.mini-grid-div')
    const dw = 4
    let dI = 0
    
    draw()
}) 
