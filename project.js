// user choice
let selectclass = document.querySelectorAll(".choice");
selectclass.forEach((val) => {
  val.addEventListener("click", () => {
    const userchoice = val.getAttribute("id");
    connectboth(userchoice);
  })
})

// computer choice
let compchoice = () => {
  let cv = ["Rock", "Paper", "Scissor"]
  let ci = Math.floor(Math.random() * 3);
  let compfinal = cv[ci];
  // console.log("Computer chose", compfinal);
  return compfinal;
}

// updating the scores on screen
let score = document.querySelector(".final");
let updateuserscore = document.querySelector(".scoreboxyou1");
let userscore = 1;
let updatecompscore = document.querySelector(".scoreboxcomp1");
let compscore = 1;

// to connect user choice and comp choice
let connectboth = (userchoice) => {
  // console.log("You Chose", userchoice);
  let finaluserchoice = userchoice;
  let computerchoice = compchoice();

  // who's gonna win?
  if (finaluserchoice === computerchoice) {
    score.innerText = `It's a Draw! Your ${userchoice} cannot beat ${computerchoice}`;
    score.style.backgroundColor = "blue";
    score.style.width = "600px";

  } else if (finaluserchoice === "Rock" && computerchoice === "Paper") {
    score.innerText = `You Lose! \n ${computerchoice} beats your ${userchoice}`
    score.style.backgroundColor = "red";
    score.style.width = "600px";
    updatecompscore.innerText = compscore++;

  } else if (finaluserchoice === "Rock" && computerchoice === "Scissor") {
    score.innerText = `You Win! \n Your ${userchoice} beats ${computerchoice}`
    score.style.backgroundColor = "green";
    score.style.width = "600px";
    updateuserscore.innerText = userscore++;

  } else if (finaluserchoice === "Paper" && computerchoice === "Rock") {
    score.innerText = `You Win! \n Your ${userchoice} beats ${computerchoice}`
    score.style.backgroundColor = "green";
    score.style.width = "600px";
    updateuserscore.innerText = userscore++;

  } else if (finaluserchoice === "Paper" && computerchoice === "Scissor") {
    score.innerText = `You Lose! \n ${computerchoice} beats your ${userchoice}`
    score.style.backgroundColor = "red";
    score.style.width = "600px";
    updatecompscore.innerText = compscore++;

  } else if (finaluserchoice === "Scissor" && computerchoice === "Rock") {
    score.innerText = `You Lose! \n ${computerchoice} beats your ${userchoice}`
    score.style.backgroundColor = "red";
    score.style.width = "600px";
    updatecompscore.innerText = compscore++;

  } else if (finaluserchoice === "Scissor" && computerchoice === "Paper") {
    score.innerText = `You Win! \n Your ${userchoice} beats ${computerchoice}`
    score.style.backgroundColor = "green";
    score.style.width = "600px";
    updateuserscore.innerText = userscore++;

  }
}



