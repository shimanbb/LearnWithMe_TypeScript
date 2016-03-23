function addNumbersWithRestParameters() {
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        n[_i - 0] = arguments[_i];
    }
    var result = 0;
    var i;
    for (i = 0; i < n.length; i++) {
        result += n[i];
    }
    alert("Result = " + result);
}
addNumbersWithRestParameters(2);
addNumbersWithRestParameters(2, 2, 2, 2, 2);
