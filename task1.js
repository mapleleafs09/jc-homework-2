const result = [ ]
let num = 2;
let i = 0;
function number(n) {
    while (i <= n - 1) {
        if (num % 2 !== 0 && num % 3 !== 0 ) { 
            result[i] = num; 
            i++;
        } else if (num == 2 || num == 3) {
            result[i] = num;
            i++;
        }
        num ++;
    } 
    return result
}


console.log(number(process.argv[2]))