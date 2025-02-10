let currentPhotoIndex = 1;
const totalPhotos = 10;
const correctAnswers = [74, 6, 8, 5, 15, 45, 7, 16, 26, 42]; // Example correct answers
const userAnswers = [];
const photoElement = document.getElementById('photo');
const numberInput = document.getElementById('numberInput');
const deleteBtn = document.getElementById('deleteBtn');
const nextBtn = document.getElementById('nextBtn');
const quizContainer = document.getElementById('quizContainer');
const resultsContainer = document.getElementById('resultsContainer');
const resultsDiv = document.getElementById('results');
const restartBtn = document.getElementById('restartBtn');
const photoNumber = document.getElementById('photoNumber');

// Function to update the photo and question number
function updatePhoto() {
    photoElement.src = `photo${currentPhotoIndex}.jpg`;
    photoElement.alt = `Photo ${currentPhotoIndex}`;
    photoNumber.textContent = currentPhotoIndex;
    numberInput.value = '';
    nextBtn.disabled = true;
}

// Function to handle key press
document.querySelectorAll('.key').forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('delete')) {
            numberInput.value = numberInput.value.slice(0, -1);
        } else {
            numberInput.value += button.getAttribute('data-value');
        }
        nextBtn.disabled = numberInput.value === '';
    });
});

// Function to handle next button click
nextBtn.addEventListener('click', () => {
    const userAnswer = parseInt(numberInput.value, 10);
    userAnswers.push(userAnswer);

    if (currentPhotoIndex < totalPhotos) {
        currentPhotoIndex++;
        updatePhoto();
    } else {
        showResults();
    }
});

// Function to show results
function showResults() {
    quizContainer.style.display = 'none';
    resultsContainer.style.display = 'block';

    let resultsHTML = '';
    for (let i = 0; i < totalPhotos; i++) {
        const isCorrect = userAnswers[i] === correctAnswers[i];
        resultsHTML += `
            <div class="result-item">
                Photo ${i + 1}: Your answer: ${userAnswers[i]} | 
                Correct answer: ${correctAnswers[i]} | 
                <span style="color: ${isCorrect ? 'green' : 'red'};">${isCorrect ? 'Correct' : 'Incorrect'}</span>
            </div>
        `;
    }
    resultsDiv.innerHTML = resultsHTML;
}

// Function to restart the quiz
restartBtn.addEventListener('click', () => {
    currentPhotoIndex = 1;
    userAnswers.length = 0;
    quizContainer.style.display = 'block';
    resultsContainer.style.display = 'none';
    updatePhoto();
});

// Initialize the first photo
updatePhoto();
