function addNumbersWithDefaultParameters(a: number, b: number, c:number = 0, d: number = 0): void {
    var res = a + b + c + d;

    alert('result = ' + res);
}
//addNumbersWithDefaultParameters(1);
addNumbersWithDefaultParameters(1, 2);
addNumbersWithDefaultParameters(1, 2, 3)
