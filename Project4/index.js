console.log('I am alive!!..');

//Trigger the calculate buton


let calculate = document.getElementById('calculate');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let answer = document.getElementById('answer');

calculate.addEventListener('click',()=>{
    console.log('You just click the button');
    
    let sum = parseInt(input1.value) + parseInt(input2.value);

    //Check if the input is empty
    if(input1.value === '' || input2.value === ''){
        answer.innerHTML = 'Please make sure you enter numbers in field 1 and 2';
    }
    else{
        answer.innerHTML = sum;
        console.log(sum);
    }

})

//Summation base on two input
// Post the calculated value back to the screen
// Calculation will not happen when the inputs are empty
// Use parseInt to change the value from string to number