// let boardArr = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
//[2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 11, 12, 13, 14, 15]

const randomPosition = () => Math.floor(Math.random() * 16);
const randomNumber2or4 = () => Math.floor(Math.random() * 2) === 0 ? 2 : 4;

const extractRows = (copyBoard) => {
    let row1 = [copyBoard[0], copyBoard[1], copyBoard[2], copyBoard[3]],
        row2 = [copyBoard[4], copyBoard[5], copyBoard[6], copyBoard[7]],
        row3 = [copyBoard[8], copyBoard[9], copyBoard[10], copyBoard[11]],
        row4 = [copyBoard[12], copyBoard[13], copyBoard[14], copyBoard[15]];
    return [row1, row2, row3, row4]
}

const extractCols = (copyBoard) => {
    let col1 = [copyBoard[0], copyBoard[4], copyBoard[8], copyBoard[12]],
        col2 = [copyBoard[1], copyBoard[5], copyBoard[9], copyBoard[13]],
        col3 = [copyBoard[2], copyBoard[6], copyBoard[10], copyBoard[14]],
        col4 = [copyBoard[3], copyBoard[7], copyBoard[11], copyBoard[15]];
    return [col1, col2, col3, col4]
}

export const addAtRandomPosition = (board) => {
    let randomPos = randomPosition()
    while (board[randomPos] !== "")
        randomPos = randomPosition()
    board[randomPos] = randomNumber2or4()
    return board
}

export const getStartGameBoard = (board) => {
    addAtRandomPosition(board)
    addAtRandomPosition(board)
    return board
}

const makeBoardAfterMove = (rows, cols, keyCode) => {
    let boardArr = []
    if (keyCode == '38' || keyCode == '40') {//up - down = cols
        for (let i = 0; i < cols.length; i++) {
            let col = cols[i]
            for (let j = 0; j < col.length; j++) {
                boardArr.push(cols[j][i])
            }
        }
    }
    else if (keyCode == '39' || keyCode == '37') //right - left = rows
        for (let i = 0; i < rows.length; i++)
            boardArr.push(...rows[i])
    console.log("Rows: " + rows + "\nCols: " + cols + "\nBoarArr: " + boardArr)
    return boardArr
}


export const keyPressed = (e, board) => {
    let moved = []
    let cols = extractCols(board), rows = extractRows(board)

    if (e.keyCode == '38' || e.keyCode == '40' || e.keyCode == '37' || e.keyCode == '39') {
        if (e.keyCode == '38') { //up
            for (let i = 0; i < cols.length; i++) {
                let col = cols[i];
                for (let j = 0; j < col.length; j++) {
                    let index = j - 1
                    if (col[j] != "") {
                        let movedCounter = 0
                        while (col[index] == "" && index >= 0) {
                            col[index] = col[index + 1]
                            col[index + 1] = ""
                            movedCounter++
                            index--
                        }
                        if (movedCounter != 0) {
                            moved.push({ from: j * 4 + i, steps: movedCounter, direction: "up" })
                        }
                    }
                }
            }
        }
        else if (e.keyCode == '40') { //down
            for (let i = 0; i < cols.length; i++) {
                let col = cols[i];
                for (let j = col.length - 1; j >= 0; j--) {
                    let index = j
                    if (col[j] != "") {
                        let movedCounter = 0
                        while (col[index + 1] == "" && index <= col.length - 1) {
                            col[index + 1] = col[index]
                            col[index] = ""
                            movedCounter++
                            index++
                        }
                        if (movedCounter != 0) {
                            moved.push({ from: j * 4 + i, steps: movedCounter, direction: "down" })
                        }
                    }
                }
            }
        }
        else if (e.keyCode == '37') { //left
            for (let i = 0; i < rows.length; i++) {
                let row = rows[i];
                for (let j = 0; j <= row.length - 1; j++) {
                    let index = j
                    if (row[j] != "") {
                        let movedCounter = 0
                        while (row[index - 1] == "" && index - 1 >= 0) {
                            row[index - 1] = row[index]
                            row[index] = ""
                            movedCounter++
                            index--
                        }
                        if (movedCounter != 0) {
                            moved.push({ from: i * 4 + j, steps: movedCounter, direction: "left" })
                        }
                    }
                }
            }
        }
        else if (e.keyCode == '39') { //right
            for (let i = 0; i < rows.length; i++) {
                let row = rows[i];
                for (let j = row.length - 1; j >= 0; j--) {
                    let index = j
                    if (row[j] != "") {
                        let movedCounter = 0
                        while (row[index + 1] == "" && index <= row.length - 1) {
                            row[index + 1] = row[index]
                            row[index] = ""
                            movedCounter++
                            index++
                        }
                        if (movedCounter != 0) {
                            moved.push({ from: i * 4 + j, steps: movedCounter, direction: "right" })
                        }
                    }
                }
            }
        }
        let boardAfterMove = makeBoardAfterMove(rows, cols, e.keyCode)
        return { moved, board, boardAfterMove }
    }

    return undefined
}