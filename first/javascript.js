const button = document.getElementById("btn");
const input1 = document.getElementById("num-1");
const input2 = document.getElementById("num-2");
const lable = document.getElementById("ans");


button.addEventListener( 'click', ()=> {
    const ans = add( input1.value, input2.value);
    console.log( ans);
    lable.innerText = ''+ ans;
});

function add( num1, num2) {
    return num1 + num2;
}
