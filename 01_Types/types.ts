//Inference
var test = 0;
//test = "Sorry mate, this won't compile";  //Cannot convert 'string' to 'number'

//Optional Static Notation
var num: number;
var str: string;

/*if(1 != 2)
{
  num = "This won't compile"; //Cannot convert 'string' to 'number'
}*/

num = 0;
str = "Hello World!";

//Any
var anything: any; //explicite any
var implicit_anything; //implicite any

anything = -1;
anything = [1, 2, 3]; //No problem
anything = "This will be compiled";

implicit_anything = -1;
implicit_anything = [1, 2, 3]; //No problem
implicit_anything = "This will be compiled too";

//Array
var arr1: number[] = [1, 2, 3];
var arr2: Array<number> = [1, 2, 3];

//Enum
enum MyEnum1 {Val1, Val2, Val3};
var enumVal1: MyEnum1 = MyEnum1.Val1;

enum MyEnum2 {Val1 = 11, Val2, Val3};
var enumVal2: MyEnum2 = MyEnum2.Val2;

//Void
var returnVal = function () {
  //do nothing
};

//returnVal = 1;

//Union Type
var unionVariable: number | string | string[];
unionVariable = 2;
unionVariable = 'Hello World';
unionVariable = ["Hello", "World"];
//unionVariable = true;
