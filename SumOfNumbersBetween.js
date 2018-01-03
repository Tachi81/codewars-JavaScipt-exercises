function GetSum(a, b, result = 0) {
    for (let i = Math.min(a,b); i <= Math.max(a,b); i++) {
        result += i;
    }
    console.log(result, ([a, b].sort()));
    return result;
}

GetSum(3, 5); // 12
GetSum(-1, -5); // -15