$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();
});

function savingTheUserDetailsToDataBase() {
  let userName = document.getElementById("username").value;
  let emailId = document.getElementById("emailId").value;
  let phoneNumber = document.getElementById("phoneNumber").value;
  let password1 = document.getElementById("password1").value;
  let password2 = document.getElementById("password2").value;

  if (
    userName == "" ||
    emailId == "" ||
    phoneNumber == "" ||
    password1 == "" ||
    password2 == ""
  ) {
    alert("Enter credentials...");
  } else if (password1 == password2) {
    let body = {
      username: userName,
      email: emailId,
      phone: phoneNumber,
      password: password1
    };

    var xhr = new XMLHttpRequest();

    method = "PUT";
    var url =
      "https://www.trackmyhealth.in:8443/api/put/searchAndCreateUserByEmail";
    xhr.open(method, url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(body));
    alert("successful registration");

    window.localStorage.clear();
    window.localStorage.setItem("name", userName);
    window.location = "userLogin.html";
  } else {
    alert("wrong password");
  }
}
