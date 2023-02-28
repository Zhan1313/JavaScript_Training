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
//Task 3 need to review
const onlyReverseNumbers = (str) => {
    let reverseNumbers = [];
    for(let i = str.length - 1, j = 0; i >= 0; i--, j++) {
        if(str[i].match(/0-9/)) {
            reverseNumbers[j] = str[i];
        }
    }
    return reverseNumbers;
}
//Task 6 need to review, can use includes
const onlyRussianVowels = (str) => {
    let vowels = '';
    let russianVowels = 'аоуеыэяиюАОУЕЫЭЯИЮ'
    for(let i = 0; i < str.length; i++) {
        if(str[i].match(/аоуеыэяию/)) {
            vowels += str[i];
        }
    }

    return vowels;
}
//Task 7 to review
const awesomeNumber = (num) => {
    let str = num.toString();
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
            i = num2;
        }
        
    }
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