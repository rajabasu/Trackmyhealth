function labOnTheBasisOfCity(){
    const app = document.getElementById("app");
// const container = document.createElement('div')
// container.setAttribute('class', 'container')
let city= window.localStorage.getItem('city-name')
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.trackmyhealth.in:8443/api/getalllabsbycity/"+ city, true);
xhr.onload = function() {
  var data = JSON.parse(this.response);
console.log(xhr.responseText)
  if (xhr.status >= 200 && xhr.status < 400) {
    data.forEach(details => {
      const card = document.createElement("div");
      card.setAttribute(
        "class",
        "d-flex card m-3 shadow-lg p-3 bg-white rounded justify-content-around"
      );
      card.setAttribute("style", "width:25rem");

      const cardBody = document.createElement("div");
      cardBody.setAttribute("class", "card-body");
      //head of the card
      const anchor = document.createElement("a");
      anchor.setAttribute("href", "labsDetail.html");
      anchor.setAttribute("id", details.id);

      //function for getting tests with related lab id
      anchor.setAttribute("onclick", "gettests(this.id)");
      anchor.setAttribute("class", "text-decoration-none");
      const title = document.createElement("h5");
      title.setAttribute("class", " text-center border-bottom border-danger");
      title.textContent = details.lab_name;
      //address of the card
      const addDiv = document.createElement("div");
      const addressIcon = document.createElement("i");
      addressIcon.setAttribute("class", "fa fa-address-book mr-4");
      const address = document.createElement("span");

      address.textContent = details.address;
      //phone of the card
      const phone = document.createElement("div");
      const phoneIcon = document.createElement("i");
      phoneIcon.setAttribute("class", "fa fa-phone-alt");

      const phoneNo = document.createElement("span");
      phoneNo.setAttribute("class", "font-weight-bold p-4");
      phoneNo.textContent = details.phone;
      //email. of the card
      const email = document.createElement("div");
      const emailIcon = document.createElement("i");
      emailIcon.setAttribute("class", "fa fa-envelope");
      const emailId = document.createElement("span");
      emailId.setAttribute("class", "font-italic p-4");

      if (details.email == "") {
        emailId.textContent = "No emailId";
      } else {
        emailId.textContent = details.email;
      }

      app.appendChild(card);

      card.appendChild(cardBody);
      card.appendChild(anchor);
      anchor.appendChild(title);

      // card.appendChild(p)
      card.appendChild(addDiv);
      addDiv.appendChild(addressIcon);
      addDiv.appendChild(address);
      card.appendChild(phone);
      phone.appendChild(phoneIcon);
      phone.appendChild(phoneNo);
      card.appendChild(email);
      email.appendChild(emailIcon);
      email.appendChild(emailId);
    });
  }
};
xhr.send();

function gettests(labId) {
  console.log(labId);
  window.localStorage.setItem("labId", labId);
}
}




function bangloreCity(){
    console.log("skjss 111");
    window.localStorage.setItem('city-name','bangalore');
labOnTheBasisOfCity();
}


window.onload = function changeLoginValue() {
    let status = window.localStorage.getItem("status");
    if (status == "false") {
      document.getElementById("loginandsignup").style.display = "none";
      let showname = document.getElementById("showname");
      let name = window.localStorage.getItem("name");
      showname.innerHTML = `
      <header>
        <a href="index.html" class="header-brand text-decoration-none">TRACKMYHEALTH</a>
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
    } else {
      document.getElementById("body").innerHTML = `
      <header id="loginandsignup">
        <a href="index.html" class="header-brand">TRACKMYHEALTH</a>
        <nav>
          <ul>
            <li><a class="anchor-links" href="showLab.html">View Labs</a></li>
            <li><a class="anchor-links" href="about.html">About Us</a></li>
            <li><a class="anchor-links" href="#">Contact</a></li>
          </ul>
  
          <a
            href=""
            id=""
            class="nav-link header-cases"
            data-toggle="modal"
            data-target="#sign-out"
            >Login / SignUp</a
          >
  
          <div class="modal fade" id="sign-out">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <!-- <h4 class="modal-title">Login</h4> -->
                  <div class="text-center">
                    <a
                      href=""
                      class="nav-link"
                      data-toggle="modal"
                      data-target="#register"
                    >
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Register
                      </button>
                    </a>
                  </div>
  
                  <button type="button" class="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>
  
                <div class="modal-body">
                  <!-- <h4 class="modal-title">Login</h4> -->
                  <!-- Press logout to leave -->
                  <div class="container-fluid">
                    <h3 class="login-key">
                      <i class="fa fa-user mb-4" aria-hidden="true"></i> LOGIN
                    </h3>
                    <div class="login-inputs">
                      <label class="mb-2" for="emailid">Email Id</label>
                      <input
                        id="uname"
                        type="email"
                        required
                        class="input-group-text mb-4"
                        id="inputGroup-sizing-lg"
                      />
                      <label class="mb-2" for="password">Password</label>
                      <input
                        id="upass"
                        type="password"
                        class="input-group-text"
                        id="inputGroup-sizing-lg"
                        required
                      />
                    </div>
                  </div>
                </div>
  
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-success"
                    data-dismiss="modal"
                    onclick="return makeCors()"
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
  
          <div class="modal fade" id="register">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title">Register Here...</h4>
                  <button type="button" class="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>
                <div class="modal-body">
                  <label for="username">Username</label>
                  <input
                    id="username"
                    class="form-control"
                    type="text"
                    placeholder="rockyjson"
                    required
                  /><br />
                  <label for="email">Email Id</label>
                  <input
                    id="emailId"
                    class="form-control"
                    type="email"
                    placeholder="rockyjson@example.com"
                    required
                  /><br />
                  <label for="phone-number">Phone Number</label>
                  <input
                    id="phoneNumber"
                    class="form-control"
                    type="number"
                    placeholder="8723969491"
                    required
                  /><br />
                  <label for="password">Password</label>
                  <input
                    id="password1"
                    class="form-control"
                    type="password"
                    placeholder="0000000"
                    required
                  /><br />
                  <label for="re-type-password">Retype Password</label>
                  <input
                    id="password2"
                    class="form-control"
                    type="password"
                    placeholder="0000000"
                    required
                  /><br />
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-info"
                    data-dismiss="modal"
                    onclick="savingTheUserDetailsToDataBase()"
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      `;
    }
  };
  
  //nav bar
  document.getElementById("body").innerHTML = `
  <header>
    <a href="index.html" class="header-brand text-decoration-none">TRACKMYHEALTH</a>
    <nav>
      <ul>
        <li><a href="showLab.html" class="text-decoration-none">View Labs</a></li>
        <li><a href="about.html"  class="text-decoration-none">About Us</a></li>
        <li><a href="contact.html"  class="text-decoration-none">Contact</a></li>
      </ul>
  
      <div>
  
      <div class="dropdown">
        <div class="dropbtn">
          <div class="user-name">
            <h5 class="text-info mt-4">Hi, ${name}
  
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
  //function for logging out
  function logout() {
    window.localStorage.setItem("status", "true");
    window.localStorage.clear();
    window.location = "index.html";
  }
  