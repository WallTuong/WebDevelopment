let nameComments;
let emailComments;
let textComments;


document.getElementById("buttonComments").onclick = function(){
    nameComments = document.getElementById("nameComments").value;
    emailComments = document.getElementById("emailComments").value;
    textComments = document.getElementById("textComments").value;
    console.log(nameComments + " " + emailComments + " " + textComments);
    document.getElementById("com1").textContent = nameComments + "\n" + textComments;
}