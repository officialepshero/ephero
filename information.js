function toggleText(id) {
    const moreText = document.getElementById(`moreText${id}`);
    const seeMore = document.getElementById(`seeMore${id}`);

    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        seeMore.textContent = "See less...";  
    } else {
        moreText.style.display = "none";
        seeMore.textContent = "See more..."; 
    }
}

document.addEventListener("DOMContentLoaded", () => {
    for (let i = 1; i <= 100; i++) {  
        const moreText = document.getElementById(`moreText${i}`);
        moreText.style.display = "none";
    }
});
