const result = [ ];
let num = 2;
let i = 0;
function number(n) {
    while (i <= n - 1) {
        let count = 0;
        for (let check = 1; check <= num; check++) {
            if (num % check === 0) {
                count++;
                console.log(num,'делится без остатка на', check);
            };         
        } ;
        console.log(num, 'пделилось без остатка раз=' , count);
        if (count <=2) {
            console.log('добавляем в массив', num);
            result.push(num);
            i++;
        };   
        num++;
    };
    return result
}

console.log(number(process.argv[2]))
