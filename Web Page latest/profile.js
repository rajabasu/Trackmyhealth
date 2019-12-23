function patchingProfileDetailsToDb() {
  var formData = new FormData();

  formData.append("name", $("#user-name").val());
  formData.append("phoneno", $("#user-phone").val());
  formData.append("dateOfBirth", $("#user-dob").val());
  formData.append("city", $("#user-city").val());
  formData.append("state", $("#user-state").val());
  formData.append("zipcode", $("#user-pin").val());
  formData.append("createFor", $("#create-for").val());
  formData.append("permanentAddress", $("#user-address").val());
  // formData.append("gender", $('#gender').val());

  // let name = document.getElementById('user-name').value;
  // let phoneNumber = document.getElementById('user-phone').value;
  // let dateOfBirth = document.getElementById('user-dob').value;
  // let createFor = document.getElementById('create-for').value;
  // let city = document.getElementById('user-city').value;
  // let state = document.getElementById('user-state').value;
  // let zipcode = document.getElementById('user-pin').value;
  // let address = document.getElementById('user-address').value;
  // let gender = document.getElementById('gender').value;

  let apiToken = localStorage.getItem("apiToken");
  let userid = localStorage.getItem("id");

  var xhr = new XMLHttpRequest();

  method = "POST";
  var url = "https://www.trackmyhealth.in:8443/api/postmemandaddress/" + userid;
  xhr.open(method, url, true);

  xhr.setRequestHeader("apiToken", apiToken);

  // alert("udated successfully");
  // console.log(xhr.responseText);
  // location.reload();

  console.log(xhr.status);
  xhr.onload = function() {
    console.log("xhr response:" + xhr.responseText);
    if (xhr.status == 0) {
      alert("updated successfully close the popup");
      location.reload();
    }
  };
  xhr.send(formData);
  // console.log(formData);
}

function uploadUsersPreviousReportFile() {
  // let formData = new FormData();
  let id = window.localStorage.getItem("id");
  let inputPic = document.getElementById("inputGroupFile01");

  let formData = new FormData();

  formData.append("file", inputPic.files[0]);
  formData.append("testName", $("#testName").val());
  formData.append("consultantDoctor", $("#doctorsName").val());

  let xhr = new XMLHttpRequest();
  xhr.open(
    "POST",
    "https://www.trackmyhealth.in:8443/api/postreports/" + id,
    true
  );

  xhr.onload = function() {
    let data = JSON.parse(xhr.responseText);

    console.log("xhr response:" + xhr.responseText);
    //console.log(data1);
    window.localStorage.setItem("filename", data.fileName);
    alert("successfully uploaded");
  };

  xhr.send(formData);
}
