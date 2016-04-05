function iif_main(): void {
    var gVar: number = 1;

    (function(v: number){
        gVar = v;
        var lVar: number = v;


        alert("gVar inside IIF=" + gVar);
        alert("lVar inside IIF=" + lVar);
    })(2);

    alert("gVar in mainFunction = " + gVar);
    //alert("lVar in mainFunction = " + lVar); //Error
}

iif_main();
