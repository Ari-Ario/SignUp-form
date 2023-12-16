let currentPage = 1;
function nextPage() {
    const mainPage = document.getElementById("all-pages");
    mainPage.style.minWidth = "400px";
    const allPages = document.getElementById(`page${currentPage}`);
    allPages.style.display = "none";
    currentPage++;
    const newPage = document.getElementById(`page${currentPage}`)
    newPage.style.display = "block";
    newPage.style.textAlign = "center";
    // newPage.style.padding= "0";
}

function secondPage(){
    currentPage = 2;
    const allPages = document.getElementById(`page4`);
    allPages.style.display = "none";
    const newPage = document.getElementById(`page${currentPage}`)
    newPage.style.display = "block";
    newPage.style.textAlign = "center";
}

// extra method, in case you go back step by step instead of jumping to second page
function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        // updatePage();
    }
}

function previewForm() {
    const allPages = document.getElementById(`page${currentPage}`);
    allPages.style.display = "none";
    currentPage++;
    const newPage = document.getElementById(`page${currentPage}`)
    newPage.style.display = "block";
    newPage.style.textAlign = "center"
    newPage.style.backgroundColor= "brown"
}


// to call the functions with buttons (second method)

// function btnMouseOut(btn) {
//     btn.style.backgroundColor ="blue"
// }

// function btnMouseOut(btn) {
//     btn.style.backgroundColor ="#FFF"
// }