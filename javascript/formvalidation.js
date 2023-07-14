const displayMsg = (message, id, colorName) => {
    document.getElementById(id).innerHTML = message
    document.getElementById(id).style.color = colorName

}
const fnameValidate  = () => {
    const first_name = document.getElementById('fname').value
    if (first_name == "") {
        displayMsg('first name is mandatory', 'fnameMsg', 'red')
        return false
    }
    else if (!first_name.match(/^([a-z])+$/)) {
        displayMsg('first name only contains lowercase alphabets', 'fnameMsg', 'red')
        return false
    }
    else if (first_name.length < 3) {
        displayMsg('first name must be more then 2 characters', 'fnameMsg', 'red')
        return false
    }
    else {
        displayMsg('valid firstname', 'fnameMsg', 'green')
        return true
    }
}
const lnameValidate = () => {
    const last_name = document.getElementById('lname').value
    if (last_name == "") {
        displayMsg('last name is mandatory', 'lnameMsg', 'red')
        return false
    }
    else if (!last_name.match(/^([a-z])+$/)) {
        displayMsg('last name only contains lowercase letters only', 'lnameMsg', 'red')
        return false
    }
    else if (last_name.length < 3) {
        displayMsg('last name must be more then 2 characters', 'lnameMsg', 'red')
        return false
    }
    else {
        displayMsg('valid lastname', 'lnameMsg', 'green')
        return true
    }
}

const emailValidate = () => {
    const email = document.getElementById('email').value

    if (email == "") {
        displayMsg('email is mandatory', 'emailMsg', 'red')
        return false
    }
    else if (!email.match(/^([a-zA-Z0-9])([a-z0-9\-\_\.])+\@+([a-z])+\.+([a-z])+$/)) {
        displayMsg('invalid email format', 'emailMsg', 'red')
        return false
    }
    else {
        displayMsg('valid email', 'emailMsg', 'green')
        return true
    }
}

const pwdValidate = () => {
    const password = document.getElementById('pwd').value
    if (password == "") {
        displayMsg('password is mandatory', 'pwdMsg', 'red')
        return false
    }
    else if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\@\#\$\-\_\?]).{8,100}$/)) {
        displayMsg('password be minimun of 8 character and should be like: Abc@123', 'pwdMsg', 'red')
        return false
    }
    else {
        displayMsg('strong password', 'pwdMsg', 'green')
        return true
    }
}

const cpwdValidate = () => {
    const password = document.getElementById('pwd').value
    const confirmPassword = document.getElementById('cpwd').value
    if (confirmPassword == "") {
        displayMsg('confirm password is mandatory', 'cpwdMsg', 'red')
        return false
    }
    else if (password !== confirmPassword) {
        displayMsg('password and confirm password is not matche: Abc@123', 'pwdMsg', 'red')
        return false
    }
    else {
        displayMsg('password and confirm password matchs', 'cpwdMsg', 'green')
        return true
    }
}

const validForm=() => {
    if (fnameValidate() && lnameValidate() && emailValidate() && pwdValidate() && cpwdValidate()) {
        return true
    }
    else {
        return false
    }
}