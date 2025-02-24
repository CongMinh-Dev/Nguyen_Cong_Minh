// 1: Using a for loop.
// Efficiency: Good for small and medium values of n.
function sum_to_n_a(n: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// 2: Using a mathematical formula.
// Efficiency: Very good, the most efficient of the three functions.  
function sum_to_n_b(n: number): number {
    return (n * (n + 1)) / 2;
}
 

// 3: Using recursion.
// Efficiency: Less efficient than the loop and mathematical formula.
function sum_to_n_c(n: number): number {
    if (n <= 0) {
        return 0;
    }
    return n + sum_to_n_c(n - 1);
}

// example
console.log("answer of func sum_to_n_a(3): ", sum_to_n_a(3))
console.log("answer of func sum_to_n_b(3): ",sum_to_n_b(3))
console.log("answer of func sum_to_n_c(3): ",sum_to_n_c(3))


