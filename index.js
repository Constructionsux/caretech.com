(function () {
    var header = document.getElementById('sign-on-header');
    var theTime = (new Date()).getHours();
    /* Good Morning from 3AM to 11AM */
    if (theTime >= 3 && theTime <= 11) {
        header.innerText = "Good morning";
    } else if (theTime >= 12 && theTime <= 17) /* Good Afternoon from 12PM to 17PM */ {
        header.innerText = "Good afternoon";
    } else /* Good Evening */ {
        header.innerText = "Good evening";
    }
})();



const signUpinput = document.getElementById('SignupButton');
const signUpdiv = document.getElementById('signUp');
const signOndiv = document.getElementById('signOn');

signUpinput.addEventListener('click', function () {
    signUpdiv.style.display = 'none';
    signOndiv.style.display = 'block';
});