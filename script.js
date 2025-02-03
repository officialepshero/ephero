const totalQuestions = 250;
let currentPage = 1;
const questionsPerPage = 10; 
const googleFormLinks = [
    'https://docs.google.com/forms/d/e/1FAIpQLSd2tPh1dGNZfAYQWfu2VLwA7TWEctkPEWGZlttLPleQlMBx8Q/viewform?usp=dialog',
    'https://docs.google.com/forms/d/e/1FAIpQLSdYqzcsomy19YOnpwTXHOakcocw5iEzhenjtmn3eNXcXDNS-g/viewform?usp=dialog',
    'https://docs.google.com/forms/d/e/1FAIpQLSesRi47p4BJisCYbPlwMP-zn9au2IdWLr9ZuDkuMT7bOTBsaw/viewform?usp=dialog',
    'https://docs.google.com/forms/d/e/1FAIpQLSera9FBJHGNVqoYFxbxkMvziR9Zd-hd4JB2KjQfKGnFqYZaKA/viewform?usp=dialog',
    'https://docs.google.com/forms/d/e/1FAIpQLSfIyy1Ygk5yL3Ag6gnLTslSSX9-IIQZA5WJdSIYOUxOIWsEYg/viewform?usp=dialog',
    'https://docs.google.com/forms/d/e/1FAIpQLSd0jlFC7oO-UxYb6ZElxUJXMAiNtxW9UZCEsIPigu2xb33SRA/viewform?usp=dialog',
    'https://docs.google.com/forms/d/e/1FAIpQLScX_hq48oc3wNFlvAN9SqKw-ySu1o4u0a0cRy9ziiYFVp58Dg/viewform?usp=dialog',
    'https://docs.google.com/forms/d/e/1FAIpQLSfJmUt0oa764fNRAA440mHsVHeT7Zhe8kPKn0ayiTh83JSKZQ/viewform?usp=dialog',
    'https://docs.google.com/forms/d/e/1FAIpQLSc90LlCA6eMiv6mlrG4moD47fYvrtuAtccW-BzLF1WNEUiLpw/viewform?usp=dialog',
    'https://docs.google.com/forms/d/e/1FAIpQLSeoPThKHVTLPee28Ata_wJj2ozjLvy0oPDLo5tsv7BUAccLug/viewform?usp=dialog',
    'https://docs.google.com/forms/d/e/1FAIpQLScKXscZ58VF8oaNPMs70HfOcGcak94WblxKwoNtjv7nmwrgsA/viewform?usp=dialog',
    'https://docs.google.com/forms/d/e/1FAIpQLScRhvzxqSMuBOHjtHr5aXsmzinv0jmjSH00pCVMz8IrUoXwpg/viewform?usp=dialog',
    'https://docs.google.com/forms/d/e/1FAIpQLSdEFYAlQ5AYNDZ8ma_vARQBhWBeEn_CbUPDy2CJZAI48mhkvA/viewform?usp=dialog',
    'https://docs.google.com/forms/d/e/1FAIpQLSc-tm_Z7vqog5gBPtE1VJPNbZpZKS3f1Spol8VsrC_G5XiSHA/viewform?usp=dialog',
    'https://docs.google.com/forms/d/e/1FAIpQLSec-EWm6ng-6_ck80zmBspd3yRrynGHAgHXu3C6RkImjkioiw/viewform?usp=dialog',
    'https://docs.google.com/forms/d/e/1FAIpQLSduXtyiZdufXERIKwRbLypqHDtaU9r9J_CD2W71iVC7vW1bpw/viewform?usp=dialog',
    'https://docs.google.com/forms/d/e/1FAIpQLSf6Kn9nfcH6wSHR23fz3qfwpxqMQ-wuea7gceol-If83OQBQA/viewform?usp=dialog',
    'https://docs.google.com/forms/d/e/1FAIpQLSc3q8CYw19HBvwezst3t-wQGw9lX1u5vFa8rdptyd4Uj60kXA/viewform?usp=dialog',
    'https://docs.google.com/forms/d/e/1FAIpQLSeAmQf1tiTbWmKI_TcY09v9Wcl3Tw_N9_BK8DIK7WSUl3NNtw/viewform?usp=dialog',
    'https://docs.google.com/forms/d/e/1FAIpQLSe6e9c-gIGId_AeJmxYDGcNCIy9bSlhsHyOFKfenpRbTb1VuQ/viewform?usp=sharing',
    'https://docs.google.com/forms/d/e/1FAIpQLSeLAi_54PQAjFVyLgpe9NqCGAXAmpeIdaG4oJMGAtUiEH8VuA/viewform?usp=dialog',
    'https://docs.google.com/forms/d/e/1FAIpQLSfL_Kl8NRqrAxrqcyl3Ltp4B4GOaHaM0AG95dgS829DPvkDFQ/viewform?usp=dialog',
    'https://docs.google.com/forms/d/e/1FAIpQLSfsk7Rrod4-DnGFH7gCvOblS7ZssrosgblFSnhgpWvvLmwh3Q/viewform?usp=dialog',
    'https://docs.google.com/forms/d/e/1FAIpQLSeuERLG_zvA5q1T3T80xHC85lzoMiOpB_9B9hWTegHpFc1udg/viewform?usp=dialog',
    'https://docs.google.com/forms/d/e/1FAIpQLSc6CNGYIB9KbaPHFskuzYaR0AQp8hsHKcvXhW_6tUVZ7I4jWQ/viewform?usp=dialog',
    'https://docs.google.com/forms/d/e/1FAIpQLSdZejrl7QCxFd-7RKaM3s92cNjwzGdhRGgK8WLXSjGyQJ-r3A/viewform?usp=dialog',
    'https://docs.google.com/forms/d/e/1FAIpQLSfGI_Tt1qmfg13PvpxNx6532WQVnRat5K6fPO3fg3lemteQ7Q/viewform?usp=dialog',
    'https://docs.google.com/forms/d/e/1FAIpQLSc55MIHEvg5Nam7yoLcHgyP7vC4V-yMwCqRk0Ht2rOUZKc9zA/viewform?usp=dialog',
    'https://docs.google.com/forms/d/e/1FAIpQLSdOWkreOumJOkQNOYJakAbRHb1M2GJFlD8du-eFaBaen-Xq0g/viewform?usp=dialog',
    'https://docs.google.com/forms/d/e/1FAIpQLSe1I7th0_w_5-WBfEwu2QuMykuHIzwnFZZyaxnEcgtrWYFxtg/viewform?usp=dialog',
];

