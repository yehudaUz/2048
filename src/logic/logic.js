let boardArr = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
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

const addAtRandomPosition = () => {
    let randomPos = randomPosition()
    while (boardArr[randomPos] !== "")
        randomPos = randomPosition()
    boardArr[randomPos] = randomNumber2or4()
}

export const getStartGameBoard = () => {
    addAtRandomPosition()
    addAtRandomPosition()
    return boardArr
}

export const keyPressed = (e) => {
    // e = e || window.event;
    //  console.log(rows())
    let moved = []
    let copyBoard = boardArr
    let cols = extractCols(copyBoard), rows = extractRows(copyBoard)
    if (e.keyCode == '38') { //up
        for (let i = 0; i < cols.length; i++) {
            let col = cols[i];
            for (let j = 0; j < col.length; j++) {
                let index = j - 1
                if (col[j] != "") {
                    // let movedLast = -1
                    let movedCounter = 0
                    while (col[index] == "" && index >= 0) {
                        col[index] = col[index + 1]
                        col[index + 1] = ""
                        // movedLast = index
                        movedCounter++
                        index--
                    }
                    if (movedCounter != 0) {//(movedLast != -1) {
                        // moved.push({ from: j * 4 + i, to: movedLast * 4 + i })
                        moved.push({ from: j * 4 + i, steps: movedCounter, direction: "up" })
                    }
                }
            }
        }
        return { moved, copyBoard }
    }
    else if (e.keyCode == '40') { //down
        for (let i = 0; i < cols.length; i++) {
            let col = cols[i];
            for (let j = col.length - 1; j >= 0; j--) {
                let index = j
                if (col[j] != "") {
                    let movedCounter = 0
                    while (col[index+1] == "" && index <= col.length - 1) {
                        col[index+1] = col[index]
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
        return { moved, copyBoard }
    }
    else if (e.keyCode == '37') { //left

    }
    else if (e.keyCode == '39') { //right

    }
    else
        return {}
}