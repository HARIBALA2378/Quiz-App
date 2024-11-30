const questions = [
    {
      topic: "science",
      question: "What color is the sky?",
      possibleAnswers: ["blue", "green", "yellow"],
      correctAnswer: "blue",
    },
    {
      topic: "tech",
      question: "What is the best language to learn?",
      possibleAnswers: ["javascript", "python", "ruby"],
      correctAnswer: "javascript",
    },
    {
      topic: "math",
      question: "what is 4 + 4",
      possibleAnswers: ["7", "8", "9", "10"],
      correctAnswer: "8",
    },
    {
      topic: "random",
      question: "What is your favorite energy drink?",
      possibleAnswers: ["ghost", "monster", "redbull"],
      correctAnswer: "ghost",
    },
  ];
  
  const quizProgress = document.getElementById("quizProgress");
  const questionContainer = document.getElementById("questionContainer");
  const answerContainer = document.getElementById("answerContainer");
  let currentQuestionIndex = 0;
  
  function handleQuestion(index) {
    quizProgress.innerHTML = "";
    questions.forEach(() => {
      quizProgress.innerHTML += "<span></span>";
    });
  
    let spans = document.querySelectorAll("span");
    for (let i = 0; i <= index; i++) {
      spans[i].classList.add("seen");
    }
  
    questionContainer.innerHTML = `
      <p>${questions[index].topic}</p>
      <p>${questions[index].question}</p>
    `;
    answerContainer.innerHTML = "";
    questions[index].possibleAnswers.forEach((answer) => {
      answerContainer.innerHTML += `<button>${answer}</button>`;
    });
  
    let answers = document.querySelectorAll("button");
    answers.forEach((answer) => {
      answer.addEventListener("click", (e) => {
        // Highlight correct/incorrect answers
        if (e.target.textContent === questions[index].correctAnswer) {
          e.target.style.color = "green";
          document.getElementById('body').style.backgroundColor = "lightgreen";
          setTimeout(() => {
            document.getElementById('body').style.backgroundColor = "#252525";
          }, 1000);
        } else {
          e.target.style.color = "red";
          document.getElementById('body').style.backgroundColor = "red";
          setTimeout(() => {
            document.getElementById('body').style.backgroundColor = "#252525";
          }, 1000);
          e.target.style.backgroundColor = "#f8d7da";
        }
  
        // Disable all buttons
        answers.forEach((btn) => (btn.disabled = true));
  
        // Move to the next question after a short delay
        setTimeout(() => {
          if (currentQuestionIndex === questions.length - 1) {
            currentQuestionIndex = 0; // Restart quiz or handle quiz end
          } else {
            currentQuestionIndex++;
          }
          handleQuestion(currentQuestionIndex);
        }, 1000); // Delay of 1 second
      });
    });
  }
  
  handleQuestion(currentQuestionIndex);
  



// const questions = [
//     {
//       topic: "science",
//       question: "What color is the sky?",
//       possibleAnswers: ["blue", "green", "yellow"],
//       correctAnswer: "blue",
//     },
//     {
//       topic: "tech",
//       question: "What is the best language to learn?",
//       possibleAnswers: ["javascript", "python", "ruby"],
//       correctAnswer: "javascript",
//     },
//     // {
//     //   topic: "math",
//     //   question: "what is 4 + 4",
//     //   possibleAnswers: ["7", "8", "9", "10"],
//     //   correctAnswer: "8",
//     // },
//     // {
//     //   topic: "random",
//     //   question: "What is your favorite energy drink?",
//     //   possibleAnswers: ["ghost", "monster", "redbull"],
//     //   correctAnswer: "ghost",
//     // },
//   ];
  
//   const quizProgress = document.getElementById("quizProgress");
//   const questionContainer = document.getElementById("questionContainer");
//   const answerContainer = document.getElementById("answerContainer");
//   let currentQuestionIndex = 0;

//   function handleQuestion(index){
//     quizProgress.innerHTML = ""
//     questions.forEach(question => {
//         quizProgress.innerHTML += "<span></span";
//     });

//     let spans = document.querySelectorAll("span");
//     // console.log(spans);
//     for(let i = 0;i <= index;i++){
//         spans[i].classList.add("seen");
//     }

//     questionContainer.innerHTML = `
//     <p>${questions[index].topic}</p>
//     <p>${questions[index].question}</p>
//     `;
//     answerContainer.innerHTML = "";
//         questions[index].possibleAnswers.forEach(answer =>{
//             answerContainer.innerHTML += `<button>${answer}</button>`
//         });

//     let answers = document.querySelectorAll('button');
//     answers.forEach(answer => {
//         answer.addEventListener("click",(e) =>{
//             if(e.target.textContent === questions[index].correctAnswer){
//                 e.target.style.color = "green"
//                 e.target.style.backgroundColor = "lightgreen";
//             }
//             else {
//                 e.target.style.color = "red";
//                 e.target.style.backgroundColor = "#f8d7da";
//               }
//               answers.forEach((btn) => (btn.disabled = true));
//             if(currentQuestionIndex == questions.length-1)
//               currentQuestionIndex = 0;
//             else
//               currentQuestionIndex++;
//             handleQuestion(currentQuestionIndex);
//         });
//     });
   
//   }
  

//   handleQuestion(currentQuestionIndex)



























  
//   function handleQuestion(index) {
//     // handle quiz progress section
//     quizProgress.innerHTML = "";
//     questions.forEach((question) => {
//       quizProgress.innerHTML += "<span></span>";
//     });
//     let spans = document.querySelectorAll("span");
//     for (let i = 0; i <= index; i++) {
//       spans[i].classList.add("seen");
//     }
  
//     // topic/question
//     questionContainer.innerHTML = `<p>${questions[index].topic}</p>
//     <p>${questions[index].question}</p>
//     `;
  
//     // answers
//     answerContainer.innerHTML = "";
//     questions[index].possibleAnswers.forEach((answer) => {
//       answerContainer.innerHTML += `<button>${answer}</button>`;
//     });
//     let answers = document.querySelectorAll("button");
//     answers.forEach((answer) => {
//       answer.addEventListener("click", (e) => {
//         if (e.target.textContent === questions[index].correctAnswer) {
//           console.log("correct! ");
//         } else {
//           console.log("wrong");
//         }
//         if (currentQuestionIndex === questions.length - 1) {
//           currentQuestionIndex = 0;
//         } else {
//           currentQuestionIndex++;
//         }
//         handleQuestion(currentQuestionIndex);
//       });
//     });
//   }
  
//   handleQuestion(currentQuestionIndex);