const displayMsg =(message,id,colorName)=>{
    document.getElementById(id).innerHTML=message
    document.getElementById(id).style.color=colorName

}
const fnameValidate = () => {
    const first_name = document.getElementById('fname').value
    if (first_name == "") {
        displayMsg('first name is mandatory', 'fnameMsg', 'red')
        return false
    }
    else if (first_name.length < 3) {
        displayMsg('first name must be more then 2 characters', 'fnameMsg', 'red')
        return false
    }
    else{
        displayMsg('valid firstname', 'fnameMsg', 'green')
        return true
    }
}
const lnameValidate = () => {
    const last_name = document.getElementById('lname').value
    if (last_name == "") {
        displayMsg('last name is mandatory', 'lnameMsg','red')
        return false
    }
    else if (last_name.length < 3) {
        displayMsg('last name must be more then 2 characters', 'lnameMsg','red')
        return false
    }
    else{
        displayMsg('valid lastname', 'lnameMsg', 'green')
        return true
    }
}

const emailValidate = () => {
    const email = document.getElementById('email').value

    if (email == "") {
        displayMsg('email is mandatory', 'emailMsg','red')
        return false
    }
    else if (email.length < 3) {
        displayMsg('email must be more then 2 characters', 'emailMsg','red')
        return false
    }
    else{
        displayMsg('valid email', 'emailMsg', 'green')
        return true
    }
}

const pwdValidate = () => {
    const password = document.getElementById('pwd').value
    if (password == "") {
        displayMsg('password is mandatory', 'pwdMsg','red')
        return false
    }
    else if (password.length < 8) {
        displayMsg('password must be more then 7 characters', 'pwdMsg','red')
        return false
    }
    else{
        displayMsg('valid password', 'pwdMsg', 'green')
        return true
    }
}

const cpwdValidate = () => {
    const confirmPassword = document.getElementById('cpwd').value
    if (confirmPassword == "") {
        displayMsg('confirm password is mandatory', 'cpwdMsg','red')
        return false
    }
    else if (confirmPassword.length < 8) {
        displayMsg('confirm password must be more then 7 characters', 'cpwdMsg','red')
        return false
    }
    else{
        displayMsg('valid confirm password', 'cpwdMsg', 'green')
        return true
    }
}
