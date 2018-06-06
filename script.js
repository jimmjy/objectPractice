/*

challenge:

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct anser (I would use a number for this)

2. create a couple of questions using the constructor

3. store them all inside an array

4. select one random question and log it on the console, together with the possible ansers (each question should have a number) (Hint: wriate a method for the Question objects for this task).

5. use the prompt function to ask the user for the correct answer.  The user should input the number of the correct answer such as you display it on Task 4.

6. Check if the answer is correct and print to the console wheather the answer is corret or not (Hint: write another method for this).

7. Suppose this code would be a plygin for other programmers to use in their code. So make sure that lal your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).

--- exper level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after display the result)

9. Be careful: after task 8, the game literally never ends.  So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON"T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I;m going to use the power of closerus for this, but don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.

*/


//closure to make code usable by another developer without interference of //their current app or variables

function gameStart() {

    // default variables
    var score = 0;

    //function constructor

    var Question = function(askQuestion, answers, rightAnswer) {
        this.askQuestion = askQuestion;
        this.answers = answers;
        this.rightAnswer = rightAnswer;
    }

    // create questions with constructor

    var questionOne = new Question('What is best for web page styling', ['A pencil', 'Gliding fingers across the screen', 'CSS'], 2);

    var questionTwo = new Question('Is javascript the coolest programming language in the world?', ['yes', 'no'], 0);

    var questionThree = new Question('What best describes coding?', ['boring', 'hard', 'fun', 'tedious'], 2);

    //create question bank to store our made up questions
    var questionBank = [questionOne, questionTwo, questionThree];

    // give a random question to user through a function

    var randomQuestion = function (questionBank) {
        var random = Math.floor(Math.random() * questionBank.length);

        console.log(questionBank[random].askQuestion);
        
        for (var i = 0; i < questionBank[random].answers.length; i++) {
            console.log(i + ': ' + questionBank[random].answers[i]);
        }

        var userAnswer = prompt('Please select the corrent answer (just type the number). or type exit to quit.');
        
        //Immediately invoked function to automate process and practice

        (function (userAnswer) {
            if((Number)(userAnswer) === questionBank[random].rightAnswer) {
                console.log('right!!!');
                score += 1;
                console.log(`Your current score is: ${score}`);
                console.log('---------------------------');
                randomQuestion(questionBank);
            } else if(userAnswer !== questionBank[random].rightAnswer && userAnswer !== 'exit') {
                
                console.log('Wrong answer, try again');
                console.log(`Your current score is: ${score}`);
                console.log('---------------------------');
                randomQuestion(questionBank);
            } else if(userAnswer === 'exit') {
            console.log('GoodBye!');
            }
        })(userAnswer);

    };

    randomQuestion(questionBank);
}

gameStart();





