let boardArr = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
//[2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 11, 12, 13, 14, 15]

const randomPosition = () => Math.floor(Math.random() * 16);
const randomNumber2or4 = () => Math.floor(Math.random() * 2) === 0 ? 2 : 4;

const rows = () => {
    let row1 = [boardArr[0], boardArr[1], boardArr[2], boardArr[3]],
        row2 = [boardArr[4], boardArr[5], boardArr[6], boardArr[7]],
        row3 = [boardArr[8], boardArr[9], boardArr[10], boardArr[11]],
        row4 = [boardArr[12], boardArr[13], boardArr[14], boardArr[15]];
    return [row1, row2, row3, row4]
}
const cols = () => {
    let col1 = [boardArr[0], boardArr[4], boardArr[8], boardArr[12]],
        col2 = [boardArr[1], boardArr[5], boardArr[9], boardArr[13]],
        col3 = [boardArr[2], boardArr[6], boardArr[10], boardArr[14]],
        col4 = [boardArr[3], boardArr[7], boardArr[11], boardArr[15]];
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
    let cols = cols(), rows = rows()
    if (e.keyCode == '38') { //up
        for (let i = 0; i < cols.length; i++) {
            let col = cols[i];
            for (let j = 0; j < col.length; j++) {
                let index = j - 1
                if (col[j] != "")
                    while (col[index] == "" && index > 0) {
                        col[index] = col[index + 1]
                        index--;
                    }
            }
        }
        let arr =[]
        for (let i=0; i<cols.length; i++) {
            let col = cols[i]
            for (let j=0; j<cols.length; j++) {
                arr.push(col[j])
            }
        }
    }
    else if (e.keyCode == '40') { //down

    }
    else if (e.keyCode == '37') { //left

    }
    else if (e.keyCode == '39') { //right

    }
}