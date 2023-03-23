// Bài 1 : Cho 1 chuỗi str. Viết chương trình đảo ngược chuỗi và in ra kết quả
let ex1_input = document.getElementById('ex1_input');
let ex1_output_reverse = document.getElementById('ex1_output_reverse');


function ex1_btn_fnt() {
    console.log(ex1_input.value.length);
    let result = '';
    let len = ex1_input.value.length;
    for (let i = 0; i < len; i++) {
        result += ex1_input.value[len - 1 - i];
    }
    ex1_output_reverse.innerHTML = result;
}

// Bài 2 : Viết 1 chương trình với đầu vào là 1 chuỗi ký tự và in ra chuỗi đó với các ký tự đầu
// của chữ mỗi chữ được viết hoa.
let ex2_input = document.getElementById('ex2_input');
let ex2_output = document.getElementById('ex2_output');


function ex2_printFnt() {
    console.log(ex2_input.value);
    let input = ex2_input.value;
    let len = input.length;
    let result = '';
    for (let i = 0; i < len; i++) {
        // console.log(input.charCodeAt(i));
        if (i == 0) {
            result += input[i].toUpperCase()
        } else if (input.charCodeAt(i - 1) == 32) {
            // console.log('here');
            result += input[i].toUpperCase();
            // i++;
        } else {
            result += input[i];
        }

        ex2_output.innerHTML = result;
    }
}

//Bài 3 Viết một chương trình xóa các phần tử trùng của một mảng và in ra kết quả.
let ex3_input = document.getElementById('ex3_input');
let ex3_output = document.getElementById('ex3_output');

function ex3_printDelete() {
    let myInput = getValueFromInputToArray(ex3_input.value);

    // console.log(myInput);
    let myOutput = [];
    myOutput.push(myInput[0]);
    let flag = false;
    let len = myInput.length;
    for (let i = 0; i < len; i++) {
        for (let j = 1; j < len; j++) {
            if(myOutput.includes(myInput[j])==true){

            } else{
                myOutput.push(myInput[j]);
            }
        }
    }
    ex3_output.innerHTML = myOutput;
}

//Bài 4 : Viết một chương sắp xếp các phần tử là số ở trong mảng theo thứ tự tăng dần
let ex4_input = document.getElementById('ex4_input');
let ex4_output = document.getElementById('ex4_output');

function ex4_printSort() {
    let myInputArray = getValueFromInputToArray(ex4_input.value);
    
}

function getValueFromInputToArray(inputText) {
    let inputTextArray = [''];
    let temp = '';
    let index = 0;
    for (let i = 0; i < inputText.length; i++) {
        if (inputText[i] != ',') {
            inputTextArray[index] += inputText[i];
        } else {
            index++;
            inputTextArray[index] = '';
        }
    }
    // console.log(inputTextArray);
    return inputTextArray;
}