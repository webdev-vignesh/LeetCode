//Given a positive integer n, return the smallest positive integer that is a multiple of both 2 and n.

const smallestEvenMultiple = function(n) {
    while(true) {
        if(n%n == 0 && n%2 == 0){
            return n;
            break;
        }
        n+=n;
    }
}

console.log(smallestEvenMultiple(6));
console.log(smallestEvenMultiple(5));
console.log(smallestEvenMultiple(15));