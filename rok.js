function toDayOfYear(arr) {

    const leapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const notLeapYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let year;
    let res = 0;

    if (arr[2] % 4 !== 0 || arr[2] % 100 === 0 && arr[2] % 400 !== 0) {
        year = leapYear;
    } else {
        year = notLeapYear;
    }

    countDay = function (year) {
        for (let i = 0; i < arr[1] - 1; i++) {
            res += year[i];
        }
        return res += arr[0];
    }
    countDay(year)
    return res;
    console.log(res);
}

toDayOfYear([1, 5, 3000]);

