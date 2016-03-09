function addNumbersWithOptionalParams(a: number, b: number, c?:number, d?: number): void {
    var res = a + b;
    alert(d);
    if(c)
    {
        res += c;

        alert('a + b + c = ' + res);
        return;
    }

    alert('a + b = ' + res);
}
//addNumbersWithOptionalParams(1);
addNumbersWithOptionalParams(1, 2, null, 3);
addNumbersWithOptionalParams(1, 2, 3);
