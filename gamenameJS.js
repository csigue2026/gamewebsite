
document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('grid')
    let squares = Array.from(document.querySelectorAll('grid div'))
    const ScoreDisplay = document.querySelector('#score')
    const playbtn = document.querySelector('#start-button')
    const width = 15

    const STetromino = [
        [1, width+1, width*2+1, 2],
        [1, width+1, width+2, width*2+1],
        [width, width+1, width+2, width*2+1],
        [1, width, width+1, width*2+1]
    ]

    const zTetromino = [
        [0, width, width+1, width*2+1],
        [width+1, width+2, width*2, width*2+1],
        [0, width, width+1, width*2+1],
        [width+1, width+2, width*1, width*2+1]
    ] 

    const tTetromino = [
        [1, width, width+1, width+2],
        [width, width+1, width+2, width*2+1],
        [1, width+1, width*2+1, width+2],
        [width, width+2, width*2+1, width*2+2]
    ] 

    const oTetromino = [
        [0, 1, width, width+1,],
        [0, 1, width, width+1,],
        [0, 1, width, width+1,],
        [0, 1, width, width+1,]
    ] 

    const iTetromino = [
        [1, width+1, width* 2+1, width*3+1],
        [width, width+1, width+2, width+3],
        [1, width+1, width*2+1, width*3+1],
        [width, width+1, width+2, width+3]
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
    const theTetrominoes = [STetromino, zTetromino, tTetromino, oTetromino, iTetromino, xTetromino, yTetromino, vTetromino, uTetromino, lTetromino, TTetromino, fTetromino, wTetromino]

    let currentPosition = 4
    let currentRotation = 0

    let random = Math.floor(Math.random()*theTetrominoes.length)
    let current = theTetrominoes[random][currentRotation]

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
            iAmSpeed()
        }
    }
var START = 0;
function startGameButton(){
    START++;
}
function pauseEnd(){
    START--;
}
if(START == 1){
    function draw() {
        current.forEach( index =>  {
            squares[currentPosition + index].classList.add('tetromino')
        })
    }
    function Undraw() {
        current.forEach( index =>  {
            squares[currentPosition + index].classList.remove('tetromino')
        })
    }
    var difficultyLevel = 1
    var mode = 0
    function difficulty(){
        if(difficultyLevel == 1){
            timerId = setInterval(iAmSpeed, 1000)}
            else if(difficultyLevel == 2){
                timerId = setInterval(iAmSpeed, 420)}
            else if(difficultyLevel == 3){
                    timerId = setInterval(iAmSpeed, 10)}
            else if(difficultyLevel == 4){
                timerId = setInterval(iAmSpeed, 2000)}
        if(mode == 0){
            difficultyLevel++;
            mode++;
        }
        else if(mode == 1){
            difficultyLevel++;
            mode++;
        }
        else if(mode == 2){
            difficultyLevel++;
            mode++;
        }
        else if(mode == 3){
            difficultyLevel--;
            difficultyLevel--;
            difficultyLevel--;
            mode--;
            mode--;
            mode--;
        }

    }
    

    function iAmSpeed(){
        Undraw() 
        currentPosition += width;
        draw()
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
    const dS = Document.querySelectorAll('.mini-grid-div')
    const dw = 4
    let dI = 0
}
})
