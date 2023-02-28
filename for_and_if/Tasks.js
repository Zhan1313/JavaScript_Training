//Task 1 using while
const sumOfEvenNumbersLessThan = (number) => {
    let result = 0
    let i = 2;
    while (i <= number) {
        result += i;
        i += 2;
    }
    return result;
}
//Task 1 using for
const sumOfEvenNumsLessThan = (number) => {
    let result = 0
    for (let i = 2; i <= number; i += 2) {
        result += i;
    }
    return result;
}
//Task 2
const onlyCapLetters = (str) => {
    let capLetters = '';
    for(let i = 0; i <= str.length - 1; i++) {
        if (str[i].toLowerCase() !== str[i]) {
            capLetters += str[i];
        }
    }
    return capLetters;
}
//Task 3
const onlyReverseNumbersFromString = (str) => {
    let reverseNumbersFromString = [];
    for(let i = str.length - 1; i >= 0; i--) {
        if(str[i].match(/[0-9]/) !== null) {
            reverseNumbersFromString.push(str[i]);
        }
    }
    return reverseNumbersFromString;
}
//Task 4
const dummyPlay = (Card1_Level, Card1_Suit, Card2_Level, Card2_Suit, SuperSuit) => {
    let levels = [6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
    let suits = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];
    if(Card2_Level > Card1_Level) {
        return true;
    }
    return false;

    for (let i = 0; i < levels.length; i++) {
        if (Card1_Level === levels[i] && Card2_Level !== levels[i]) {

        }
    }
}

//Task 6
const onlyRussianVowels = (str) => {
    let vowels = '';
    let russianVowels = ['а', 'о', 'у', 'е', 'ы', 'э', 'я', 'и', 'ю'];
    let string = str.toLowerCase();

    for(let i = 0; i < string.length; i++) {
        if(russianVowels.includes(string[i])) {
            vowels += str[i];
        }
    }
    return vowels;
}
//Task 7 не смог
const awesomeNumber = (num) => {
    //let str = num.toString();
    for(let i = 0; i < str.length; i++) {
        console.log(str)
    }
}
//Task 8
const swappedLetters = (str, num1, num2) => {
    if (num1 === num2 || num1 > str.length || num2 > str.length) {
        return str;
    }
    let resultString = '';
    for(let i = 0; i < str.length; i++) {
        if(i === num1) {
            resultString[i] = str[num2];
        } else if (i === num2) {
            resultString[i] = str[num1];
        }
        resultString[i] = str[i];
    }
    return resultString;
}

//Task 9
const numbersLessThan = (num) => {
    let numbers = [];
    for(let i = 3; i < num; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            if(i % 15 !== 0) {
                numbers.push(i);
            }
        }
    }
    console.log(numbers);
}