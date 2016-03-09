function addNumbersWithDefaultParameters(a, b, c, d) {
    if (c === void 0) { c = 0; }
    if (d === void 0) { d = 0; }
    var res = a + b + c + d;
    alert('result = ' + res);
}
addNumbersWithDefaultParameters(1, 2);
addNumbersWithDefaultParameters(1, 2, 3);
