function passwordValidate1(password) {
    if (password.length === 0) {
        return 'Please enter more than 0 characters'
    }
    if (password.length < 7) {
        return 'Weak';
    } else {
        return 'Strong';
    }
}

function passwordValidate2(password) {

}

// console.log(passwordValidate1('gfggfg'))


function passwordValidate2(password) {
    return password.length>7 ? 'Strong':'Weak';
}
// console.log(passwordValidate2('gddlfg'))


function advancePasswordValidate(password) {
    return password.length>7&& /[A-Z]/.test(password)? 'Very Strong':password.length>7?'Strong': 'Weak';
}

console.log(advancePasswordValidate('gLKlklklhgh'))