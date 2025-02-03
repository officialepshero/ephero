let questions = [];

function addQuestion() {
    const questionText = document.getElementById('question-text').value;
    const answers = [
        document.getElementById('answer1').value,
        document.getElementById('answer2').value,
        document.getElementById('answer3').value,
        document.getElementById('answer4').value
    ];
    const correctAnswer = document.getElementById('correct-answer').value;

    const questionImage = document.getElementById('question-image').files[0];
    const answerImages = [
        document.getElementById('answer1-image').files[0],
        document.getElementById('answer2-image').files[0],
        document.getElementById('answer3-image').files[0],
        document.getElementById('answer4-image').files[0]
    ];

    const readImageAsDataURL = (file) => {
        return new Promise((resolve, reject) => {
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => resolve(event.target.result);
                reader.onerror = reject;
                reader.readAsDataURL(file);
            } else {
                resolve(null); // No image, resolve with null
            }
        });
    };

    Promise.all([
        readImageAsDataURL(questionImage),
        ...answerImages.map(readImageAsDataURL)
    ]).then(([questionImageData, ...answerImageDatas]) => {
        const newQuestion = {
            question: questionText,
            answers: answers,
            correctAnswer: correctAnswer,
            questionImage: questionImageData,
            answerImages: answerImageDatas
        };

        questions.push(newQuestion);

        const questionsContainer = document.getElementById('questions-container');
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        let questionHTML = `<h3>${questionText}</h3>`;
        if (questionImageData) {
            questionHTML += `<img src="${questionImageData}" alt="Question Image">`;
        }
        questionHTML += `<ul>`;
        answers.forEach((answer, index) => {
            questionHTML += `<li>${answer}`;
            if (answerImageDatas[index]) {
                questionHTML += `<img src="${answerImageDatas[index]}" alt="Answer ${index + 1} Image">`;
            }
            questionHTML += `</li>`;
        });
        questionHTML += `</ul>Correct Answer: ${correctAnswer}`;
        questionDiv.innerHTML = questionHTML;
        questionsContainer.appendChild(questionDiv);

        // Reset fields
        document.getElementById('question-text').value = "";
        document.getElementById('question-image').value = "";
        document.getElementById('answer1').value = "";
        document.getElementById('answer1-image').value = "";
        document.getElementById('answer2').value = "";
        document.getElementById('answer2-image').value = "";
        document.getElementById('answer3').value = "";
        document.getElementById('answer3-image').value = "";
        document.getElementById('answer4').value = "";
        document.getElementById('answer4-image').value = "";
    });
}

function downloadForm() {
    const formHTML = generateFormHTML();

    const blob = new Blob([formHTML], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'user_form.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function generateFormHTML() {
    const questionsCopy = questions.map(question => ({
        question: question.question,
        answers: question.answers,
        correctAnswer: question.correctAnswer,
        questionImage: question.questionImage,
        answerImages: question.answerImages
    }));

    let html = `<!DOCTYPE html>
<html>
<head>
<title>User Form</title>
<link rel="stylesheet" href="question-form.css">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
<div class="logo">
        <img src="header.jpg" alt="Logo">
    </div>
<form id="userForm">`;

    questionsCopy.forEach((questionData, index) => {
        html += `<div class="question" id="question${index}">
                    <h4>${questionData.question}</h4>`;

        if (questionData.questionImage) {
            html += `<div class="image-container"> <img src="${questionData.questionImage}" alt="Question Image"></div>`;
        }

        html += `<ul>`;
        questionData.answers.forEach((answer, answerIndex) => {
            html += `<li class="answer-container"><input type="radio" name="q${index}" value="${answerIndex + 1}" id="q${index}a${answerIndex}">
            <label for="q${index}a${answerIndex}"><span>${answer}</span>`;

            if (questionData.answerImages[answerIndex]) {
                html += `<img src="${questionData.answerImages[answerIndex]}" alt="Answer ${answerIndex + 1} Image"></label>`;
            }

            html += `</li>`;
        });
        html += `</ul></div>`;
    });

    html += `<button type="button" onclick="checkAnswers()" class="submit-button">Submit</button>
  <div id="result"></div>
  </form>

  <script>
  const questions = ${JSON.stringify(questionsCopy)}; // Use the copied array

  function checkAnswers() {
    let score = 0;
    const totalPoints = 100;

    questions.forEach((questionData, index) => {
      const selectedAnswer = document.querySelector(\`input[name="q\${index}"]:checked\`);
      const questionDiv = document.getElementById(\`question\${index}\`);

      if (selectedAnswer) {
        const userAnswer = selectedAnswer.value;

        if (userAnswer === questionData.correctAnswer) {
          score += 2.5;
        } else {
          // If wrong, display the correct answer below the question
          const correctAnswerText = document.createElement('p');
          correctAnswerText.style.color = 'red';
          correctAnswerText.textContent = \`Correct answer: \${questionData.answers[questionData.correctAnswer - 1]}\`;
          questionDiv.appendChild(correctAnswerText);
        }
      }
    });

    document.getElementById('result').textContent = \`Your score: \${score} / \${totalPoints}\`;
  }
  </script>
    <p>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                </p>
</body>
</html>`;

    return html;
}