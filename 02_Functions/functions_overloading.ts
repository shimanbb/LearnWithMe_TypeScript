function print (n: number);
function print (str: string);
function print (b: boolean);
function print (v: number | string | boolean) {
    if(typeof(v) === "number")
    {
        alert(v + " is a number")
    }
    else if(typeof(v) === "string")
    {
        alert("'" + v + "' is a string")
    }
    else if(typeof(v) === "boolean")
    {
        alert("'" + v + "' is a boolean")
    }
    else {
        alert("error");
    }
}

print(1);
print("Hello World!");
print(true);
