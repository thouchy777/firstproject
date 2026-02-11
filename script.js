const display = document.querySelector(".display");
let sum = "";
let num = 0;

function one_button(){
    sum = sum+"1";
    display.textContent = sum;
    console.log(sum);
}
function two_button(){
    sum = sum+"2";
    display.textContent = sum;
    console.log(sum);
}
function three_button(){
    sum = sum+"3";
    display.textContent = sum;
    console.log(sum);
}
function four_button(){
    sum = sum+"4";
    display.textContent = sum;
    console.log(sum);
}
function five_button(){
    sum = sum+"5";
    display.textContent = sum;
    console.log(sum);
}
function six_button(){
    sum = sum+"6";
    display.textContent = sum;
    console.log(sum);
}
function seven_button(){
    sum = sum+"7";
    display.textContent = sum;
    console.log(sum);
}
function eigth_button(){
    sum = sum+"8";
    display.textContent = sum;
    console.log(sum);
}
function nine_button(){
    sum = sum+"9";
    display.textContent = sum;
    console.log(sum);
}
function zero_button(){
    sum = sum+"0";
    display.textContent = sum;
    console.log(sum);
}
function plus_button(){
    sum = sum+"+";
    display.textContent = sum;
    console.log(sum);
}
function minus_button(){
    if (sum.slice(-1) != "-"){
        sum = sum+"-";
        display.textContent = sum;
        console.log(sum);
    }
}
function multiplied_button(){
    sum = sum+"x";
    display.textContent = sum;
    console.log(sum);
}
function divide_button(){
    sum = sum+"÷";
    display.textContent = sum;
    console.log(sum);
}
function op_button(){
    sum = sum+"(";
    display.textContent = sum;
    console.log(sum);
}
function cp_button(){
    sum = sum+")";
    display.textContent = sum;
    console.log(sum);
}
function point_button(){
    sum = sum+".";
    display.textContent = sum;
    console.log(sum);
}
function back_button(){
    sum = sum.slice(0, -1);
    display.textContent = sum;
    console.log(sum);
}
function clear_button(){
    sum = "";
    display.textContent = sum;
    console.log(sum);
}
function equals_button(){
    sum = sum.replaceAll("x", "*");
    num = eval(sum);
    display.textContent = num;
    console.log(num);
    sum = "";
    num = "0";
}
