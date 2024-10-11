function binaryToDecimal(binary) {
    let decimal = 0;
    const binaryArray = binary.split('').reverse();
    for (let i = 0; i < binaryArray.length; i++) {
        decimal += binaryArray[i] * Math.pow(2, i);
    }
    return decimal;
}

function decimalToBinary(decimal) {
    let binary = '';
    let number = decimal;
    while (number > 0) {
        binary = (number % 2) + binary;
        number = Math.floor(number / 2);
    }
    return binary === '' ? '0' : binary;
}

function decimalToHex(decimal) {
    const hexChars = '0123456789ABCDEF';
    let hex = '';
    let number = decimal;
    while (number > 0) {
        hex = hexChars[number % 16] + hex;
        number = Math.floor(number / 16);
    }
    return hex === '' ? '0' : hex;
}

function decimalToOctal(decimal) {
    let octal = '';
    let number = decimal;
    while (number > 0) {
        octal = (number % 8) + octal;
        number = Math.floor(number / 8);
    }
    return octal === '' ? '0' : octal;
}

function hexToDecimal(hex) {
    const hexChars = '0123456789ABCDEF';
    let decimal = 0;
    const hexArray = hex.toUpperCase().split('').reverse();
    for (let i = 0; i < hexArray.length; i++) {
        decimal += hexChars.indexOf(hexArray[i]) * Math.pow(16, i);
    }
    return decimal;
}

function octalToDecimal(octal) {
    let decimal = 0;
    const octalArray = octal.split('').reverse();
    for (let i = 0; i < octalArray.length; i++) {
        decimal += octalArray[i] * Math.pow(8, i);
    }
    return decimal;
}

function convertFromDecimal() {
    const decimal = parseIntCustom(document.getElementById('decimalInput').value);
    const convertTo = document.getElementById('decimalSelect').value;

    let result = '';
    if (convertTo === 'binario') {
        result = decimalToBinary(decimal);
    } else if (convertTo === 'hexadecimal') {
        result = decimalToHex(decimal);
    } else if (convertTo === 'octal') {
        result = decimalToOctal(decimal);
    }

    document.getElementById('result').textContent = `Resultado: ${result}`;
}

function convertFromBinary() {
    const binary = document.getElementById('binaryInput').value;
    const convertTo = document.getElementById('binarySelect').value;

    const decimal = binaryToDecimal(binary);
    let result = '';

    if (convertTo === 'decimal') {
        result = decimal;
    } else if (convertTo === 'hexadecimal') {
        result = decimalToHex(decimal);
    } else if (convertTo === 'octal') {
        result = decimalToOctal(decimal);
    }

    document.getElementById('result').textContent = `Resultado: ${result}`;
}

function convertFromHex() {
    const hex = document.getElementById('hexInput').value;
    const convertTo = document.getElementById('hexSelect').value;

    const decimal = hexToDecimal(hex);
    let result = '';

    if (convertTo === 'decimal') {
        result = decimal;
    } else if (convertTo === 'binario') {
        result = decimalToBinary(decimal);
    } else if (convertTo === 'octal') {
        result = decimalToOctal(decimal);
    }

    document.getElementById('result').textContent = `Resultado: ${result}`;
}

function convertFromOctal() {
    const octal = document.getElementById('octalInput').value;
    const convertTo = document.getElementById('octalSelect').value;

    const decimal = octalToDecimal(octal);
    let result = '';

    if (convertTo === 'decimal') {
        result = decimal;
    } else if (convertTo === 'binario') {
        result = decimalToBinary(decimal);
    } else if (convertTo === 'hexadecimal') {
        result = decimalToHex(decimal);
    }

    document.getElementById('result').textContent = `Resultado: ${result}`;
}

// Função customizada para garantir que a conversão de string para decimal é feita manualmente
function parseIntCustom(value) {
    let decimal = 0;
    const valueArray = value.split('').reverse();
    for (let i = 0; i < valueArray.length; i++) {
        decimal += valueArray[i] * Math.pow(10, i);
    }
    return decimal;
}
