var button = document.getElementById("btn");
var input1 = document.getElementById("num-1");
var input2 = document.getElementById("num-2");
var lable = document.getElementById("ans");
button.addEventListener('click', function () {
    var ans = add(+input1.value, +input2.value);
    console.log(ans);
    lable.innerText = '' + ans;
});
function add(num1, num2) {
    return num1 + num2;
}
