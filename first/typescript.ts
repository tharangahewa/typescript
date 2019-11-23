const button = document.getElementById("btn");
const input1 = document.getElementById("num-1") as HTMLInputElement;
const input2 = document.getElementById("num-2") as HTMLInputElement;
const lable = document.getElementById("ans");


button.addEventListener('click', () => {
    const ans = add(+input1.value, +input2.value);
    console.log(ans);
    lable.innerText = '' + ans;
});

function add(num1: number, num2: number) {
    return num1 + num2;
}
