function iif_main() {
    var gVar = 1;
    (function (v) {
        gVar = v;
        var lVar = v;
        alert("gVar inside IIF=" + gVar);
        alert("lVar inside IIF=" + lVar);
    })(2);
    alert("gVar in mainFunction = " + gVar);
}
iif_main();
