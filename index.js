function giveFactorial(n) {
    if (n === 0) {
        return 1;
    }
    else {
         let result = 1;
       for (let i = 1; i<=n; i++){
         result = result*i
       }
       return result;
    }
}
giveFactorial(5);
