//Task 4
const dummyPlay = (Card1_Level, Card1_Suit, Card2_Level, Card2_Suit, SuperSuit) => {
    let levels = [6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];

    for (let i = 0; i < levels.length; i++) {
        if (Card1_Level === levels[i]) {
            for(let j = 0; j < levels.length; j++) {
                if(Card2_Level === levels[j]) {
                    if (j > i && Card1_Suit === Card2_Suit) {
                        return true;
                    } else if ((j <= i && Card2_Suit === SuperSuit) && Card1_Suit !== SuperSuit) {
                        return true;
                    }
                    return false;
                }
            }
        }
    }
}
dummyPlay('J', 'Spades', 'K', 'Spades', 'Clubs'); // true
dummyPlay('J', 'Spades', 'K', 'Spades', 'Spades'); // true
dummyPlay('J', 'Spades', 'K', 'Hearts', 'Clubs'); // false
dummyPlay('J', 'Spades', 10, 'Clubs', 'Clubs'); // true
dummyPlay('J', 'Clubs', 10, 'Clubs', 'Clubs'); // false
dummyPlay('J', 'Spades', 10, 'Hearts', 'Clubs'); // false
dummyPlay('J', 'Diamonds', 'J', 'Hearts', 'Hearts'); // true

//Task 5
const numberOfNeighbors = (rowNumber, columnNumber) => {
    let field =
        [[0, 0, 0, 0, 1],
            [0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1],
            [0, 1, 1, 0, 0]];
    let neighbors = 0;
    for (let i = 0; i < field.length; i++) {
        if(rowNumber - 1 === i) {
            for (let j = 0; j < field[i].length; j++) {
                if(columnNumber - 1 === j) {
                    if (rowNumber === 1) {
                        if(columnNumber === 1) {
                            neighbors = field[i][j+1] + field[i+1][j] + field[i+1][j+1]
                        } else if (columnNumber === field[i].length) {
                            neighbors = field[i][j-1] + field[i+1][j-1] + field[i+1][j]
                        } else {
                            neighbors = field[i][j+1] + field[i][j-1] + field[i+1][j] + field[i+1][j-1] + field[i+1][j+1]
                        }
                    } else if (rowNumber === field.length) {
                        if(columnNumber === 1) {
                            neighbors = field[i][j+1] + field[i-1][j] + field[i-1][j+1]
                        } else if (columnNumber === field[i].length) {
                            neighbors = field[i][j-1] + field[i-1][j-1] + field[i-1][j]
                        } else {
                            neighbors = field[i][j+1] + field[i][j-1] + field[i-1][j] + field[i-1][j-1] + field[i-1][j+1]
                        }
                    } else if (columnNumber === 1 && (rowNumber >= 2 && rowNumber <= field.length - 1)) {
                        neighbors = field[i][j+1] + field[i-1][j] + field[i-1][j+1] + field[i+1][j] + field[i+1][j+1]
                    } else if (columnNumber === field[i].length && (rowNumber >= 2 && rowNumber <= field.length - 1)) {
                        neighbors = field[i-1][j] + field[i-1][j-1] + field[i][j-1] + field[i+1][j-1] + field[i+1][j]
                    } else {
                        neighbors = field[i][j-1] + field[i][j+1] + field[i-1][j] + field[i+1][j]
                            + field[i-1][j-1] + field[i-1][j+1] + field[i+1][j-1] + field[i+1][j+1]
                    }
                }
            }
        }
    }
    return neighbors;
}
numberOfNeighbors(1,1) //0
numberOfNeighbors(1,5) //1
numberOfNeighbors(5,1) //2
numberOfNeighbors(5,5) //1
numberOfNeighbors(1,2) //1
numberOfNeighbors(1,3) //1
numberOfNeighbors(1,4) //3
numberOfNeighbors(5,2) //3
numberOfNeighbors(5,3) //3
numberOfNeighbors(5,4) //3
numberOfNeighbors(2,1) //1
numberOfNeighbors(3,1) //2
numberOfNeighbors(4,1) //3
numberOfNeighbors(2,5) //2
numberOfNeighbors(3,5) //3
numberOfNeighbors(4,5) //1
numberOfNeighbors(2,3) // 2
numberOfNeighbors(4,2) // 4
numberOfNeighbors(4,3) //5