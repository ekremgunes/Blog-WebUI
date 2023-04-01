
const userName = document.querySelector("#UserName")
const password = document.querySelector("#Password")
const email = document.querySelector("#Email")
const repassword = document.querySelector("#RePassword")
var userNameStatus = false
var passwordStatus = false
var emailStatus = false
var repasswordStatus = false

function Login() {

    //username
    if (userName.value.trim() == "") {
        userName.style.borderColor = "#f22d19ed"
        userNameStatus = false

    } else {
        userName.style.borderColor = "#46ca0a"
        userNameStatus = true
    }
    /*email
    if (email.value.trim() == "") {
        email.style.borderColor = "#f22d19ed"
        emailStatus = false

    } else if (!email.value.includes("@")) {
        email.style.borderColor = "#f22d19ed"
        emailStatus = false
    } else {
        email.style.borderColor = "#46ca0a"
        emailStatus = true
    }*/
    //password
    if (password.value.trim() == "") {
        password.style.borderColor = "#f22d19ed"
        passwordStatus = false
    } else {
        password.style.borderColor = "#46ca0a"
        passwordStatus = true
    }

    if (userNameStatus && passwordStatus) //add email for using
    {
        //ajax or fetch action ->
        console.log("login is successfully")
    } else {
        userName.addEventListener("keyup", () => {
            if (userName.value.trim() == "") {
                userName.style.borderColor = "#f22d19ed"
            } else {
                userName.style.borderColor = "#46ca0a"
            }
        })
        
        password.addEventListener("keyup", () => {
            if (password.value.trim() == "") {
                password.style.borderColor = "#f22d19ed"
            } else {
                password.style.borderColor = "#46ca0a"
            }
        })
        /*email.addEventListener("keyup", () => {

            if (email.value.trim() == "") {
                email.style.borderColor = "#f22d19ed"
                loginStatus = false

            } else if (!email.value.includes("@")) {
                email.style.borderColor = "#f22d19ed"
                loginStatus = false
            } else {
                email.style.borderColor = "#46ca0a"
                loginStatus = true
            }
        })*/
    }
}

function SignUp() {

    //username
    if (userName.value.trim() == "") {
        userName.style.borderColor = "#f22d19ed"
        userNameStatus = false

    } else {
        userName.style.borderColor = "#46ca0a"
        userNameStatus = true
    }
    //email
    if (email.value.trim() == "") {
        email.style.borderColor = "#f22d19ed"
        emailStatus = false

    } else if (!email.value.includes("@")) {
        email.style.borderColor = "#f22d19ed"
        emailStatus = false
    } else {
        email.style.borderColor = "#46ca0a"
        emailStatus = true

    }
    //password
    if (password.value.trim() == "") {
        password.style.borderColor = "#f22d19ed"
        passwordStatus = false

    } else {
        password.style.borderColor = "#46ca0a"
        passwordStatus = true

    }
    if (repassword.value.trim() == "") {
        repasswordStatus = false
    } else {
        repasswordStatus = true
    }

    if (userNameStatus && emailStatus && passwordStatus && repasswordStatus && comparePasswords()) {
        //ajax or fetch action ->
        console.log("signup is successfully");
    } else {
        userName.addEventListener("keyup", () => {
            if (userName.value.trim() == "") {
                userName.style.borderColor = "#f22d19ed"
            } else {
                userName.style.borderColor = "#46ca0a"
            }
        })
        password.addEventListener("keyup", () => {
            if (password.value.trim() == "") {
                password.style.borderColor = "#f22d19ed"
            } else {
                password.style.borderColor = "#46ca0a"
            }
        })
        
        email.addEventListener("keyup", () => {

            if (email.value.trim() == "") {
                email.style.borderColor = "#f22d19ed"
                loginStatus = false

            } else if (!email.value.includes("@")) {
                email.style.borderColor = "#f22d19ed"
                loginStatus = false
            } else {
                email.style.borderColor = "#46ca0a"
                loginStatus = true
            }
        })
    }

}
function comparePasswords() {
    if (repassword.value != password.value || password.value.trim() == "") {
        repassword.style.borderColor = "#f22d19ed"
        return false
    }
    else{
        repassword.style.borderColor = "#46ca0a"
        return true
    }
}