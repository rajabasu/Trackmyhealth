function addTest() {
  let testName = document.getElementById("testname").value;
  let testDescription = document.getElementById("description").value;
  let testCost = document.getElementById("cost").value;
  let testDiscount = document.getElementById("discount").value;
  let phlebotomyCharge = document.getElementById("phelbotomycharge").value;
  let preTestInformation = document.getElementById("information").value;
  let noValue = document.getElementById("no-value");
  if (
    testName == "" ||
    testDescription == "" ||
    testCost == "" ||
    testDiscount == "" ||
    phlebotomyCharge == "" ||
    preTestInformation == ""
  ) {
    alert("Enter credentials...");
    noValue.innerHTML = `Please fill all the credentials!`;
  } else {
    noValue.style.display = "none";

    let body = {
      testName: testName,
      description: testDescription,
      cost: testCost,
      discount: testDiscount,
      phlebotomyCharges: phlebotomyCharge,
      preTestInformation: preTestInformation
    };
    let labId = window.localStorage.getItem("id");

    let xhr = new XMLHttpRequest();
    xhr.open(
      "POST",
      "https://www.trackmyhealth.in:8443/api/createtest/" + id,
      true
    );
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(body));

    xhr.onreadystatechange = function() {
      let data = JSON.parse(xhr.responseText);
      if (data.status.code == 200) {
        console.log(xhr.responseText);
        alert("successfully added");
        console.log(data);
      } else {
        console.log(xhr.responseText);
        alert("not added not added");
        console.log(data);
      }
    };
  }
}
