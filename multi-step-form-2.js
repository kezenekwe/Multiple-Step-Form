//select input elements
const fname = document.querySelector(".fname");
const lname = document.querySelector(".lname");
const email = document.querySelector(".email");
const phone = document.querySelector(".phone");
const day = document.querySelector(".day");
const month = document.querySelector(".month");
const year = document.querySelector(".year");
const username = document.querySelector(".username");
const password = document.querySelector(".password");

//select buttons
const btns = document.querySelectorAll(".btn");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const submit = document.querySelector(".submit");

//select label
const label = document.querySelector(".label");

//select circles
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");

//set count
count = 0;

//defaults
toggler(count);

//go to previous/next steps
btns.forEach(function(btn) {
    btn.addEventListener("click", function (e) {
        if (e.currentTarget.classList.contains("next")) {
           nextCheck(count);
        }
        if (e.currentTarget.classList.contains("prev")) {
            count--;
            toggler(count);
        }
        if (e.currentTarget.classList.contains("submit")) {
            submitCheck(count);
        }
    });
});

//refactored button function
function toggler(num) {
    if (num === 0) {
        label.innerHTML = "Name:"
        fname.style.display = "inline";
        lname.style.display = "inline";
        email.style.display = "none";
        phone.style.display = "none";
        day.style.display = "none";
        month.style.display = "none";
        year.style.display = "none";
        username.style.display = "none";
        password.style.display = "none";
        next.style.display = "inline";
        prev.style.display = "none";
        submit.style.display = "none";
    }
    else if (num === 1) {
        label.innerHTML = "Contact Info:"
        fname.style.display = "none";
        lname.style.display = "none";
        email.style.display = "inline";
        phone.style.display = "inline";
        day.style.display = "none";
        month.style.display = "none";
        year.style.display = "none";
        username.style.display = "none";
        password.style.display = "none";
        next.style.display = "inline";
        prev.style.display = "inline";
        submit.style.display = "none";
    }
    else if (num === 2) {
        label.innerHTML = "Birthday:"
        fname.style.display = "none";
        lname.style.display = "none";
        email.style.display = "none";
        phone.style.display = "none";
        day.style.display = "inline";
        month.style.display = "inline";
        year.style.display = "inline";
        username.style.display = "none";
        password.style.display = "none";
        next.style.display = "inline";
        prev.style.display = "inline";
        submit.style.display = "none";
    }
    else if (num === 3) {
        label.innerHTML = "Login Info:"
        fname.style.display = "none";
        lname.style.display = "none";
        email.style.display = "none";
        phone.style.display = "none";
        day.style.display = "none";
        month.style.display = "none";
        year.style.display = "none";
        username.style.display = "inline";
        password.style.display = "inline";
        next.style.display = "none";
        prev.style.display = "inline";
        submit.style.display = "inline";
    }
}

//check for user input on click
function nextCheck(num) {
    if (num === 0) {
        if (fname.value === "" || lname.value === "") {
            //alert("please enter a value");
            if (fname.value === "" ) {
                fname.style.backgroundColor = "pink";
                fname.addEventListener("input", function() {
                fname.style.backgroundColor = "white";
                });
            }
            if (lname.value === "" ) {
                lname.style.backgroundColor = "pink";
                lname.addEventListener("input", function() {
                lname.style.backgroundColor = "white";
                });
            }
        }
        else {
            count++;
            toggler(count);
            one.style.backgroundColor = "mediumseagreen";
            two.style.backgroundColor = "darkgray";
        }
    }
    if (num === 1) {
        if (email.value === "" || phone.value === "") {
            alert("please enter a value");
            if (email.value === "" ) {
                email.style.backgroundColor = "pink";
                email.addEventListener("input", function() {
                email.style.backgroundColor = "white";
                });
            }
            if (phone.value === "" ) {
                phone.style.backgroundColor = "pink";
                phone.addEventListener("input", function() {
                phone.style.backgroundColor = "white";
                });
            }
        }
        else {
            count++;
            toggler(count);
            two.style.backgroundColor = "mediumseagreen";
            three.style.backgroundColor = "darkgray";
        }
    }
    if (num === 2) {
        if (day.value === "" || month.value === "" || year.value === "") {
            alert("please enter a value");
            if (day.value === "" ) {
                day.style.backgroundColor = "pink";
                day.addEventListener("input", function() {
                day.style.backgroundColor = "white";
                });
            }
            if (month.value === "" ) {
                month.style.backgroundColor = "pink";
                month.addEventListener("input", function() {
                month.style.backgroundColor = "white";
                });
            }
            if (year.value === "" ) {
                year.style.backgroundColor = "pink";
                year.addEventListener("input", function() {
                year.style.backgroundColor = "white";
                });
            }
        }
        else {
            count++;
            toggler(count);
            three.style.backgroundColor = "mediumseagreen";
            four.style.backgroundColor = "darkgray";
        }
    }
}

function submitCheck(num) {
    if (username.value === "" || password.value === "" || year.value === "") {
        alert("please enter a value");
        if (username.value === "" ) {
            username.style.backgroundColor = "pink";
            username.addEventListener("input", function() {
            username.style.backgroundColor = "white";
            });
        }
        if (password.value === "" ) {
            password.style.backgroundColor = "pink";
            password.addEventListener("input", function() {
            password.style.backgroundColor = "white";
            });
        }
    }
    else {
        //reset count to 0;
        count = 0;
        toggler(count);
        //reset all input fields or simply reload the page
        four.style.backgroundColor = "mediumseagreen";
        location.reload();
    }
}