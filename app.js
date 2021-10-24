function task1() {
    for (i = 0; i < 16; i++) {
        if (i == 0) {
            console.log (i + ' is even')
        }
        else if (i % 2 == 0) {
            console.log (i + ' is even')
        }
        else if (i % 2 != 0) {
            console.log (i + ' is odd')
        }
    }
}

function task2() {
    for (i=1; i<101; i++) {
        if (i % 3 == 0 & i % 5 == 0) {
            console.log (i + ': FizzBuzz')
        }
        else if (i % 5 == 0) {
            console.log (i + ': Buzz')
        }
        else if (i % 3 == 0) {
            console.log (i + ': Fizz')
        }
    }
}

function task3() {
    var sum = 0;
    for (i=0; i<1001; i++) {
        if (i % 3 == 0 & i % 5 == 0) {
            sum += i;  
        }
            console.log ('Sum: ' + sum)
    }
}