const questionImages = [
    "thumbnail.jpg", 
    "thumbnail.jpg", 
    "thumbnail.jpg", 
    "thumbnail.jpg", 
    "thumbnail.jpg", 
    "thumbnail.jpg", 
    "thumbnail.jpg", 
    "thumbnail.jpg", 
    "thumbnail.jpg", 
    "thumbnail.jpg", 
    "thumbnail.jpg", 
    "thumbnail.jpg", 
    "thumbnail.jpg", 
    "thumbnail.jpg", 
    "thumbnail.jpg", 
    "thumbnail.jpg", 
    "thumbnail.jpg", 
    "thumbnail.jpg", 
    "thumbnail.jpg", 
    "thumbnail.jpg", 
    "thumbnail.jpg",
    "thumbnail.jpg",
    "thumbnail.jpg", 
    "thumbnail.jpg",
    "thumbnail.jpg",
    "thumbnail.jpg", 
    "thumbnail.jpg", 
    "thumbnail.jpg",
    "thumbnail.jpg",
    "thumbnail.jpg", 
];

let filteredQuestions = [];  // Initially empty array for filtered questions

function generateQuestions() {
    const grid = document.getElementById('thumbnailGrid');
    grid.innerHTML = ''; 

    // If filteredQuestions is empty, use all questions
    const questionsToDisplay = filteredQuestions.length > 0 ? filteredQuestions : Array.from(Array(totalQuestions).keys());

    const startIdx = (currentPage - 1) * questionsPerPage;
    const endIdx = startIdx + questionsPerPage;

    for (let i = startIdx; i < endIdx; i++) {
        if (i >= questionsToDisplay.length) break;
        const block = document.createElement('div');
        block.classList.add('thumbnail-block');
        const questionNumber = questionsToDisplay[i] + 1;

        const link = document.createElement('a');
        link.href = googleFormLinks[questionsToDisplay[i]]; 
        link.target = '_blank'; 

        const img = document.createElement('img');
        img.src = questionImages[questionsToDisplay[i]]; 
        img.alt = 'Thumbnail for Question ' + questionNumber; 
        img.classList.add('thumbnail-img'); 

        const title = document.createElement('p');
        title.textContent = 'Question ' + questionNumber; 

        link.appendChild(img);
        link.appendChild(title); 

        block.appendChild(link);

        grid.appendChild(block);
    }
}

function searchFunction() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    filteredQuestions = [];

    for (let i = 0; i < totalQuestions; i++) {
        const title = 'Question ' + (i + 1);
        
        if (title.toLowerCase().includes(input)) {
            filteredQuestions.push(i);
        }
    }

    currentPage = 1;  // Reset to first page when search is performed
    saveState();  // Save the current search state
    generateQuestions();
    updatePagination();
}

function nextPage() {
    const totalPages = Math.ceil(filteredQuestions.length > 0 ? filteredQuestions.length / questionsPerPage : totalQuestions / questionsPerPage); // Use filteredQuestions if search is applied
    if (currentPage < totalPages) {
        currentPage++;
        saveState();
        generateQuestions();
        updatePagination();
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        saveState();
        generateQuestions();
        updatePagination();
    }
}

function updatePagination() {
    // Use filteredQuestions if search is applied, else use totalQuestions
    const totalPages = Math.ceil(filteredQuestions.length > 0 ? filteredQuestions.length / questionsPerPage : totalQuestions / questionsPerPage);
    document.getElementById('currentPage').textContent = currentPage + " / " + totalPages;
}

function saveState() {
    localStorage.setItem('currentPage', currentPage);
    localStorage.setItem('filteredQuestions', JSON.stringify(filteredQuestions));
}

function loadState() {
    const savedPage = localStorage.getItem('currentPage');
    const savedQuestions = localStorage.getItem('filteredQuestions');

    if (savedPage) {
        currentPage = parseInt(savedPage);
    }

    if (savedQuestions) {
        filteredQuestions = JSON.parse(savedQuestions);
    }

    generateQuestions();
    updatePagination();
}

loadState();
updatePagination();

document.getElementById('searchInput').addEventListener('input', searchFunction);

// Refresh the page every 1 minute (60000 milliseconds) and redirect to login.html
setTimeout(function() {
    window.location.href = 'login.html';
}, 60000); // 60000 milliseconds = 1 minute

