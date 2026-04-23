// console.log("Hello JavaScript.....")


//How to accept user input

//1. Easy way= window prompt
//2. PROFESSIONAL WAY = HTML textbox
let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    // console.log(username);
    document.getElementById("myH1").textContent =`Hello ${username}`;
}
