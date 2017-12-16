function dontGiveMeFive(start, end, sub = end - start, result = []) {

    for (let i = 0; i <= sub; i++) {
        if (check5Presence(start)) {
            start++;
            continue;
        } else {
            result.push(start);
            start++;
        }
    }
    return result.length;

    function check5Presence(number, n = 0, tenToPower = (n) => { return Math.pow(10, n) }) {
        number = (number > 0) ? number : -number;
        while (number > tenToPower(n)) {
            n++;
        }

        for (; n > 0;) {
            if (number === 0) {
                return false;
            } else {
                n--;
                if (10 * tenToPower(n) - Math.floor(number / (tenToPower(n))) * tenToPower(n) === (5 * tenToPower(n))) {
                    return true;
                } else {
                    while (number >= 0) {
                        number -= tenToPower(n);
                    }
                    number += tenToPower(n);
                }
            }
        }
    }
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