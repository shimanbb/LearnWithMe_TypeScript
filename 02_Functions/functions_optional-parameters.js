function addNumbersWithOptionalParams(a, b, c, d) {
    var res = a + b;
    alert(d);
    if (c) {
        res += c;
        alert('a + b + c = ' + res);
        return;
    }
    alert('a + b = ' + res);
}
addNumbersWithOptionalParams(1, 2, null, 3);
addNumbersWithOptionalParams(1, 2, 3);
