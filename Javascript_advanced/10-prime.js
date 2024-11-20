function countPrimeNumbers() {
    let count = 0;

    // function to check if number is prime
    function primeNumber(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    // prime numbers from 2-100
    for (let i = 2; i <= 100; i++) {
        if (primeNumber(i)) {
            count++;
        }
    }
    return count;
}

const start = performance.now();
const primeCount = countPrimeNumbers();
const end = performance.now();

function countCountPrimeNumbers() {
    const start = performance.now();

    for (let i = 0; i < 100; i++) {
        countPrimeNumbers();
    }

    const end = performance.now();

    console.log(`Execution time of calculating prime numbers 100 times was ${end - start} milliseconds.`)
}

countCountPrimeNumbers();