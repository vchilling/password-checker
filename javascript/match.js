function match(password,otherpassword)
{
if (password == otherpassword) {
 
    document.getElementById("match").innerHTML = "<img src=\"images/same.png\"> Passwords Match";
}
else{   
    document.getElementById("match").innerHTML = "<img src=\"images/notsame.png\"> Passwords Do Not Match";
}
}