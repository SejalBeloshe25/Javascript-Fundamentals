//  Dynamic Imports : allows to load Javascript modules dynamically.
// useful for lazy-loading or computed module specifier strings.

// Calculator.js

export function add(a, b) {
    return a + b;
}

// App.js

async function calculate() {
    const calculator =
        await import('./DynamicImports.js');

    const result =
        calculator.add(10, 20);

    console.log(result);
}

calculate();

