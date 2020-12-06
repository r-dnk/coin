// fixed navbar and add/remove styles
window.onscroll = function showHeader() {
    var header = document.querySelector('.header');
    var navbar = document.getElementById('navbar');
    if(window.pageYOffset > 100){
        header.classList.add('header_fixed');
        navbar.style.borderBottom = "0";
        navbar.style.height = "90px";
    }
    else {
        header.classList.remove('header_fixed');
        navbar.style.borderBottom = "1px solid #6a598e";
        navbar.style.height = "110px";
    }
}
//form download crypto
function openForm() {
    document.getElementById("myForm").style.display = "block";
}
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
// default active button
document.getElementById("defaultOpen").click();
// Tabs
function openCity(evt, subject) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(subject).style.display = "block";
    evt.currentTarget.className += " active";
}
// Accordion
var acc = document.getElementsByClassName("accordion");
var panel = document.getElementsByClassName('panel');

for (var i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
        var setClasses = !this.classList.contains('active');
        setClass(acc, 'active', 'remove');
        setClass(panel, 'show', 'remove');

        if (setClasses) {
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
        }
    }
}
function setClass(els, className, fnName) {
    for (var i = 0; i < els.length; i++) {
        els[i].classList[fnName](className);
    }
}
//Accordion smooth open
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

//CountDown Timer
var count = 1120000;
var counter = setInterval(timer, 1000); //1000 update for 1 second

function makeMeTwoDigits(n){
    return (n < 10 ? "0" : "") + n;
}

function timer() {
    count = count - 1;
    if (count == -1) {
        clearInterval(counter);
        return;
    }

    var seconds = count % 60;
    var minutes = Math.floor(count / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24)
    minutes %= 60;
    hours %= 60;
    days %= 24;

    document.getElementById("days").innerHTML = makeMeTwoDigits(days) + '<br> <p>Days</p>';
    document.getElementById("hours").innerHTML = makeMeTwoDigits(hours) + '<br> <p>Hours</p>';
    document.getElementById("minutes").innerHTML = makeMeTwoDigits(minutes) + '<br> <p>Minutes</p>';
    document.getElementById("seconds").innerHTML = makeMeTwoDigits(seconds) + '<br> <p>Seconds</p>';
}
//scrolls
var service = document.getElementById("service");
var btnService = document.querySelector('.service-scroll');

function scrollService() {
    service.scrollIntoView({block: "center", behavior: "smooth"});
}
btnService.addEventListener('click', scrollService);

var about = document.getElementById("about");
var btnAbout = document.querySelector('.about-scroll');

function scrollAbout() {
    about.scrollIntoView({block: "center", behavior: "smooth"});
}
btnAbout.addEventListener('click', scrollAbout);

var token = document.getElementById("token");
var btnToken = document.querySelector('.token-scroll');

function scrollToken() {
    token.scrollIntoView({block: "center", behavior: "smooth"});
}
btnToken.addEventListener('click', scrollToken);

var faq = document.getElementById("faq");
var btnFaq = document.querySelector('.faq-scroll');

function scrollFaq() {
    faq.scrollIntoView({block: "center", behavior: "smooth"});
}
btnFaq.addEventListener('click', scrollFaq);

var contact = document.getElementById("contact");
var btnContact = document.querySelector('.contact-scroll');

function scrollContact() {
    contact.scrollIntoView({block: "center", behavior: "smooth"});
}
btnContact.addEventListener('click', scrollContact);