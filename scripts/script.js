function handleSubmit() {
    if(!input.value) return;

    output.innerHTML = '';

    let decNumber = 0;
    let binNumber = input.value.toString();
    let hasDiff = false;

    verifyNum(binNumber);
    
    function verifyNum (num) {
        for (i = 0; i <= binNumber.length-1; i++) {
            if (binNumber[i] != 1 && binNumber[i] != 0) {
                return hasDiff = true;
            }
        }
        return hasDiff;
    }

    if (hasDiff === true) {
        return (resultTitle.innerHTML = warning,
                output.innerHTML = `Binary numbers only have
                                    the digits 0 and 1.`);
    }

    else if (binNumber.length > 8) {
        return (resultTitle.innerHTML = warning,
                output.innerHTML = `You can enter up to 8 digits.`);
    }

    else {
        decNumber = parseInt(binNumber, 2);        
        resultTitle.innerHTML = correspDec;
        output.innerHTML = decNumber;
    }
}

const input = document.querySelector('.binNumber');
const output = document.querySelector('.decNumber');
const button = document.querySelector('.btn');
const resultTitle = document.querySelector('.resultTitle');

const warning = 'Warning!';
const correspDec = 'Decimal equivalent:'

button.addEventListener('click', handleSubmit)