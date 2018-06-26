var myCheckbox = document.querySelector('#myCheckbox');
var submit = document.querySelector('#submit');
var isCheckedTermsOfUse = myCheckbox.checked;
var inputs = document.getElementsByTagName('input');
var regForm = document.querySelector('#reader_registration');    

function isEmpty(str) {
    return !str.replace(/^\s+/g, '').length;
}

function checkForEmptyField() {
	var currentValue;
	for (var i = inputs.length - 1; i >= 0; i--) {		
		var inputType = inputs[i].type;
		if ( (inputType.toLowerCase() === 'text') || (inputType.toLowerCase() === 'password') || (inputType.toLowerCase() === 'email')) {
			if ( !inputs[i].checkValidity() ) {
		        return false;
		    } 
		} 
	}
}

myCheckbox.addEventListener('click', function(e) {
    if (isCheckedTermsOfUse == false) {
        isCheckedTermsOfUse = true;
    } else {
        isCheckedTermsOfUse = false;
    }
});

submit.addEventListener('click', function(e) {
    var isFormCompleted = checkForEmptyField();

    if (!isFormCompleted) {
    	return false;
    } 

    if (isCheckedTermsOfUse == false) {
        alert('To complete registration you should agree with our Terms and Policy.');
    } 
});
