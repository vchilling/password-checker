function strength(password) {
    var desc = new Array();
    desc[0] = "Very Weak";
    desc[1] = "Weak";
    desc[2] = "OK";
    desc[3] = "Good";
    desc[4] = "Tough";
    desc[5] = "Strongest";

    var strength = 0;
    if (password.length > 6) {
    	strength++;
    }
    if ((password.match(/[a-z]/)) && (password.match(/[A-Z]/))) {
    	strength++;
    }
    if (password.match(/\d+/)) {
    	strength++;
    }
    if (password.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)) {
    	strength++;
    }
    if (password.length > 10) {
    	strength++;
	}

    document.getElementById("pwdesc").innerHTML = desc[strength];
    document.getElementById("pwstrength").className = "strength" + strength;
}