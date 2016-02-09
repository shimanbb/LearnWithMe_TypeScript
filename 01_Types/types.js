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
var returnVal = function () {
};
var unionVariable;
unionVariable = 2;
unionVariable = 'Hello World';
unionVariable = ["Hello", "World"];
