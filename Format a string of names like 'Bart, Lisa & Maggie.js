function list(names) {
    const result = ' ';
    names.forEach(element => {

        if (names.indexOf(element) ==0) {
            result+(element.name);
        }
       else if (names.indexOf(element) < names.length - 1) {
            result+(' ,'+element.name);
        } else {
            result+('& '+element.name);
        }
    });
    console.log(result);
    return result;
}
list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }, { name: 'Homer' }, { name: 'Marge' }]); // 'Bart, Lisa, Maggie, Homer & Marge'