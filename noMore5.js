function dontGiveMeFive(start, end, result = 0) {

    for (let i = start; i <= end; i++) {
        if (String(i).indexOf(5)>-1) {
            continue;
        } else {
            result++;
        }
    }
    return result;    
}

let c = dontGiveMeFive(4, 17)
console.log(c, '=?', 12);

c = dontGiveMeFive(1, 9),
    console.log('wynik= ', c, '=? spodziewane ', 8);

c = dontGiveMeFive(4, 17),
    console.log('wynik= ', c, '=? spodziewane ', 12);

c = dontGiveMeFive(994, 1006),
    console.log('wynik= ', c, '=? spodziewane ', 11);

c = dontGiveMeFive(-18, -14),
    console.log('wynik= ', c, '=? spodziewane ', 4);