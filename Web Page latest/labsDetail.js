let status = window.localStorage.getItem("status");
if (status == "false") {
  let name = window.localStorage.getItem("name");

  const app = document.getElementById("app");
  const appNew = document.getElementById("appNew");
  let labId = window.localStorage.getItem("labId");

  let xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://www.trackmyhealth.in:8443/api/getalltestsbylab/" + labId,
    true
  );
  xhr.onload = function() {
    var data = JSON.parse(this.response);
    if (data.length == 0) {
      appNew.innerHTML = `

<div class="row">

<div class="col-sm-12 col-lg-3 col-md-3 float-left my-5">
      <a href="showLab.html" class="text-decoration-none" ><button type="button" onclick = "showlab.html" class="btn btn-warning p-2">
      <i class="fa fa-backward px-2" aria-hidden="true"></i>  
        Go back</button></a>
</div>

<div class="col-sm-12 col-md-9 col-lg-9">
  <p><h3 class="text-center text-danger">Sorry No Test Is Available For This Lab<span class="text-warning">	&#128542;</span></h3>
        <h6 class="text-center">Click Back button to goback to the labs page and check other labs for the test. </h6> 
  </p>
</div>

</div>
    
    `;
    }
    if (xhr.status >= 200 && xhr.status < 400) {
      data.forEach(details => {
        const card1 = document.createElement("div");
        card1.setAttribute(
          "class",
          " col-md-4 m-2  shadow-lg p-3 bg-white rounded "
        );
        // card.setAttribute("style", "width:25rem");

        const cardBody = document.createElement("div");
        cardBody.setAttribute("class", "card-body");

        const anchor = document.createElement("a");
        anchor.setAttribute("href", "labDetails.html");
        anchor.setAttribute("class", "text-decoration-none");
        const title = document.createElement("h5");
        title.setAttribute("class", " text-center border-bottom border-danger");
        title.textContent = details.test_name;

        const desDiv = document.createElement("div");
        desDiv.setAttribute("class", "text-justify");
        const description = document.createElement("span");
        description.innerHTML = `<span class="font-weight-bold">Description : </span>${
          details.description
        }
      <p><span class="font-weight-bold">Cost : </span>&#x20B9 <del>${
        details.cost
      }</del></p>
      <p><span class="font-weight-bold">Discount : </span>${
        details.discount
      }</p>
      <p><span class="font-weight-bold">Final Cost : </span>${details.cost -
        details.discount}</p>
        <div class="text-right"><button type="button" class="btn btn-primary text-center ">Add to cart</button></div>
      `;

        //   const costDiv = document.createElement("div");
        //   costDiv.setAttribute("class", "text-justify");
        //   const cost = document.createElement("span");
        //   cost.innerHTML = `<span class="font-weight-bold">Cost : &#x20B9</span>${details.cost}`;

        app.appendChild(card1);
        card1.appendChild(cardBody);
        card1.appendChild(title);

        card1.appendChild(desDiv);
        desDiv.appendChild(description);
      });
    }
  };
  xhr.send();
} else {
  alert("Please Login");
  window.location = "showLab.html";
}
let name = window.localStorage.getItem("name");
document.getElementById("body").innerHTML = `
<header>
      <a href="index.html" class="header-brand text-decoration-none">TrackMyHealth</a>
      <nav>
        <ul>
          <li><a href="showLab.html" class="text-decoration-none">View Labs</a></li>
          <li><a href="about.html"  class="text-decoration-none">About Us</a></li>
          <li><a href="contact.html"  class="text-decoration-none">Contact</a></li>
        </ul>

        <div>

        <div class="dropdown">
          <div class="dropbtn">
            <div class="float-right">
              <h5 class="text-info">Hi, ${name}

              <!--<div class="dropdown dropleft">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#profile-update"><h5 class="text-center my-1">Edit Profile</h5></a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#upload-report"><h5 class="text-center my-1">Upload Report</h5></a>
                <div class="dropdown-divider"></div>
                <div class="text-center"><button type="button" class="btn btn-primary text-center" onclick="logout()">Logout</button></div>
              </div>
            </div>-->

            <i class="fa fa-caret-down text-danger" aria-hidden="true" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"></i>
      <div class="collapse" id="collapseExample">

      <div class="bg-light">
         <a class="dropdown-item" href="#" data-toggle="modal" data-target="#profile-update"><h6 class="text-center my-1"><i class="fa fa-pencil mr-4" aria-hidden="true"></i>Edit Profile</h6></a>
          <div class="dropdown-divider"></div>

         <a class="dropdown-item" href="#" data-toggle="modal" data-target="#upload-report"><h6 class="text-center my-1"><i class="fa fa-upload mr-2" aria-hidden="true"></i>Upload Report</h6></a>
         <div class="dropdown-divider"></div>

          <div class="text-center"><button type="button" class="btn btn-primary text-center mb-2" onclick="logout()"><i class="fa fa-sign-out mr-2" aria-hidden="true"></i>Logout</button></div>
      </div>
    </div>

            <!-- Modal -->
            <div class="modal fade" id="profile-update" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Edit Your Profile</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>

                  <div class="modal-body">

                  <div class="input-group mb-3">
                      <div class="input-group-prepend">
                          <span class="input-group-text" id="inputGroup-sizing-default">Name</span>
                      </div>
                      <input type="text" id="user-name" class="form-control" aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-default">
                  </div>

                  <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-default">Phone No.</span>
                        </div>
                        <input type="number" id="user-phone" class="form-control" aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default">
                    </div>

                    <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-default">DOB</span>
                    </div>
                    <input type="date" id="user-dob" class="form-control" aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default">
                </div>

                <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-default">Address</span>
                        </div>
                        <input type="address" id="user-address" class="form-control" aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default">
                    </div>

                    <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-default">Create For</span>
                    </div>
                    <input type="text" id="create-for" class="form-control" placeholder="Father/Mother/Self.."
                        aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                </div>

                <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">City</span>
                </div>
                <input type="text" id="user-city" class="form-control" aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default">
            </div>

            <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-default">State</span>
                        </div>
                        <input type="text" id="user-state" class="form-control" aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default">
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-default">Pin</span>
                        </div>
                        <input type="number" id="user-pin" class="form-control" aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default">
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-default">Gender</span>
                            <select name="gender" id="gender" class="fa-sm text-muted ">
                                <option value="">Select a Gender</option>
                                <option value="male">Male</option>
                                <option value="Female">Female</option>
                                <option value="others">Others</option>
                            </select>
                        </div>
                    </div>

                </div>

                <div class="modal-footer">

                  <button type="button" class="btn btn-primary" data-modal="dismiss" onclick="patchingProfileDetailsToDb()">Submit</button>
                </div>
              </div>
            </div>
          </div>
           <!--modal for uploading report-->

           <div class="modal fade" id="upload-report" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Upload the previous reports </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
          <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroupFileAddon01"><i class="fa fa-files-o" aria-hidden="true"></i></span>
          </div>
          <div class="custom-file">
            <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01">
            <label class="custom-file-label" for="inputGroupFile01">Choose file</label>

          </div>

        </div>
        <div class="dropdown-divider my-3"></div>

    <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text" id="inputGroup-sizing-default">Test Name</span>
    </div>
    <input type="text" id="testName" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
    </div>

    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-default">Doctor</span>
      </div>
      <input type="text" id="doctorName" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Doctor consulted">
    </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-primary" onclick="uploadUsersPreviousReportFile()">Upload</button>
          </div>
        </div>
      </div>
    </div>

      </nav>
    </header>
    `;
