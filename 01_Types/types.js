var test = 0;
var num;
var str;
num = 0;
str = "Hello World!";
var anything;
var implicit_anything;
anything = -1;
anything = [1, 2, 3];
anything = "This will be compiled";
implicit_anything = -1;
implicit_anything = [1, 2, 3];
implicit_anything = "This will be compiled too";
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];
var MyEnum1;
(function (MyEnum1) {
    MyEnum1[MyEnum1["Val1"] = 0] = "Val1";
    MyEnum1[MyEnum1["Val2"] = 1] = "Val2";
    MyEnum1[MyEnum1["Val3"] = 2] = "Val3";
})(MyEnum1 || (MyEnum1 = {}));
;
var enumVal1 = MyEnum1.Val1;
var MyEnum2;
(function (MyEnum2) {
    MyEnum2[MyEnum2["Val1"] = 11] = "Val1";
    MyEnum2[MyEnum2["Val2"] = 12] = "Val2";
    MyEnum2[MyEnum2["Val3"] = 13] = "Val3";
})(MyEnum2 || (MyEnum2 = {}));
;
var enumVal2 = MyEnum2.Val2;
var returnVal;
var unionVariable;
unionVariable = 2;
unionVariable = 'Hello World';
unionVariable = ["Hello", "World"];
var myUnionVariable;
myUnionVariable = 2;
myUnionVariable = 'Hello World';
myUnionVariable = ["Hello", "World"];
var globalVar = 0;
var globalLet = 0;
var globalConst = 0;
function myFunction() {
    var localVar = 1;
    var localLet = 1;
    var localConst = 1;
    {
        var blockVar = 1;
        var blockLet = 1;
        var blockConst = 1;
    }
    globalVar = 2;
    globalLet = 2;
    alert(globalConst);
    localVar = 2;
    localLet = 2;
    alert(localConst);
    blockVar = 2;
}
globalVar = 3;
globalLet = 3;
alert(globalConst);
var v1 = { id: 2, name: 'abc' };
var v2 = v1;
v2 = v2;
var v3 = v2;
v3 = 2;
var a;
if (typeof a === "number") {
}
if (typeof a === "string") {
    a.toLowerCase();
}
a.toLowerCase();
