function savingTheUserDetailsToDataBase() {
    let labName = document.getElementById('labName').value;
    let userName = document.getElementById("userName").value;
    let labEmail = document.getElementById("labEmail").value;
    let labPassword = document.getElementById("labPassword").value;
    let labPhone = document.getElementById("labPhone").value;
    let labAddress = document.getElementById("labAddress").value;
    let labCity = document.getElementById("labCity").value;
    let labState = document.getElementById("labState").value;
    let labPin = document.getElementById("labPin").value;


    if (
        labName == "" ||
        userName == "" ||
        labEmail == "" ||
        labPassword == "" ||
        labPhone == "" ||
        labAddress == "" ||
        labCity == "" ||
        labState == "" ||
        labPin == ""
    ) {
        alert("Enter credentials...");
    } else {
        let body = {
            "labName": labName,
            "name": userName,
            "phone": labPhone,
            "address": labAddress,
            "city": labCity,
            "state": labState,
            "zipcode": labPin
        };

        let xhr = new XMLHttpRequest();
        xhr.open('POST', "https://www.vnritsolutions.com:8443/api/labregistration", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(body));


        xhr.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                console.log(xhr.responseText);



                let data = JSON.parse(xhr.responseText);


                if (data.status.code === 200 || data.status.code === 201) {
                    localStorage.setItem("email", labEmail);
                    alert("registration success");
                    window.localStorage.clear();

                    console.log(data.content.apiToken);
                    window.localStorage.setItem("name", labName);



                    window.localStorage.setItem("apiToken", data.content.apiToken);
                    window.localStorage.setItem("id", data.content.id);

                    window.location = "#";

                } else if (data.status.code !== 200) {
                    alert("could not register");
                }
            }
        };



    }

}