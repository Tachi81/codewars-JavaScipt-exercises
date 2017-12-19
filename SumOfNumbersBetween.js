function GetSum(a, b, result = 0) {
    for (let i = [a, b].sort()[0]; i <= [a, b].sort()[1]; i++) {
        result += i;
    }
    console.log(result);
    return result;
}

GetSum(3, 5); // 12
GetSum(-1, -5); // -15