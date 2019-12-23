function registration() {
  let labUser = document.getElementById("labUser").value;
  let emailId = document.getElementById("email").value;
  let labName = document.getElementById("labName").value;
  let labPhone = document.getElementById("labPhone").value;
  let labState = document.getElementById("labState").value;
  let labCity = document.getElementById("labCity").value;
  let labAddress = document.getElementById("labAddress").value;
  let labPin = document.getElementById("labPin").value;
  let labPass1 = document.getElementById("labPass1").value;
  let labPass2 = document.getElementById("labPass2").value;

  if (
    labUser == "" ||
    labName == "" ||
    labPhone == "" ||
    labState == "" ||
    labCity == "" ||
    labAddress == "" ||
    labPin == "" ||
    labPass1 == "" ||
    labPass2 == ""
  ) {
    alert("Enter Credential...");
  } else if (labPass1 != labPass2) {
    alert("Enter same password.");
  } else if (labPass1 == labPass2) {
    let body = {
      email: emailId,
      labName: labName,
      name: labUser,
      phone: labPhone,
      address: labAddress,
      city: labCity,
      state: labState,
      zipcode: labPin
    };
    let filePath = window.localStorage.getItem("filename");

    let xhr = new XMLHttpRequest();
    xhr.open(
      "POST",
      "https://www.trackmyhealth.in:8443/api/postlab?filepath=" + filePath,
      true
    );
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(body));

    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log(xhr.responseText);
        let data = JSON.parse(xhr.responseText);
        if (data.apiToken == "") {
          alert("count not register");
        } else {
          alert("registration successful");
          window.localStorage.clear();
          window.localStorage.setItem("name", data.name);
          window.localStorage.setItem("labName", data.labName);
          window.localStorage.setItem("labId", data.id);
          window.location = "labsDetail.html";
        }
      }
    };
  }
}
// end of registraton

// login
// function login() {
//   let labId = document.getElementById("labId").value;
//   let labpass = document.getElementById("labpass").value;
// }
// end of login

function photoUpload(file) {
  var inputPic = document.getElementById("userPic");

  var data = new FormData();
  data.append("file", inputPic.files[0]);
  let xhr = new XMLHttpRequest();
  xhr.open(
    "POST",
    "https://www.vnritsolutions.com:8443/api/uploadaccessoryphoto",
    true
  );

  xhr.onload = function() {
    let data1 = JSON.parse(xhr.responseText);

    console.log("xhr response:" + xhr.responseText);
    //console.log(data1);
    window.localStorage.setItem("filename", data1.fileName);
  };

  alert("successfully uploaded");

  xhr.send(data);
}
