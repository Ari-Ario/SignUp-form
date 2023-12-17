let currentPage = 1;
function nextPage() {
    if (currentPage >= 5) {
        currentPage = 1
    } else if (currentPage<= 0){
        currentPage= 1
    }
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

function changeToEnglish(lang){
    const language= document.getElementById("language");
    const selectedLanguage = language.value;

    // elements of first page
    const email = document.getElementById("email")
    const signIn = document.getElementById("sign-in")
    const gmailSignIn= document.getElementById("gmail-sign-in")
    const or = document.getElementById("or")
    const signUp = document.getElementById("sign-up")

    // elements of second page
    const dear = document.getElementById("dear")
    const mr = document.getElementById("mr")
    const mrs = document.getElementById("mrs")
    const firstNameLabel = document.getElementById("first-name-label")
    const lastNameLabel = document.getElementById("last-name-label")
    const emailPage2 = document.getElementById("email-address-page2")
    const birthday = document.getElementById("birthday-label")
    const street = document.getElementById("street-label")
    const nextPage = document.getElementById("next-page")

    // elements of third page
    const plz = document.getElementById("plz")
    const place = document.getElementById("place")
    const telG = document.getElementById("tel-g")
    const telP = document.getElementById("tel-p")
    const agb = document.getElementById("agb")
    const newsLetter = document.getElementById("newsletter")
    const remark = document.getElementById("remark")
    const check = document.getElementById("check")

    // elements of fourth page
    const back = document.getElementById("back")
    const send = document.getElementById("send")

    // elements of fifth page
    const informationSent = document.getElementById("information-sent")

    if (lang.value === "en") {
        email.innerHTML = "Email Address"
        signIn.value = "Sign in"
        gmailSignIn.value = "Sign in with Gmail"
        or.innerHTML= "or"
        signUp.value = "Sign up"

        dear.innerHTML = "Dear"
        mr.innerHTML= "Mr"
        mrs.innerHTML= "Mrs/Miss"
        firstNameLabel.innerHTML= "First name"
        lastNameLabel.innerHTML= "Last name"
        emailPage2.innerHTML= "Email address"
        birthday.innerHTML= "Birthday"
        street.innerHTML= "street"
        nextPage.value = "Next"

        plz.innerHTML= "Postcode"
        place.innerHTML= "Town/City"
        telG.innerHTML= "Phone number"
        telP.innerHTML= "Cell-phone number"
        // agb.innerHTML= "AGB"
        // newsLetter.innerHTML= ""
        remark.innerHTML= "Remark"
        check.value= "Check"

        back.value= "Back"
        send.value= "Send"

        informationSent.innerHTML= "Your information was sent successfully."
    } else if (lang.value === "de") {
        location.reload();
    }
}