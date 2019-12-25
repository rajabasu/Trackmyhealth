//slider for comments
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// register

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
    window.location = "showLab.html";
  } else {
    alert("wrong password");
  }
}

//change login view with login status
window.onload = function changeLoginValue() {
  let status = window.localStorage.getItem("status");

  if (status == "false") {
    document.getElementById("loginandsignup").style.display = "none";
    let showname = document.getElementById("showname");
    let name = window.localStorage.getItem("name");
    showname.innerHTML = `
    <header>
      <a href="index.html" class="header-brand text-decoration-none ">TrackMyHealth</a>
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
              <h5 class="text-info my-3">Hi, ${name}
              
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
  }
};
