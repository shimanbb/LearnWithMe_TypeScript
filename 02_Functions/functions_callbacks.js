var mainFunction = function (callback) {
    alert("Main Function");
    callback();
};
var callbackFunction = function () {
    alert("Callback");
};
mainFunction(callbackFunction);
mainFunction(function () {
    alert("Arrow Function Callback");
});
