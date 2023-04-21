const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);
//Multiply by 10 to get a num b/w 0-10
//ceil func to get integer part alone

const questionEl = document.getElementById("question");

const inputEl = document.getElementById("input");

const formEl = document.getElementById("form");

//Set score to previous value of it from the local storage
//JSON.parse() to get it as a number
//If user closes and opens the site again

const scoreEl = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));
if(!score){
    score = 0;
}

scoreEl.innerText = `score:${score}`;

questionEl.innerText = `What is ${num1} multiply by ${num2} ?`;
//`` => backticks, removes existing string and within it we can write anything
//For getting variable value, use${var_name}

const correctAns = num1*num2;

//From the form, we need to take the users answer and verify to change the score
//Give addEventListener method to form and track the submission of the form and get data from input
formEl.addEventListener("submit",()=>{
    const userAns = +inputEl.value;
    if(userAns == correctAns){
        score++;
        updateLocalStorage();
    }else{
        score--;
        updateLocalStorage();
    }
});

//Now everytime we click submit, the page will be refreshed, So the score will be set to 0 again.
//To prevent it, we can store the score inside local storage of the browser
function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score));
}
//In local storage, we can store only strings, so use stringify() from JSON
