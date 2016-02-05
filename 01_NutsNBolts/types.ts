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

//Union Type
var unionVariable: number | string | string[];
unionVariable = 2;
unionVariable = 'Hello World';
unionVariable = ["Hello", "World"];
unionVariable = true;
