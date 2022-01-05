//Thursday: Sum All Primes
//Sum all the prime numbers up to and including the provided number.
function isPrime(n){
    
    for (let j=2;j<=Math.sqrt(n);j++){
        if (n%j==0) return false;
        
    }
    return true;
}
function sumPrimes(n) {
    if (n==2) {
        return 2;
    }

    let result=2;
    
    for (let i=3; i<=n;i++) {
        
        if (isPrime(i)==true) {
            
            result+=i;
        }
    }
    return result;
}

console.log(sumPrimes(10));
console.log(sumPrimes(977));