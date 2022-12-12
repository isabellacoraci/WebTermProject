function darkMode() {
	document.querySelector("body").style.backgroundColor="black"
    document.querySelector("body").style.color="white"
}

let btn = document.forms.signinForm.submit
let firstemail = document.forms.signinForm.firstemail
let secondemail = document.forms.signinForm.secondemail
let errs = document.querySelector("#errors")

btn.addEventListener("click", validatEmails)

function validateEmails(event) {
    if(firstemail.value != secondemail.value) {
        let msg = "Your emails don't match."
        errs.innerHTML = msg
        event.preventDefault()
    }
}
