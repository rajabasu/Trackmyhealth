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

    xhr.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        console.log(xhr.responseText);

        window.localStorage.setItem("name", userName);
        let data = JSON.parse(xhr.responseText);
        if (data.status.code === 200 || data.status.code === 201) {
          localStorage.setItem("email", emailId);
          alert("registration success");
          console.log(data.content.apiToken);
          window.localStorage.setItem("apiToken", data.content.apiToken);

          window.localStorage.setItem("id", data.content.id);

          window.location = "showLab.html";
        } else if (data.status.code !== 200) {
          alert("could not register");
        }
      }
    };

    // window.localStorage.clear();
    // window.localStorage.setItem("name", userName);
    // window.localStorage.setItem("email", emailId);
    // console.log(xhr.responseText);
    // let data = JSON.parse(xhr.responseText);
    // console.log(data);
    // if (data.status.code == 200) {
    //   alert('successfully Registered');
    //   window.localStorage.setItem(data.content.apiToken)
    //   window.localStorage.setItem(data.content.id)
    //   window.location = 'showLab.css';

    // }
  }
}

//for navBar
