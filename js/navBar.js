/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */

const btnHamburguesa = document.getElementById('icon');

btnHamburguesa.addEventListener('click', myFunction);


function myFunction() {
    const x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}