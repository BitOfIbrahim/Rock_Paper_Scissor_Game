let user = 0 ; 
let computer = 0 ; 
let draw = 0 ; 
const gameStarted = (val , img ) => {

    val = parseInt(val);
   
     img.classList.add("clicked");

     
     setTimeout(() => {
         img.classList.remove("clicked");
     }, 500); 

    

     // own logic // 
    
    let random = [1, 2, 3];
    let randomElement = random[Math.floor(Math.random() * random.length)];
    console.log(randomElement);

    // Suppose user enters 1
    if (val === 1 && randomElement === 1){
        console.log("draw");
        document.querySelector("h2").innerText = "It's a draw";
        document.querySelector(".user").innerText = "user picked Rock";
        document.querySelector(".computer").innerText = "computer picked Rock";
        draw = draw + 1 ; 
        document.querySelector("#win_of_draw").innerText = "Draws: " + draw;


    } else if (val === 1 && randomElement === 2){
        console.log("computer wins");
        document.querySelector("h2").innerText = "Computer Wins";
        document.querySelector(".user").innerText = "user picked Rock";
        document.querySelector(".computer").innerText = "computer picked paper";
        computer = computer + 1 ; 
        document.querySelector("#win_of_computer").innerText = "computer: " + computer;

    } else if (val === 1 && randomElement === 3){
        console.log("user wins");
        document.querySelector("h2").innerText = "User Wins";
        document.querySelector(".user").innerText = "user picked Rock";
        document.querySelector(".computer").innerText = "computer picked Scissors";
        user = user + 1 ;  
        document.querySelector("#win_of_user").innerText = "users: " + user;

    } 
    // Suppose user enters 2  
    else if (val === 2 && randomElement === 1){
        console.log("user wins");
        document.querySelector("h2").innerText = "User Wins";
        document.querySelector(".user").innerText = "user picked Paper";
        document.querySelector(".computer").innerText = "computer picked Rock";
        user = user + 1 ;  
        document.querySelector("#win_of_user").innerText = "users: " + user;

    } else if (val === 2 && randomElement === 2){
        console.log("draw");
        document.querySelector("h2").innerText = "It's a draw";
        document.querySelector(".user").innerText = "user picked Paper";
        document.querySelector(".computer").innerText = "computer picked Paper";
        draw = draw + 1 ; 
        document.querySelector("#win_of_draw").innerText = "Draws: " + draw;


    } else if (val === 2 && randomElement === 3){
        console.log("computer wins");
        document.querySelector("h2").innerText = "Computer Wins";
        document.querySelector(".user").innerText = "user picked Paper";
        document.querySelector(".computer").innerText = "computer picked Scissors";
        computer = computer + 1 ; 
        document.querySelector("#win_of_computer").innerText = "computer: " + computer; 

    } 
    // Suppose user enters 3 
    else if (val === 3 && randomElement === 1){
        console.log("computer wins");
        document.querySelector("h2").innerText = "Computer Wins";
        document.querySelector(".user").innerText = "user picked Scissors";
        document.querySelector(".computer").innerText = "computer picked Rock";
        computer = computer + 1 ; 
        document.querySelector("#win_of_computer").innerText = "computer: " + computer;

    } else if (val === 3 && randomElement === 2){
        console.log("user wins");
        document.querySelector("h2").innerText = "User Wins";
        document.querySelector(".user").innerText = "user picked Scissors";
        document.querySelector(".computer").innerText = "computer picked Paper";
        user = user + 1 ;  
        document.querySelector("#win_of_user").innerText = "users: " + user;

    } else if (val === 3 && randomElement === 3){
        console.log("draw");
        document.querySelector("h2").innerText = "It's a draw";
        document.querySelector(".user").innerText = "user picked Scissors";
        document.querySelector(".computer").innerText = "computer picked Scissors";
        draw = draw + 1 ; 
        document.querySelector("#win_of_draw").innerText = "Draws: " + draw;

    }
};
