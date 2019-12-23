//for login authentication
function makeCors() {
  let email = document.getElementById("uname").value;
  let password = document.getElementById("upass").value;

  let body = {
    email: email,
    password: password
  };
  var xhr = new XMLHttpRequest();
  // xhr.withCredentials = true;
  method = "POST";
  var url = "https://www.trackmyhealth.in:8443/api/post/signinuser";
  xhr.open(method, url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  // body = {"session_token": session_token};

  xhr.send(JSON.stringify(body));

  console.log(body);
  xhr.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      console.log(xhr.responseText);

      window.localStorage.setItem("name", email);

      // console.log(xhr.responseText.content.apiToken)
      // console.log(sessionStorage.getItem("api"))
      let data = JSON.parse(xhr.responseText);
      // window.localStorage.setItem("api",JSON.stringify(body.email));
      console.log(data);
      if (data.status.code === 200) {
        localStorage.setItem("email", email);
        alert("login success");
        console.log(data.content.apiToken);
        window.localStorage.setItem("apiToken", data.content.apiToken);

        window.localStorage.setItem("id", data.content.id);

        window.location = "showLab.html";
        window.localStorage.setItem("status", "false");
      } else if (data.status.code !== 200) {
        alert("wrong details");
        window.location = "userLogin.html";
      }
    }
  };
}
