// Functional programming : 

let score = 456;

function addBonus() {      // normal function
    score = score +  45;
    return score;
}
// Functional program way : 
// here we keep pur function and data totally separate

function addBonus(score) {
    return score +45;
} 


