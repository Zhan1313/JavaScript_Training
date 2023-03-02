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
sumOfEvenNumbersLessThan(55); // 756
sumOfEvenNumbersLessThan(15); // 56
sumOfEvenNumbersLessThan(12); // 42

//Task 1 using for
const sumOfEvenNumsLessThan = (number) => {
    let result = 0
    for (let i = 2; i <= number; i += 2) {
        result += i;
    }
    return result;
}
sumOfEvenNumsLessThan(60); // 930
sumOfEvenNumsLessThan(20); // 110
sumOfEvenNumsLessThan(30); // 240

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
onlyCapLetters('TraimIng'); // 'TI'
onlyCapLetters('CaLiForNia'); // 'CLFN'
onlyCapLetters('sAnFranSiskO'); // 'AFSO'
onlyCapLetters('BabuShKa13, Gde Ty Tut12!'); // 'BSKGTT'

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
onlyReverseNumbersFromString('Teddy13Beddy44');// ['4', '4', '3', '1']
onlyReverseNumbersFromString('Today13Tommorow56');// ['6', '5', '3', '1']
onlyReverseNumbersFromString('Today78Tommorow67');// ['7', '6', '8', '7']


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
onlyRussianVowels('Today мы придем'); // 'ыие'
onlyRussianVowels('Today надо go'); // 'ао'

//Task 7
const awesomeNumber = (num) => {
    let sumOfOwnDigits = 0;
    let str = num.toString();
    for(let i = 0; i < str.length; i++) {
        sumOfOwnDigits += Number(str[i])
    }
    if (sumOfOwnDigits === num) {
        return true;
    }
    return false;
}
awesomeNumber(88)// false
awesomeNumber(13)// false
awesomeNumber(24)// false

//Task 8
const swappedLetters = (str, num1, num2) => {
    if (num1 === num2 || num1 > str.length || num2 > str.length) {
        return str;
    }
    let resultString = '';
    for(let i = 0; i < str.length; i++) {
        if(i === num1) {
            resultString += str[num2];
        } else if (i === num2) {
            resultString += str[num1];
        } else resultString += str[i];
    }
    return resultString;
}
swappedLetters('strange', 2, 4) // 'stnarge'
swappedLetters('Florida', 0, 3) // 'rloFida'
swappedLetters('Boston', 2, 5) // 'Bontos'
swappedLetters('Boston', 2, 15) // 'Boston'

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
numbersLessThan(543); // []
numbersLessThan(2453); // []
numbersLessThan(134567); // []

//Task 10
const digitsOfNUmber = (num) => {
    let digits = [];
    if(num < 10 && num >= 0) {
        digits.push(num);
        return digits;
    }
    let lastDigit = num % 10;
    let num0 = num - lastDigit;
    let numWithoutLastDigit = Math.round(num0 / 10);
    digits.push(lastDigit);
    let str = numWithoutLastDigit.toString();

    if (str.length === 1) {
        digits.unshift(numWithoutLastDigit);
        return digits;
    }
    for (let i = str.length - 1; i > 0; i--) {
        lastDigit = numWithoutLastDigit % 10;
        num0 = numWithoutLastDigit - lastDigit;
        numWithoutLastDigit = Math.round(num0 / 10);
        digits.unshift(lastDigit);
    }
    digits.unshift(numWithoutLastDigit);
    return digits;
}
digitsOfNUmber(1)// [1]
digitsOfNUmber(2345) // [2, 3, 4, 5]
digitsOfNUmber(25) // [2, 5]
digitsOfNUmber(0)// [0]

//Task 11
const equalityOfSumProductOfNumber = (num) => {
    let digits = digitsOfNUmber(num);
    let sumOfDigits = 0;
    let productOfDigits = 1;
    for(let i = 0; i < digits.length; i++) {
        sumOfDigits += digits[i];
        productOfDigits *= digits[i];
    }
    if (sumOfDigits === productOfDigits) {
        return true;
    }
    return false;
}
equalityOfSumProductOfNumber(0) // true
equalityOfSumProductOfNumber(1) // true
equalityOfSumProductOfNumber(43) // false
equalityOfSumProductOfNumber(22211) // true
equalityOfSumProductOfNumber(123) // true
equalityOfSumProductOfNumber(5467) // false