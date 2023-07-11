
function addTwo(a) {
    return a + 2
}

function subTwo(a) {
    return a - 2
}

function mulTwo(a) {
    return a * 2
}

const compose = (...fns) => (x) => fns.reduceRight((y, f) => f(y), x);

const evaluate = compose(addTwo, subTwo, mulTwo);