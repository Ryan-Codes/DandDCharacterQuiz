// Function to display question and answers
function displayQuestion(answers)
{
    const answerContainer = document.getElementById('answer-container');
    answerContainer.appendChild(document.createElement("br"));
    for(let i = 0; i < answers.length; i++)
    {
        const input = document.createElement("input");
        input.class = "answer-btn";
        input.type = "submit";
        input.name = answers[i];
        input.value = " " + String.fromCharCode(i + 65) + ". " + answers[i] + " ";
        answerContainer.appendChild(input);
        answerContainer.appendChild(document.createElement("br"));
        answerContainer.appendChild(document.createElement("br"));
    }
    /*
    <br>
    <input class="answer-btn" type="submit" name=<% =answers[i] %> value=" <%= String.fromCharCode(i + 65) + ". " + answers[i] %> ">
    <br>
    <br>
    */
}
