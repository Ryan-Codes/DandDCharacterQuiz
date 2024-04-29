// Fetch questions from questions.json
// fetch('questions.json')
//     .then(response => response.json())
//     .then(data => {
//         // Assuming questions are stored as an array in the JSON file
//         // Display the first question
//         displayQuestion(data[0]);
//     })
//     .catch(error => console.error('Error fetching questions:', error));

// Function to display question and answers
function displayQuestion(answers)
{
    // const questionElement = document.getElementById('question');
    const answerContainer = document.getElementById('answer-container');
    
    // Update question text
    // questionElement.textContent = questionData.question;

    // Clear previous answer buttons
    // answerContainer.innerHTML = '';

    // Loop through answers and create buttons
    // questionData.answers.forEach(answer => {
    //     const button = document.createElement('button');
    //     button.textContent = answer.text;
    //     button.addEventListener('click', () => {
    //         // Handle answer selection here
    //         // You can send the selected answer to the server
    //         // and then fetch the next question
    //         // For demonstration, let's just fetch the next question immediately
    //         fetch('questions.json')
    //             .then(response => response.json())
    //             .then(data => {
    //                 // Find the index of the current question
    //                 const currentIndex = data.findIndex(q => q.question === questionData.question);
    //                 // Display the next question
    //                 displayQuestion(data[currentIndex + 1]);
    //             })
    //             .catch(error => console.error('Error fetching next question:', error));
    //     });
    answerContainer.appendChild(document.createElement("br"));
    for(const answer of answers)
    {
        const input = document.createElement("input");
        input.class = "answer-btn";
        input.type = "submit";
        input.value = answer;
        answerContainer.appendChild(input);
        answerContainer.appendChild(document.createElement("br"));
        answerContainer.appendChild(document.createElement("br"));
    }
    // });
}
