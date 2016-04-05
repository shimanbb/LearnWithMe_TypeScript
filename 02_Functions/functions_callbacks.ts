var mainFunction = function(callback: () => void){
    alert("Main Function");
    callback();
}

var callbackFunction = function(): void {
    alert("Callback");
}

mainFunction(callbackFunction);
