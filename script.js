let currentPage = 1;
function nextPage() {
    const allPages = document.getElementById(`page${currentPage}`);
    allPages.style.display = "none";
    currentPage++;
    const newPage = document.getElementById(`page${currentPage}`)
    newPage.style.display = "block";
    newPage.style.textAlign = "center"
    newPage.style.backgroundColor= "brown"
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        updatePage();
    }
}

/* function updatePage() {
    const container = document.querySelector('.signup-container');
    container.style.transform = `translateX(${-100 * (currentPage - 1)}%)`;
} */

function submitForm() {
    // Add form submission logic here
    alert('Form submitted successfully!');
}