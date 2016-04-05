var mainFunction = function (callback) {
    alert("Main Function");
    callback();
};
var callbackFunction = function () {
    alert("Callback");
};
mainFunction(callbackFunction);
