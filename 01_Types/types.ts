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
var returnVal: void;

//returnVal = 1;

//Union Type
var unionVariable: number | string | string[];
unionVariable = 2;
unionVariable = 'Hello World';
unionVariable = ["Hello", "World"];
//unionVariable = true; //Error

//Type Alias
type myUnion = number | string | string[];

var myUnionVariable: myUnion;
myUnionVariable = 2;
myUnionVariable = 'Hello World';
myUnionVariable = ["Hello", "World"];
//myUnionVariable = true; //Error

//Scopes
var globalVar: number = 0;
let globalLet: number = 0;
const globalConst : number = 0;
function myFunction (){
  var localVar: number = 1;
  let localLet: number = 1;
  const localConst : number = 1;

  {
    var blockVar: number = 1;
    let blockLet: number = 1;
    const blockConst : number = 1;

    type blockTypeAlias = number | string | string[];
  }

  globalVar = 2;
  globalLet = 2;
  alert(globalConst);
  localVar = 2;
  localLet = 2;
  alert(localConst);
  blockVar = 2;
  //blockLet = 2; //Error
  //alert(blockConst); //Error
  //var blockTypeVar: blockTypeAlias; //Error
}

globalVar = 3;
globalLet = 3;
alert(globalConst);
//localVar = 3; //Error
//localLet = 3; //Error
//alert(localConst);
//blockVar = 3; //Error
//blockLet = 3; //Error
//alert(blockConst); //Error

//Casting
type type1 = {id: number, name: string}
type type2 = {name: string, id: number}

var v1: type1 = {id: 2, name: 'abc'}
//var num = <number> v1; //Error
var v2 = <type2> v1;

//v2 = 2; //Error
v2 = <any> v2;
var v3 = <any> v2;
v3 = 2;

//Type Guard
var a: any;

if(typeof a === "number")
{
  //a.toLowerCase(); //Error
}

if(typeof a === "string")
{
  a.toLowerCase(); //No Problem
}

a.toLowerCase();
