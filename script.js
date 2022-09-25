const quizDB = [
    {
        question: "Q1:  What is the full form of HTML?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "Hypertext Mark language",
        d: "Hypertext Markup Language",
        ans: "ans4"
    },
    {
        question: "Q2:  What is the full form of CSS?",
        a: "Cascading style sheets",
        b: "Cascading Style sheep",
        c: "Cartoon Style Sheets",
        d: "Cascading Super Sheets",
        ans: "ans1"
    },
    {
        question: "Q3:  What is the full form of HTTP?",
        a: "Hypertext Text Product",
        b: "Hypertext Test Protocal",
        c: "Hey Transfer Protocal",
        d: "Hypertext Transfer Protocal",
        ans: "ans4"

    },
    {
        question: "Q4:  What is the full form of JS?",
        a: "Java Super",
        b: "Java Script",
        c: "Just Script",
        d: "Java Set",
        ans: "ans2"

    },
];
   const question =document.querySelector('.question');
   const option1 =document.querySelector('#option1');
   const option2 =document.querySelector('#option2');
   const option3 =document.querySelector('#option3');
   const option4 =document.querySelector('#option4');
    const submit=document.querySelector('#submit');

    const answers = document.querySelectorAll('answers');

    const showScore = document.querySelector('#showScore');

    let questionCount = 0;
    let Score = 0;

    const loadQuestion = () => {
        const questionList = quizDB[questionCount];

        question.innerText = questionList.question;

        option1.innerText = questionList.a;
        option2.innerText = questionList.b;
        option3.innerText = questionList.c;
        option4.innerText = questionList.d;
    }

    loadQuestion();

    const getCheckAnswer = () => {
        let answer;

        answers.forEach((curAnsElem)  => {
            if(curAnsElem.checked){
                answer=curAnsElem.id;
            }
        });
         return answer;
            
        };

        const deselectAll = () => {
            answers.forEach((curAnsElem) => curAnsElem.checked = false );
        }


    submit.addEventListener('click',() => {

        const checkedAnswer = getCheckAnswer();
        console.log(checkedAnswer);

        if(checkedAnswer === quizDB[questionCount].ans){
            Score++;
        };
           
        questionCount++;

        deselectAll();

        if(questionCount < quizDB.length){
            loadQuestion();

        }else{
            showScore.innerHTML = `
            <h3>You scored ${Score}/${quizDB.length}</h3>
            <button class="btn" onclick="location.reload()"> PLAY AGAIN </button>
            `;

            showScore.classList.remove('scoreArea');
        }

       

           
           
            
           
            

    

    });