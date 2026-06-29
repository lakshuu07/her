function checkPassword() {
    let pass = document.getElementById("pass").value;

    if (pass === "30102025") {
        document.getElementById("video").style.display = "block";
    } else {
        alert("Wrong password ❤️");
    }
}
