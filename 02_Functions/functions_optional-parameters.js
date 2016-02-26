function addNumbers(a, b, c) {
    var res = a + b;
    if (c != undefined) {
        res += c;
        alert('a + b + c = ' + res);
        return;
    }
    alert('a + b = ' + res);
}
addNumbers(1, 2);
addNumbers(1, 2, 3);
