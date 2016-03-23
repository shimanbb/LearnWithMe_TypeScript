function addNumbersWithRestParameters(... n: number[]): void {
    var result = 0;
    var i;

    for(i=0; i < n.length; i++) {
        result += n[i];
    }

    alert("Result = " + result);
}

addNumbersWithRestParameters(2);

addNumbersWithRestParameters(2, 2, 2, 2, 2);
