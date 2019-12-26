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
    <!-- header -->
    <header id="loginandsignup">
      <nav class="navbar navbar-expand-lg navbar-light nav-bar">
        <a
          class="navbar-brand header-brand"
          href="index.html"
          style="color: #f83839;"
          >TrackMyHealth</a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <span class="border"></span>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item ">
              <a
                class="nav-link anchor-links text-decoration-none header-cases text-dark"
                href="showLab.html"
                >VIEW LABS <span class="sr-only">(current)</span></a
              >
            </li>
            <li class="nav-item ">
              <a
                class="nav-link anchor-links text-decoration-none header-cases text-dark"
                href="about.html"
                >ABOUT US</a
              >
            </li>
            <li class="nav-item ">
              <a
                class="nav-link anchor-links text-decoration-none header-cases"
                href="contact.html"
                >CONTACT</a
              >
            </li>
          </ul>

          <form
            class="form-inline my-2 my-lg-0 login-reg justify-content-center"
          >
            <a
              href=""
              id=""
              class="nav-link header-cases text-dark"
              data-toggle="modal"
              data-target="#sign-out"
              >LOGIN / SIGNUP</a
            >
          </form>

          <!-- modal -->
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
          <!-- end of modal -->
        </div>
      </nav>
    </header>
    <!-- end of header -->
    `;
  }
};
